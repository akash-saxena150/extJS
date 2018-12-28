Ext.define('myApp.view.myViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myViewport',
    requires: [
        'Ext.panel.Panel'
    ],
    layout: 'border',
    items: [{
        xtype: 'panel',
        region: 'north',
        height: 76,
        itemId: 'appHeader',
        bodyPadding: 0,
        cls: 'appheaderbg',
        title: '',
        header: false,
        html: '<div class="appheader appheaderbg"><img src="resources/images/myapp_logo.png"/></div>',
    },{
        xtype: 'panel',
        region: 'north',
        itemId: 'appContent',
        bodyPadding: 0,
        title: '',
        header: false,
        html: 'Content goes here',
    }]
})