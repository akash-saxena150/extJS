// Mixins
Ext.define('Myapp.sample.tasks.attendPhone',{
    answerPhone:function(){
        console.log( this.name + ' is answering the phone');
    }
});
Ext.define('Myapp.sample.tasks.attendClient',{
    attendClient:function(clientName){
        console.log( this.name + ' is attending client: ' + clientName);
    } 
});
Ext.define('Myapp.sample.tasks.attendMeeting',{
    attendMeeting:function(person){
    console.log( this.name + ' is attending a meeting with ' +
    person);
    }
});
Ext.define('Myapp.sample.tasks.superviseEmployees',{
    superviseEmployee:function(supervisor, employee){
    console.log( supervisor.name + ' is supervising : ' +
    employee.name + ' ' + employee.lastName);
    }
});

Ext.define('Myapp.sample.Employee',{
    //*** Using config *** */
    config:{
        name: 'Unknown',
        lastName: 'Unknown',
        age: 0
    },
    constructor: function (config){
        this.initConfig( config ); //***Using initConfig */
        console.log('class created – fullname:' + this.name + ' ' +
        this.lastName);
    },
    checkAge:function(){
        console.log( 'Age of ' + this.name + ' ' + this.lastName + ' is:'
        + this.age );
    },
    work: function( task ){
        console.log( this.name + ' is working on: ' + task);
    }
});

Ext.define('Myapp.sample.Secretary',{
 extend:'Myapp.sample.Employee',
 mixins:{
 answerPhone: 'Myapp.sample.tasks.attendPhone'
 },
 constructor: function (config){
 Ext.apply(this, config || {});
 console.log('Secretary class created – fullname:' + this.name
 + ' ' + this.lastName);
 }
});

Ext.define('Myapp.sample.Accountant',{
    extend:'Myapp.sample.Employee',
    mixins:{
    attendClient: 'Myapp.sample.tasks.attendClient',
    attendMeeting: 'Myapp.sample.tasks.attendMeeting'
    },
    constructor: function (config){
    Ext.apply(this, config || {});
    console.log('Accountant class created – fullname:' + this.name
    + ' ' + this.lastName);
    }
});

Ext.define('Myapp.sample.Manager',{
    extend:'Myapp.sample.Employee',
    mixins:{
        attendClient: 'Myapp.sample.tasks.attendClient',
        attendMeeting: 'Myapp.sample.tasks.attendMeeting',
        supervisePersons:'Myapp.sample.tasks.superviseEmployees'
    },
    constructor: function (config){
        Ext.apply(this, config || {});//this.name= config.name;
        console.log('Manager class created – fullname:' + this.name +
        ' ' + this.lastName);
    },
    supervise: function(employee){
        console.log( this.name + ' starts supervision ');
        this.mixins.supervisePersons.superviseEmployee(this,
        employee);
        console.log( this.name + ' finished supervision ');
    }
});

var patricia = Ext.create('Myapp.sample.Secretary', {
 name:'Patricia', lastName:'Diaz', age:21 } );
 console.log("Patricia: "+patricia.name)
console.log( "employee Name = " + patricia.getName() );
console.log( "employee Last name = " +
 patricia.getLastName() );
console.log( "employee Age = " + patricia.getAge() );
patricia.work( 'Attending phone calls' );
patricia.setName( 'Karla Patricia' );
patricia.setLastName( 'Diaz de Leon' );
patricia.setAge ( 25 );
console.log("employee New Name=" + patricia.getName() );
console.log("employee New Last name=" +
 patricia.getLastName() );
console.log( "employee New Age = " + patricia.getAge() );

var peter = Ext.create('Myapp.sample.Accountant', {name:'Peter',
 lastName:'Jones', age:44 } );
peter.work('Checking financial books');
peter.attendClient('ACME Corp.');
peter.attendMeeting('Patricia');

var robert = Ext.create('Myapp.sample.Manager', {name:'Robert',
 lastName:'Smith', age:34 } );
robert.work('Administration of the office');
robert.attendClient('Iron Tubes of America');
robert.attendMeeting('Patricia & Peter');
robert.supervise(patricia);
robert.supervise(peter);