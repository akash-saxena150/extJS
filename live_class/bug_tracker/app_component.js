//**** component lifecycle hooks */
Ext.define('Myapp.sample.CustomComponent',{
    extend: 'Ext.Component',
    initComponent: function(){
        var me = this;
        me.width = 200;
        me.height = 100;
        me.html = {
        tag: 'div',
        html: 'X',
        style: { // this can be replaced by a CSS rule
        'float': 'right',
        'padding': '10px',
        'background-color': '#e00',
        'color': '#fff',
        'font-weight': 'bold',
        'cursor': 'pointer'
        }
        };
        me.myOwnProperty = [1,2,3,4];
        me.callParent();
        console.log('Step 1. initComponent');
    },
    beforeRender: function(){
        console.log('Step 2. beforeRender');
        this.callParent(arguments);
    },
    onRender: function(){
        console.log('Step 3. onRender');
        this.callParent(arguments);
        this.el.setStyle('background-color','#ccc');
    },
    afterRender : function(){
        console.log('4. afterRender');
        this.el.down('div').on('click',this.myCallback,this);
        this.callParent(arguments);
    },
    beforeDestroy : function(){
        console.log('5. beforeDestroy');
        this.callParent(arguments);
    },
    onDestroy : function(){
        console.log('6. onDestroy');
        delete this.myOwnProperty;
        this.el.down('div').un('click',this.myCallback);
        this.callParent(arguments);
    },
    myCallback : function(){
        var me = this;
        Ext.Msg.confirm('Confirmation','Are you sure you want to close this panel?',function(btn){
            if(btn === 'yes'){
                me.destroy();
            }
        });
    }
});
Ext.onReady(function(){
 Ext.create('Myapp.sample.CustomComponent',{
 renderTo : Ext.getBody()
 });
});
//*** component basics */
// Ext.onReady (function(){
//  var panel = Ext.create("Ext.panel.Panel",{
//         title: "My First panel",
//         width: 400,
//         height: 250,
//         renderTo: Ext.getBody()
//     });
// });

//*** Ways to initialize component content */

//Using the HTML property
// Ext.create("Ext.Component",{
//  width: 300,
//  height: 150,
//  renderTo: Ext.getBody(),
//  html: "<h1>Hello!</h1><p>This is an <strong>example</strong> of content</p>"
//  });

//Using a template with data
// Ext.create("Ext.Component",{
//  width: 300,
//  height: 150,
//  renderTo: Ext.getBody(),
//  data: {name:"Veronica", lastName:"Sanchez"},
//  tpl: ["<h1>Content</