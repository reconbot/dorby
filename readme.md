# Dorby
##The doorbot

We had a problem at the Levo League with our intercom system. The doorbell rings and it rings a lot. Every single time a human would have to get up and press the door open button. We have an office manager who sits by the door and will eventually answer it. But if they're not around it's the front vs the back of the office both getting bitter that the other side never answers the door. (Usually it's both of us!)

This had to be stopped so during a hack weekend Dorby was born.

![Dorby!](https://raw.github.com/LevoLeague/dorby/master/public/dorby-v0.1-600x600.jpg)

Dorby is powered by a collection of open source hardware and software. Primarily [Raspbery Pi](http://www.raspberrypi.org/), [Arduino Uno](http://arduino.cc/), [Johnny-Five](https://github.com/rwldrn/johnny-five#readme), and [node.js](http://nodejs.org/)

Dorby works like this.
 - The Raspberry pi is on our network and runs a node.js web server
 - The node.js web server in server.js listens for a GET request to /openDoor and runs openDoor() from arduino.js
 - arduino.js uses Johnny-Five to talk to the arduino over the usb serial port (leveraging a protocol called [firmata](http://firmata.org/)) and tells it to move the servo to press the door open button on the intercom
 - Dorby tells our user to keep an eye out for the human who's on their way into the office.

The coolest part is the mounting for the servo. Dorby has two angle brackets, double sided mounting tape, two drywall anchors, two nuts, two bolts and a zip tie.

![Dorby!](https://raw.github.com/LevoLeague/dorby/master/public/anglebrackets.jpg)

The servo, mounting boards, arduino and wires all came in the excellent [SparkFun Inventor's Kit for Arduino](https://www.sparkfun.com/products/11227) but if you have an arduino you can pickup the [micro servo](https://www.adafruit.com/products/169) from adafruit for $6 and call it a day.

I should also note that it's possible to do ALL of this from just an arduino with a [Arduino WiFi Shield](http://arduino.cc/en/Main/ArduinoWiFiShield) but then it wouldn't be ~20 lines of JavaScript and it wouldn't have been made by me in two days.

## Hardware
 - USB Wifi Card that someone said worked on the raspberry pi
 - Powered usb hub because the raspberry pi doesn't have much power to spare and it kept resetting when trying to power the wifi
 - Cool [Raspberry Pie Case](https://tindie.com/shops/search/?q=raspberry+pi)
 - [Arduino Uno](https://www.adafruit.com/products/50) with [Firmata Firmware 2.4](https://github.com/firmata/arduino)
 - [Breadboard](https://www.adafruit.com/products/64) (not really needed)
 - [Micro Servo](https://www.adafruit.com/products/169)
 - Angle brackets, nuts, bolts, and mounting tape (go patronize your local hardware store)
 - Good old fashion gumption and a drill.

## Credits
Rick Waldron for Johnny Five and being a good sport, Julian Gautier and Jeff Hoefs and whoever else worked on Firmata which is awesome, The raspberry pi guys and gals, [Levo League](http://www.levoleague.com/) for hosting the hack weekend and myself Francis Gulotta.
