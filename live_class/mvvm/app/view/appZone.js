Ext.define('myApp.view.appZone', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.appzone',
    // Alias property let us define the xtype to appzone on the viewport previously 
    requires: [
        'myApp.store.modulesTreeDs',
        'Ext.tab.Panel',
        'Ext.tab.Tab',
        'Ext.tree.Panel',
        'Ext.tree.View'
    ],
    layout: 'border',
    header: false,
    title: '',
    items: [{
        xtype: 'tabpanel',
        region: 'center',
        itemId: 'mainZone',
        header: false,
        title: '',
        items: [{
            xtype: 'panel',
            itemId: 'startappPanel',
            title: 'Dashboard',
            bodyPadding: 5,
            html:'myApp Dashboard',
            region: 'center'
        }]
        },{
        xtype: 'panel',
        itemId: 'accessPanel',
        region: 'west',
        split: true,
        width: 180,
        layout: 'fit',
        title: 'App modules',
        items: [{
            xtype: 'treepanel',
            header: false,
            title: 'My Tree Panel',
            store: Ext.create( 'myApp.store.modulesTreeDs', {
                storeId: 'accessmodulesDs'
            }), //'modulesTreeDs'
            rootVisible: false
        }]
    }]
});