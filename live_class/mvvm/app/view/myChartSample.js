// Ext.define('myApp.view.myChartSample',{
//     extend: 'Ext.draw.Component',
//     alias: 'widget.myChartSample',
//     viewBox: false,
//     itemId:'mypaneldraw',
//     items:[{
//             type: 'circle',
//             radius: 8,
//             x: 250,
//             y: 18,
//             fill: 'blue',
//             zIndex: 2
//         },{
//             type: 'rect',
//             x: 0,
//             y: 69,
//             width: 200,
//             height: 6,
//             fill: 'blue'
//         },{
//             type: 'ellipse',
//             cx: 265,
//             cy: 215,
//             rx: 40,
//             ry: 25,
//             fill: '#66cc33',
//             globalAlpha: 1,
//             stroke : '#993399',
//             'stroke-width':2
//         },{
//             type: "path",
//             path: "M 230 110 L 300 110 L 265 190 z",
//             globalAlpha: 1,
//             fill: '#16becc',
//             lineWidth: 2
//         },{
//             type: 'text',
//             x: 50,
//             y: 50,
//             text: 'Sencha',
//             'font-size':'38px',
//             fillStyle: 'blue'
//         },{
//             type: "image",
//             src: "images/apple-touch-icon.png",
//             globalAlpha: 0.9,
//             x: 205,
//             y: 20,
//             height: 100,
//             width: 100,
//             listeners: {
//             dblclick: function(){
//                 Ext.Msg.alert('Logo',
//                 'event dblclick on Sencha logo');
//             }
//         }
//     }]
// })