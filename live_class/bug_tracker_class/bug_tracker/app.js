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