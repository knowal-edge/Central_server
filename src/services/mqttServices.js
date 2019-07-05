var mqtt = require('mqtt');
var url = require('url');
require('dotenv').config()

var options={
    retain:true,
    qos:1};

var client  = mqtt.connect(process.env.MQTTURL);
var edTopic=process.env.EDGETOPIC;


module.exports = {
    
    /*******************************MQTT SUBSCRIPTION METHOD********************************************/

    mqttSubscriber:function(){

        client.on("connect",function(){	
            console.log("connected  "+ client.connected);
        })


        //handle incoming messages
        client.on('message',function(edTopic, message, packet){
	        console.log("MQTT Message Queue from Edge to Server is "+ message);
	        console.log("Edge Topic is "+ edTopic);
        });

        //handle errors
        client.on("error",function(error){
            console.log("Can't connect" + error);
            process.exit(1)
        });

        client.subscribe(edTopic,{qos:1}); //single topic
    }

    /*******************************END********************************** */

};