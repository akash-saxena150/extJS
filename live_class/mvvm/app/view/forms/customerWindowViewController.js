// JavaScript Document
Ext.define('myApp.view.forms.customerWindowViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.customerwindow', 
	config: {
		control:{
			'customerwindow':{
			   'minimize':'mywindowMinimize', 
			   'expand':'myExpand'
			}
		}
	},
	mywindowMinimize:function(cmpx, eOpts){
		//console.log('customerWindow minimizing..!');
		cmpx.collapse();
        cmpx.alignTo(Ext.getBody(),'tr-tr');
	},
	myExpand:function(cmpx, eOpts){
		cmpx.center();	
	}
});
