Ext.define('myApp.view.appZone', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.appzone',
    layout: 'border',
    require:[
        'myApp.store.modulesTreeDs',
        'Ext.panel.Panel',
        'Ext.tab.Panel',
        'Ext.tab.Tab',
        'Ext.tree.Panel',
        'Ext.tree.View'
    ],
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
    },
    {
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
    }
]
})