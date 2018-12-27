Ext.define('Myapp.model.Contract',{
    extend:'Ext.data.Model',
    idProperty:'id ',
    fields:[
        {name: 'id', type: 'int' },
        {name: 'contractId', type: 'string'},
        {name: 'documentType', type: 'string'}
    ]
});
Ext.define('Myapp.model.Customer',{
    extend:'Ext.data.Model',
    requires: ['Myapp.model.Contract'],
    idProperty:'id ',
    fields:[
    {name: 'id', type: 'int'},
    {name: 'name' , type: 'string'},
    {name: 'phone' , type: 'string'},
    {name: 'website' , type: 'string'},
    {name: 'status' , type: 'string'},
    {name: 'clientSince' , type: 'date', dateFormat: 'Y-m-d H:i'},
    {name: 'contractInfo' , reference: 'Contract', unique:true}
    ]
});
Ext.define('MyApp.store.Customers',{
    extend : 'Ext.data.Store', //Step 1
    model : 'Myapp.model.Customer' //Step 2
});
var store = Ext.create("MyApp.store.Customers");
//counting the elements in the store
console.log(store.count());