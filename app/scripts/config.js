seajs.config({
    base: '/scripts',
    alias: {
        'jquery': '/assets/scripts/lib/jquery-1.10.2.min',
        'mootools': '/assets/scripts/lib/mootools',
        'json': '/assets/scripts/lib/json2',
        'handlebars': '/assets/scripts/lib/handlebars-v1.3.0',
        'date': '/assets/scripts/lib/My97DatePicker/WdatePicker',
    },
    preload: [
        this.jQuery ? '' : 'jquery',
        this.Handlebars ? '' : 'handlebars',
        this.MooTools ? '' : 'mootools'
    ]
});
