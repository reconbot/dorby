/*global require:true module:true */
var five = require('johnny-five');
var board = new five.Board();

var openDoor = function () {};

var goDoor = function () {

  var servo = new five.Servo({
    pin: 10,
    range: [120, 180],
    startAt: 180
  });

  openDoor = function () {
    servo.min();
    setTimeout(this.max.bind(servo), 700);
  };

  board.repl.inject({
    servo: servo
  });

};

board.on("ready", goDoor);

//   var bigLed = new five.Led(6);
module.exports = {
  openDoor: openDoor
};