/**
 * This view is an example list of people.
 */
Ext.define('bug_tracker.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    controller: 'list',
    requires: [
        'bug_tracker.store.Personnel',
        'bug_tracker.view.list.ListController',
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelectedList',
        scope: 'controller'
    }
});
