const socketIOClient = require("socket.io-client");

var encryption = require('./encryptionService');

module.exports = {
     /*******************************Websocket client METHOD********************************************/

     SocketClient:function(){
        const socket = socketIOClient("http://127.0.0.1:4001");
        socket.on("FromAPI", data => { console.log("Message received from Websocket: "+data)
        
        console.log("Socket message Decrypted: "+encryption.decrypt(data));
    }
       
        );
    },

    /*******************************END********************************** */

};