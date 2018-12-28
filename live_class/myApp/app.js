/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.Loader.setConfig({});
Ext.application({
    

    name: 'myApp',
    // requires: [
    //     // This will automatically load all classes in the myApp namespace
    //     // so that application classes do not need to require each other.
    //     'myApp.*'
    // ],
    views: [
        'myViewport'
    ],
    launch: function() {
        Ext.create('myApp.view.myViewport');
    },
});
