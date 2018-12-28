Ext.define('myApp.model.modulesModel', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.field.String',
        'Ext.data.field.Boolean',
        'Ext.data.field.Integer'
    ],
    fields: [
        {type: 'string', name: 'description'},
        {type: 'boolean', name: 'allowaccess'},
        {type: 'int', name: 'level'},
        {type: 'string', name: 'moduleType', defaultValue: ''},
        {type: 'string', name: 'moduleAlias', defaultValue: ''},
        {type: 'string', name: 'options'}
    ]
});