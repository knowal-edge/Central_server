var express = require('express');
var router = express.Router();
var mqttService = require('../src/services/mqttServices');
var websocket = require('../src/services/websocketService');


websocket.SocketClient();
mqttService.mqttSubscriber();
/* GET home page. */
router.get('/websocket/client', function(req, res, next) {
 
  websocket.socketServerRule();
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //mqttService.mqttPublisher("100");


});

module.exports = router;
