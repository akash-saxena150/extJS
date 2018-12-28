Ext.define('myApp.view.forms.customerForm', { //Step 1
    extend: 'Ext.form.Panel',
    alias: 'widget.customerform',
    xtype: 'customerform',
    requires:[
    'Ext.form.field.Number',
    'Ext.form.field.Date',
    'Ext.form.field.ComboBox',
    'Ext.toolbar.Toolbar',
    'Ext.toolbar.Fill',
    'Ext.button.Button',
    'myApp.view.forms.customerFormViewController',
    'myApp.view.forms.customerFormViewModel',
    'myApp.model.Customer'
    ],
    controller: 'customerform', //Step 2
    ViewModel: {type: 'customerform' }, //Step 2
    bodyPadding: 6,
    header: false,
    title: 'Customer...',
    bind:{ title: '{refName}' }, //Step 3
    defaults:{
    labelAlign: 'right',
    labelWidth: 80,
    msgTarget: 'side',
    anchor: '-18'
    },
    items: [{
        xtype: 'numberfield',
        fieldLabel: 'Customer ID',
        name: 'id',
        anchor: '100%',
        maxWidth: 200,
        minWidth: 200,
        hideTrigger: true,
        bind:{ value:'{rec.id}', readOnly:'{readOnlyId}'}//Step 3
        },{
            xtype: 'textfield',
            fieldLabel: 'Name',
            name: 'name',
            bind: '{rec.name}' //Step 3
        },{
            xtype: 'textfield',
            fieldLabel: 'Phone',
            name: 'phone',
            bind: '{rec.phone}' //Step 3
        },{
            xtype: 'textfield',
            fieldLabel: 'Web site',
            name: 'website',
            bind: '{rec.website}' //Step 3
        },{
            xtype: 'datefield',
            anchor: '60%',
            fieldLabel: 'Client since',
            name:'clientSince',
            submitFormat: 'Y-m-d',
            bind:'{rec.clientSince}' //Step 3
        },{
            xtype: 'combobox',
            fieldLabel: 'Country',
            name: 'country',
            store: Ext.create('Ext.data.Store', {
            fields: ['id', 'name'],
            data : [
            {"id": "USA", "name": "United States of America"},
            {"id": "Mexico", "name": "Mexico"}
            ]
            }),
            valueField: 'id',
            displayField: 'name',
            bind:'{rec.country}' //Step 3
        },{
            xtype: 'combobox',
            fieldLabel: 'Status',
            name: 'status',
            store: Ext.create('Ext.data.Store', {
            fields: ['id', 'name'],
            data: [
                {"id": "Active", "name": "Active"},
                {"id": "Inactive", "name": "Inactive"},
                {"id": "Suspended", "name": "Suspended"},
                {"id": "Prospect", "name": "Prospect"},
            ]
            }),
            valueField: 'id',
            displayField: 'name',
            bind: '{rec.status}' //Step 3
        },{
            xtype: 'numberfield',
            anchor: '60%',
            fieldLabel: '# Employees',
            name:'employees',
            bind:'{rec.employees}' //Step 3
        },{
            xtype:'checkbox',
            fieldLabel: 'Send news ?',
            boxLabel:'check if yes/uncheck if no...!',
            name:'sendnews',
            inputValue:1,
            bind:'{rec.sendnews}' //Step 3
    }],
    dockedItems: [{
        xtype: 'toolbar', dock: 'bottom',
        items: [{
                xtype: 'tbfill'
            },{
                xtype: 'button',
                iconCls: 'save-16',
                text: 'Save...', action:'savecustomer'
            },{
                xtype: 'button',
                iconCls: 'cancelicon-16',
                text: 'Close / Cancel',
                action:'closeform',
                bind:{ hidden:'{ownerNotNull}'}
        }]
    }],
    initComponent: function(){
        // place your code....
        this.callParent();
    },
    listeners:{ //Step 4
    'titlechange':{
        fn:function( panelx, newtitle, oldtitle, eOpts){
            if (panelx.rendered){
                panelx.ownerCt.setTitle(newtitle);
            }
        }
    },
    'afterrender':{
        fn:function( panelx, eOpts ){
            panelx.ownerCt.setTitle(panelx.title);
        },
        single:true
    }
    }
});