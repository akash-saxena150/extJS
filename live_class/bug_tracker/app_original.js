/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
// Ext.application({
//     extend: 'bug_tracker.Application',

//     name: 'bug_tracker',

//     requires: [
//         // This will automatically load all classes in the bug_tracker namespace
//         // so that application classes do not need to require each other.
//         'bug_tracker.*'
//     ],

//     // The name of the initial view to create.
//     mainView: 'bug_tracker.view.main.Main'
// });
// Ext.application({
//     extend: 'bug_tracker.Application',

//     name: 'bug_tracker',

//     requires: [
//         // This will automatically load all classes in the bug_tracker namespace
//         // so that application classes do not need to require each other.
//         'bug_tracker.*'
//     ],

//     // The name of the initial view to create.
//     mainView: 'bug_tracker.view.main.Main'
//     //***let's write our first ExtJS code ***///
//     // launch : function() {
//     //     Ext.Msg.confirm("Confirm","Do you like Ext?",
//     // function(btn){
//     //     if(btn==='yes')
//     //         {
//     //             Ext.Msg.alert("Wallah habibi!","Your booking is comfirmed")
//     //         }
//     //     else
//     //         {
//     //             Ext.Msg.alert("Ouch!","Are you sure, cuz it hurt?")
//     //         }
//     // })
//         // Ext.Msg.alert("Hello"," my first Ext JS app");
//     // }
// });
//***let's write our first ExtJS code ***///
// Ext.onReady(function(){
//  alert("This is my first Extjs app !");
// });


//****Let's write our first Ext classs****//
Ext.define('Myapp.sample.Employee',{
    name: 'Unknown',
    lastName: 'Unknown',
    age: 0,
    constructor: function (config){
        Ext.apply( this, config || {} );
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
var patricia = Ext.create('Myapp.sample.Employee',{
    name:'Patricia',
    lastName:'Diaz',
    age:21
});
patricia.checkAge();
patricia.work('Attending phone calls');

//*** Inheritance ****/
Ext.define('Myapp.sample.Supervisor',{
    extend: 'Myapp.sample.Employee',
    constructor: function ( config ){
        Ext.apply(this, config || {});
        console.log('class B created – fullname:' + this.name +
        ' ' + this.lastName);
    },
    supervise: function( employee ){
        var employeefullname = employee.name + ' ' + employee.lastName;
        console.log( this.name + ' is supervising the work of '
        + employeefullname );
    }
});
var akash = Ext.create('Myapp.sample.Supervisor', {name: 'Akash', lastName: 'Saxena', age: 34});
akash.supervise(patricia);