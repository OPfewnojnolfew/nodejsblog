define(function(require, exports, module) {
    var templates = {},
        index = 1,
        getTemplte = function(url) {
            var item;
            for (item in templates) {
                if (templates.hasOwnProperty(item) && templates[item].url === url) {
                    return templates[item];
                }
            }
            return null;
        };
    module.exports = {
        loadTemplate: function(url) {
            var template = getTemplte(url);
            if (template) {
                return $.Deferred(function(dtd) {
                    dtd.resolve();
                    return dtd;
                }).then(function() {
                    return template.templateObj;
                });
            }
            return $.get(url).then(function(text) {
                var templateObj = Handlebars.compile(text);
                templates[++index] = {
                    'url': url,
                    'templateObj': templateObj
                };
                return templateObj;
            });
        }
    };
});
