//One to many associations
// Ext.define('Myapp.model.ClientWithContacts',{
//  extend:'Ext.data.Model', // step 1
//  requires: ['Myapp.model.Employee'],
//  idProperty:'id ',
//  fields:[{name: 'id', type: 'int' },
//  {name: 'clientid' , type: 'int'},
//  {name: 'name' , type: 'string'},
//  {name: 'phone' , type: 'string'},
//  {name: 'email' , type: 'string'},
//  {name: 'gender' , type: 'string'}],
//  hasMany:{
//  model:'Myapp.model.Employee',
//  name:'employees',
//  associationKey: 'employees'
//  }
// });
// Ext.define('Myapp.model.Employee',{
//  extend:'Ext.data.Model',
//  idProperty:'id ',
//  fields:[
//  {name: 'id', type: 'int' },
//  {name: 'clientid' , type: 'int'},
//  {name: 'name' , type: 'string'},
//  {name: 'phone' , type: 'string'},
//  {name: 'email' , type: 'string'},
//  {name: 'gender' , type: 'string'}
//  ]
// });
// var myclient = Ext.create('Myapp.model.ClientWithContacts',{
//  id: 10001,
//  name: 'Acme corp',
//  phone: '+52-01-55-4444-3210',
//  website: 'www.acmecorp.com',
//  status: 'Active',
//  clientSince: '2010-01-01 14:35'
// });
// //Step 2
// myclient.employees().add(
// {
//  id:101, clientId:10001, name:'Juan Perez', phone:'+52-05-2222-333',
//  email:'juan@test.com', gender:'male'},
// {
//  id:102, clientId:10001, name:'Sonia Sanchez', phone:
// '+52-05-1111-444', email:'sonia@test.com',gender:'female'}
// );
// //Step 3
// myclient.employees().each(function(record){
//  console.log(record.get('name') + ' - ' + record.get('email') );
// });

////*** One to one associations */
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
var myclient = Ext.create('Myapp.model.Customer',{
    id: 10001,
    name: 'Acme corp',
    phone: '+52-01-55-4444-3210',
    website: 'www.acmecorp.com',
    status: 'Active',
    clientSince: '2010-01-01 14:35',
    contractInfo:{
        id:444,
        contractId:'ct-001-444',
        documentType:'PDF'
    }
});

console.log(myclient);