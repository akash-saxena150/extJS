/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.Loader.setConfig({});
Ext.application({
    name: 'myApp',
    controllers: ['app'],
    views: [
        'myViewport',
        'appZone'
    ],
    launch: function() {
        Ext.create('myApp.view.myViewport');
    },
    init:function() {
        this.setDefaultToken('');
    }
});
