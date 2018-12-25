Ext.define('BugTracker.store.Test', {
	extend: 'Ext.data.JsonStore',
	storeId: 'test',
	autoLoad: true,
    fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5'],
    data: [
        {'name':'metric one', 'data1':10, 'data2':12, 'data3':14, 'data4':8, 'data5':13},
        {'name':'metric two', 'data1':7, 'data2':8, 'data3':16, 'data4':10, 'data5':3},
        {'name':'metric three', 'data1':5, 'data2':2, 'data3':14, 'data4':12, 'data5':7},
        {'name':'metric four', 'data1':2, 'data2':14, 'data3':6, 'data4':1, 'data5':23},
        {'name':'metric five', 'data1':27, 'data2':38, 'data3':36, 'data4':13, 'data5':33}                                                
    ]
});