Ext.define('Myapp.model.Client',{
    extend:'Ext.data.Model', // step 1
    idProperty:'clientId ', // step 2
    fields:[// step 3
        {name: 'clientId', type: 'int'},
        {name: 'name' , type: 'string'},
        {name: 'phone' , type: 'string'},
        {name: 'website' , type: 'string'},
        {name: 'status' , type: 'string'},
        {name: 'clientSince', type: 'date', dateFormat:'Y-m-d H:i'}
    ],
    validators:{
        name:[
            { type:'presence'}
            ],
            website:[
            { type:'presence', allowEmpty:true},
            { type:'length', min: 5, max:250 }
        ]
    }
});

var myclient = Ext.create('Myapp.model.Client',{
    clientId:10001,
    name:'Acme corp',
    phone:'+52-01-55-4444-3210',
    website:'as',
    status:'Active',
    clientSince:'2010-01-01 14:35'
});
if (myclient.isValid()){ //Step 2
 console.log("myclient model is correct");
}
else{
    var errors = myclient.validate();
    errors.each(function(error){
        console.log(error.field,error.message);
    });
}
///***Notice myClient.data */
console.log(myclient.data);
// GET METHODS
var nameClient = myclient.get('name');
var websiteClient = myclient.get('website');
console.log("My client's info= " + nameClient + " - " +
 websiteClient);
// SET Methods
myclient.set('phone','+52-01-55-0001-8888'); // single value
console.log("My client's new phone is = " +
 myclient.get('phone'));
myclient.set({ //Multiple values
 name: 'Acme Corp of AMERICA LTD.',
 website:'www.acmecorp.net'
});
console.log("My client's name changed to = " +
 myclient.get("name"));
console.log("My client's website changed to = " +
 myclient.get("website") );


 //*** Mapping example */

 //Let's say the data is this:

//  {
//  "success" :"true",
//  "id":"id",
//  "records":[
//  {
//  "id": 10001,
//  "name": "Acme corp2",
//  "phone": "+52-01-55-4444-3210",
//  "x0001":"acme_file.pdf"
//  }
//  ]
// }

//*** it can be used like this */
// Ext.define('Myapp.model.Client',{
//     extend: 'Ext.data.Model',
//     idProperty: 'clientId ',
//     fields:[
//         {name: 'clientId', type: 'int' },
//         {name: 'name' , type: 'string'},
//         {name: 'phone' , type: 'string'},
//         {name: 'contractFileName', type: 'string', mapping:'x0001'}
//     ]
// });
