
Ext.define('myApp.view.forms.customerWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.customerwindow',
	xtype: 'customerwindow',
    requires: [
       'myApp.view.forms.customerWindowViewController',
	   'myApp.view.forms.customerForm'   
    ],
	controller: 'customerwindow', 
    height: 368, 
	width:  489, 
	iconCls: 'customer-16',
	layout:'fit', 
	closable:true, 
	minimizable:true,
	title: '',
	tools:[{
		type:'restore',
		tooltip: 'Restore window...',	
		handler: function(event, toolEl, panelHeader) {
			var cmpx=panelHeader.up('window');
			if (cmpx.collapsed){
				cmpx.expand();
			} 
		}
	}],
	initComponent: function() { //step 4 
		var me=this;
		var myForm = Ext.create('myApp.view.forms.customerForm',{
			gridModule: me.gridModule,
			viewModel:{
				data:{
					action:me.action,
					ownerCmp: me, 		
					rec:  me.record || null,
					test:'test string for development'
				}			
			}
		});
		me.items=[myForm]; 
		me.callParent(arguments);	
	}
});