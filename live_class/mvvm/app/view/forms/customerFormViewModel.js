Ext.define('myApp.view.forms.customerFormViewModel', { //step 1
    extend:'Ext.app.ViewModel',
    alias:'viewmodel.customerform',
    data:{ //step 2
        action: 'add',
        ownerCmp: null,
        rec: null
    },
    formulas:{ //Step 3
        readOnlyId:function(get){
            return (get('action')!=='add');
        },
        ownerNotNull:function(get){
            var cmpx = get('ownerCmp');
            return (cmpx!==null && cmpx!==undefined);
        },
        refName:function(get){
            var value='';
            if (get('action')!=='add'){ //Edit action
                var id = get('rec.id'), custname =get('rec.name');
                if (custname===''){ custname ='(not defined)'; }
                value = 'Editing : ' + id + ' - ' + custname + "..." ;
            } else {
                value = 'New customer...';
            }
            //Step 4
            var xtypeOwner= this.getView().ownerCt.getXType();
            if (xtypeOwner=="customerwindow"){
                this.getView().ownerCt.setTitle(value);
            }
            return value;
        }
    }
});