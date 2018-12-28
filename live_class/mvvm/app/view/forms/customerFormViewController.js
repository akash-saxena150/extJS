Ext.define('myApp.view.forms.customerFormViewController', {
    extend: 'Ext.app.ViewController' ,
    alias:  'controller.customerform',
	config: {
         control: {
             'customerform button[action=savecustomer]': {
                 click:'saveCustomer'
             },
			 'customerform button[action=closeform]': {
                 click:'formClose'
             }			 
          }
    },
	init: function() {
		//console.log('customers form view controller init'); 
	},
	formClose:function(cmpx, eOpts){
		//console.log('Closing Form'); 
		var closeCmp= this.getViewModel().get('ownerCmp');		
		if  (closeCmp!=null && closeCmp!=undefined){			
			var xtypeUsed = closeCmp.getXType(); 		
			if (xtypeUsed =='panel' || xtypeUsed =='gridpanel' || xtypeUsed =='window' || xtypeUsed =="customerwindow"){ 
				closeCmp.close(); 				
			}
		}
		return;  
	},
	saveCustomer:function(btnx, evt, eOpts){		
		var action = this.getView().getViewModel().get('action'); //: "edit";
		//console.log('Performing action in form : ' + btnx.action); 
		if (action=='add'){ 
			if  (  this.getView().getForm().isValid() ) { 
				var newCustomerData =this.getView().getForm().getValues(); 				 
				var mycustomer = Ext.create('myApp.model.Customer', newCustomerData );				
				this.getView().gridModule.getStore().add(mycustomer); 
				Ext.Msg.alert('Ok', 'New customer added succesfully!');	
				this.formClose();											
			} else  { 
				Ext.Msg.alert('Error!', 'There are some errors in the form , please check the information!');
				return;			
			} 
		} else { //Edit action 
			if  (  this.getView().getForm().isValid() ) { 
				var newCustomerData =this.getView().getForm().getValues(); 		
				var Record = this.getView().gridModule.getStore().getById( newCustomerData.id ); 				
				var editResult = Record.set(newCustomerData); 
				if (editResult!=null){ 
					Record.commit();
					Ext.Msg.alert('Ok', 'Customer edited succesfully!');	
					this.formClose();	
				} else { 
					Ext.Msg.alert('Error!', 'Error updating customer.!');
					return;			
				}
			} else  { 
				Ext.Msg.alert('Error!', 'There are some errors in the form , please check the information!');
				return;			
			}
		} 

	}
});