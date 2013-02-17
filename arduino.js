/*global require:true module:true */
var five = require('johnny-five');
var board = new five.Board();

var openDoor, buildStatus;

var goDoor = function () {
  var servo = new five.Servo({
    pin: 10,
    range: [120, 180],
    startAt: 180
  });

  openDoor = function () {
    servo.min();
    setTimeout(servo.max.bind(servo), 700);
  };

  board.repl.inject({
    servo: servo
  });

};

var goStatus = function () {
  var green = new five.Led(5);
  var red = new five.Led(5);
  var onVal = 100;

  buildStatus = function (good) {
    if (good) {
      green.brightness(onVal);
      red.off();
    } else {
      green.off();
      red.brightness(onVal);
    }
  };

};

board.on("ready", goDoor);
board.on("ready", goStatus);


module.exports = {
  openDoor: function () {
    openDoor && openDoor();
  },
  buildStatus: function (value) {
    buildStatus && buildStatus(value);
  }
};