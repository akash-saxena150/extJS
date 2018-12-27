/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('bug_tracker.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    // constructor: function(){
    //     alert("I am constructed!")
    // },
    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you absolutely sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
