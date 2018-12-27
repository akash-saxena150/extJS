//*** viewport */
// Ext.onReady(function(){
//  Ext.create('Ext.container.Viewport',{
//  padding:'5px',
//  layout:'auto',
//  style : {
//  'background-color': '#fc9',
//  'color': '#000'
//  },
//  html:'This is application area'
//  });
// });

///*** panel */
// Ext.onReady(function(){
//  var MyPanel = Ext.create("Ext.panel.Panel",{
//  renderTo: Ext.getBody(),
//  title: 'My first panel...',
//  width: 300,
//  height: 220,
//  html:'<b>Here</b> goes some <i>content</i>..!'
//  });
// });

///**** Window */
// Ext.onReady(function(){
//     var win = Ext.create("Ext.window.Window",{
//     title: 'My first window',
//     width: 300,
//     height: 200,
//     maximizable: true,
//     html: 'this is my first window'
//     });
//     win.show();
// })

///*** the border layout */

// Ext.onReady(function(){
//     Ext.create('Ext.panel.Panel', {
//         width: 500, height: 300,
//         title: 'Border Layout',
//         layout: 'border',
//         items: [{
//             xtype: 'panel',
//             title: 'South Region is resizable',
//             region: 'south', // region
//             height: 100,
//             split: true // enable resizing
//         },{
//             xtype: 'panel',
//             title: 'West Region',
//             region:'west', // region
//             width: 200,
//             collapsible: true, //make panel/region collapsible
//             layout: 'fit',
//             split: true // enable resizing
//         },{
//             title: 'Center Region',
//             region: 'center',
//             layout: 'fit',
//             margin: '5 5 0 0',
//             html:'<b>Main content</b> goes here'
//         }],
//         renderTo: Ext.getBody()
//     });
// });

///*** the fit layout */

Ext.onReady(function(){
    var win = Ext.create("Ext.window.Window",{
        title: "My first window",
        width: 300,
        height: 200,
        maximizable: true,
        layout: "fit",
        defaults: {
        xtype: "panel",
        height: 60,
        border: false
    },
    items: [
        {title: "Menu", html: "The main menu"},
        {title: "Content", html: "The main content!"}
    ]
    });
    win.show();
});

///** more layouts here */
/*https://docs.sencha.com/extjs/4.2.1/extjs-build/examples/layout-browser/layout-browser.html*/