/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('bug_tracker.view.list.ListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.list',

    onItemSelectedList: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Done deal?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
