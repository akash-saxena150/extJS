///***get request */
// Ext.Ajax.request({
//     url:"https://api.getsetgo.fitness/base_ind/API/v1/searchtrainers/0",
//     success: function(response,options){
//         var data = Ext.decode(response.responseText);
//         console.log("data",data);
//         Ext.Msg.alert("Message", data.total_records);
//     },
//     failure: function(response,options){
//         Ext.Msg.alert("Message", 'server-side failure with status code' + response.status);
//     },
//     callback: function( options, success, response ){
//         console.log('Callback executed, we can do some stuff !');
//     }
// });

///*** post request */
Ext.Ajax.request({
 url: "https://api.getsetgo.fitness/base_ind/API/v1/sign-in",
 method: 'POST',
 params: {
    user_email: "akash.saxena150@gmail.com",
    user_password: "Qwer123!@#",
    user_type: "client"
 },
timeout: 50000,//wait for x miliseconds before dropping the query. By default it is 30 secs
 success: function(response,options){
 var data = Ext.decode(response.responseText);
 Ext.Msg.alert("Message", data.msg);
 },
 failure: function(response,options){
 Ext.Msg.alert("Message", 'server-side failure with status code'
 + response.status);
 Ext.Msg.alert("Message", 'server-side failure:' +
 response.status);
 }
});

//**further details here: */
//https://docs.sencha.com/extjs/6.0.2/modern/Ext.Ajax.html