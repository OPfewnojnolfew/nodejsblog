seajs.config({
    alias: {
        'jquery': '/assets/scripts/lib/jquery-1.10.2.min',
        'mootools': '/assets/scripts/lib/mootools',
        'handlebars': '/assets/scripts/lib/handlebars-v1.3.0',
        'date': '/assets/scripts/lib/My97DatePicker/WdatePicker',
        'articleCreator':'/assets/scripts/blog/articleMain',
        'articleModel':'/assets/scripts/blog/articleModel',
        'articleController':'/assets/scripts/blog/articleController',
        'articleView':'/assets/scripts/blog/articleView'
    },
    preload: [
        this.jQuery ? '' : 'jquery',
        this.Handlebars ? '' : 'handlebars',
        this.MooTools ? '' : 'mootools'
    ]
});
