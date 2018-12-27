Ext.define("MyApp.sample.MyContainer",{
 extend: "Ext.container.Container", //Step 1
 border: true,
 padding: 10,
 initComponent: function(){
    var me = this;
    Ext.each(me.items,function(item){ //Step 2
        item.style = {
            backgroundColor:"#f4f4f4",
            border:"1px solid #333"
        };
        item.padding = 10;
        item.height = 100;
    });
    me.callParent();
 },
 onRender: function(){
    var me = this;
    me.callParent(arguments);
    if( me.border ){ //Step 3
        me.el.setStyle( "border" , "1px solid #333" );
    }
 }
});
Ext.onReady(function(){
    Ext.create("MyApp.sample.MyContainer",{
        renderTo: Ext.getBody(),
        //Using defaults
        // defaults: {
        //     xtype : "component",
        //     width : 100
        // },
        // items :[{
        //     html:"Child Component one" //xtype:"component",
        //     },{
        //     html:"Child Component two" //xtype:"component",
        // }],
        items: [{
            xtype: "component",
            html: "Child Component one"
        },{
            xtype: "component",
            html: "Child Component two"
        }]
    });
});