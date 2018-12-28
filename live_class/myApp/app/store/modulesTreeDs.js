Ext.define('myApp.store.modulesTreeDs', {
    extend: 'Ext.data.TreeStore',
    requires: [
        'myApp.model.modulesModel',
        'Ext.data.proxy.Ajax'
    ],
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'mymodulesTreeDs',
            autoLoad: true,
            model: 'myApp.model.modulesModel',
            proxy: {
                type: 'ajax',
                url: 'serverside/data/menu_extended.json'
            }
        }, cfg)]);
    }
})