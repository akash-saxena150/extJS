Ext.define('myApp.store.Customers', {
    extend: 'Ext.data.Store',
    requires: [
        'myApp.model.Customer',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Customers',
            autoLoad: true,
            model: 'myApp.model.Customer',
            proxy: {
                type: 'ajax',
                url: 'serverside/data/customers.json',
                actionMethods: {read:"POST"},
                reader: {
                    type: 'json',
                    rootProperty: 'records',
                    useSimpleAccessors: true
                }
            }
        }, cfg)]);
    }
});