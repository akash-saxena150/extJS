Ext.define('myApp.view.modules.customers', { //step 1
    extend: 'Ext.grid.Panel',
    requires: [
        'myApp.view.modules.customersController',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.grid.column.Boolean',
        'Ext.view.Table',
        'Ext.button.Button',
        'Ext.toolbar.Fill',
        'Ext.toolbar.Paging'
    ],
    xtype: 'customersmodule', //step 2
    alias: 'widget.customersmodule',
    controller: 'customersmodule',
    frame: true,
    closable: true,
    iconCls: '',
    title: 'Customers...',
    forceFit: true,
    listeners: {//step 3
        'afterrender': {fn: 'myafterrender'},
        'render': {fn: 'myrenderevent'}
    },
    initComponent: function() { //step 4
        var me = this;
        me.store = me.createCustomersStore();
        me.columns = [{
                        xtype: 'rownumberer',
                        width: 50,
                        align:'center'
                        },{
                        xtype: 'numbercolumn',
                        width: 70,
                        dataIndex: 'id',
                        text: 'Id',
                        format: '0'
                        },{
                        xtype: 'templatecolumn',
                        text: 'Country',
                        dataIndex: 'country',
                        tpl: '<div><div class="flag_{[values.country.toLowerCase()]}">' +
                        '&nbsp</div>&nbsp;&nbsp;{country}</div>'
                        },{
                        xtype: 'gridcolumn',
                        width: 210,
                        dataIndex: 'name',
                        text: 'Customer name'
                        },
                        {
                        xtype: 'datecolumn',
                        dataIndex: 'clientSince',
                        width: 120,
                        text: 'Client Since',
                        format: 'M-d-Y',
                        align:'center'
                        },{
                        xtype: 'booleancolumn',
                        dataIndex:'sendnews',
                        width: 100,
                        align:'center',
                        text: 'Send News?',
                        falseText: 'No',
                        trueText: 'Yes'
                    }];
        me.dockedItems=[{
                            xtype: 'toolbar', dock: 'top',
                            items: [{
                                xtype: 'button',
                                text: 'New...',
                                iconCls:'addicon-16',
                                action:'newrecord',
                                listeners: {click:'btnactionclick'}
                                },{
                                xtype: 'button',
                                text: 'Edit...',
                                iconCls:'editicon-16',
                                action:'editrecord',
                                listeners: {click:'btnactionclick'}
                                },{
                                xtype: 'button',
                                text: 'Delete...',
                                iconCls:'deleteicon-16',
                                action:'deleterecord',
                                listeners: {click:'btnactionclick'}
                                },{
                                xtype: 'tbfill'
                                },{
                                xtype: 'button',
                                text: 'Help.',
                                iconCls:'help-16',
                                action:'showhelp'
                            }]
                        }];
        me.callParent();
    },
    createCustomersStore:function(){
        return Ext.create('myApp.store.Customers');
    }
});