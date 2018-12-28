Ext.define('myApp.view.modules.customersController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.customersmodule',
    config: {
        control: {
            // Other alternative on how to listen some events
            'customersmodule button[action=showhelp]': {
                click: 'btnactionclick'
            }
        }
    },
    init: function() {
        console.log('customers view controller init');
    },
    myrenderevent:function(cmpx, eOpts){
        console.log('Grid - customers render event');
    },
    myafterrender:function(cmpx, eOpts){
        console.log('Grid - customers afterrender event');
    },
    btnactionclick:function(btnx, evt, eOpts){
        
		//console.log('Button clicked : ' + btnx.action);
		if (btnx.action=='newrecord'){	
					
			var mywindow = Ext.create('myApp.view.forms.customerWindow',{
				action:'add',
				record:null, 
				gridModule:this.view  								
			}); 
			mywindow.show();
			
		} else if (btnx.action=='editrecord'){ 
		
			var hasSelection = this.view.getSelectionModel().hasSelection(); 
			if (!hasSelection){
				Ext.Msg.alert('Error..', 'please select a record for edit..!');	
				return; 
			}
			var selectedRecords = this.view.getSelectionModel().getSelection();
			if  (selectedRecords.length<=0 || selectedRecords.length>1){ 
				Ext.Msg.alert('Error..', 'please select only one record for edit..!');	
				return; 		
			}
			var myrecord = selectedRecords[0]; 
			var mywindow = Ext.create('myApp.view.forms.customerWindow',{
				action: 'edit',
				record: myrecord.data, 
				gridModule:this.view 			
			}); 
			mywindow.show();	
		
		} else if (btnx.action=='deleterecord'){ 
		
			var hasSelection = this.view.getSelectionModel().hasSelection(); 
			if (!hasSelection){
				Ext.Msg.alert('Error..', 'please select a record for delete..!');	
				return; 
			}
			var selectedRecords = this.view.getSelectionModel().getSelection();
			if  (selectedRecords.length<=0 || selectedRecords.length>1){ 
				Ext.Msg.alert('Error..', 'please select only one record for delete..!');	
				return; 		
			}
			var myrecord = selectedRecords[0]; 
			Ext.Msg.show({
				title:'Delete customer...?',
				message: 'Are you sure to delete customer:<br><b>' + myrecord.data.name + ' </b>...?',
				buttons: Ext.Msg.YESNO,
				icon: Ext.Msg.QUESTION,
				fn: function(btn) {
					if (btn === 'yes') {
						var test=11;
						this.view.getStore().remove(myrecord);	
						this.view.getView().refresh();						
						Ext.Msg.alert('Ok', 'Customer has been deleted..!');							
						//Usually we place an ajax request , send data and check response to make the proper actions												
					} else if (btn === 'no') {
						return; 
					} 
				},
				scope:this 
			});
			
		} else if (btnx.action=='showhelp'){ 
					
			Ext.Msg.alert('Help..', 'show customers help');	
				
		}
    }
});