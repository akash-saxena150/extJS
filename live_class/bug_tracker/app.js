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
///*** defining a store */
Ext.define('MyApp.store.Customers',{
    extend : 'Ext.data.Store', //Step 1
    model : 'Myapp.model.Customer' //Step 2
});
var store = Ext.create("MyApp.store.Customers");
//counting the elements in the store
console.log(store.count());

///*** Adding model to a store */
var mynewcustomer = Ext.create('Myapp.model.Customer',{
        id: 10001,
        name: 'Acme corp',
        phone: '+52-01-55-4444-3210',
        website : 'www.acmecorp.com',
        status: 'Active',
        clientSince: '2010-01-01 14:35',
        contractInfo:{
        id:444,
        contractId:'ct-001-444',
        documentType:'PDF'
    }
});
store.add(mynewcustomer); //Step 2
console.log("Records in store:" + store.getCount());

///*** Adding directly to store */
store.add({
        id: 10002,
        name: 'Candy Store LTD',
        phone: '+52-01-66-3333-3895',
        website : 'www.candyworld.com',
        status: 'Active',
        clientSince: '2011-01-01 14:35',
        contractInfo:{
        id:9998,
        contractId:'ct-001-9998',
        documentType:'DOCX'
    }
 });
 console.log("Records in store:" + store.getCount());
//*** Adding multiple records */
//  var mynewcustomer = Ext.create('Myapp.model.Customer', { ...});
//  var mynewcustomerb = Ext.create('Myapp.model.Customer', {
//  ...});
//  store.add([mynewcustomer, mynewcustomerb]);
//  console.log("Records in store:" + store.getCount());

///*** Looping through records */
store.each(function(record, index){
 console.log(index, record.get("name"));
});

///***Retreiving records in store */

///*** By index position*/
var modelTest = store.getAt(1);
console.log(modelTest.get("name"));

///First and last records
var first = store.first();
var last = store.last();
console.log(first.get("name"), last.get("name"));

///By range
var list = store.getRange(1,3);
Ext.each(list,function(record,index){
 console.log(index,record.get("name"));
});

///By id
var record = store.getById(10001);
console.log(modelTest.get("name"));

///Removing records
store.remove(record);
store.each(function(record,index){
 console.log(index,record.get("name"));
});

store.remove([first,last]);
store.each(function(record,index){
 console.log(record.get("name"));
});

store.removeAt(2);
store.each(function(record,index){
 console.log(index,record.get("name"));
});

store.removeAll();
console.log("Records:",store.count());

///*** Using remote data */
Ext.define('Myapp.store.customers.Customers',{
    extend:'Ext.data.Store',
    model: 'Myapp.model.Customer',
    proxy:{
        type:'ajax',
        url: 'serverside/customers.php',
        reader: {
        type:'json',
        rootProperty:'records'
    }
 }
});