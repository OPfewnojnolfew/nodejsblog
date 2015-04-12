/**
 * 文章视图
 * @param  {[type]} require
 * @param  {[type]} exports
 * @param  {[type]} module
 * @return {[type]}
 */
define(function(require, exports, module) {
    //模板地址
    var templates = {
            LIST: '/assets/scripts/blog/template/list.html'
        },
        template = require('modules/template'),
        collection = new(require('./articleCollection'))();



    var View = Backbone.View.extend({

        //... is a list tag.
        el: $('<div class="article-container"></div>'),


        // The DOM events specific to an item.
        events: {
            'click .toggle': 'toggleDone'
        },

        // The TodoView listens for changes to its model, re-rendering. Since there's
        // a one-to-one correspondence between a **Todo** and a **TodoView** in this
        // app, we set a direct reference on the model for convenience.
        initialize: function() {
            this.listenTo(collection, 'sync', this.render);
            $('.primary').html(this.$el);
            collection.fetch();
        },

        // Re-render the titles of the todo item.
        render: function() {
            var self = this;
            template.loadTemplate(templates.LIST).then(function(tpl) {
                self.$el.html(tpl({
                    articles: collection.toJSON()
                }));
            });
            return this;
        }

    });
    module.exports = View;
});
