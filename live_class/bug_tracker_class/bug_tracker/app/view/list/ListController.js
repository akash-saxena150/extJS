/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('bug_tracker.view.list.ListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.list',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Wallah modern!', 'Decided?', 'onConfirm', this);
    },
    onItemSelectedModern: function (sender, record) {
        Ext.Msg.confirm('Wallah!', 'Decided?', 'onConfirm', this);
    },
    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
