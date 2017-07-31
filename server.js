console.log('KrAzee K0d3rz are for realz');

/*

1.  decide on what library we’re going to use for reading the signal from the GPIO.
2. test the library and get it to console.log something when the PIR signal is read.
3. replace that console.log with the twilio function so that the twilio function fires with the signal event
4.  buy champagne and celebrate our victory

*/

require('dotenv').config();

const TWILIO_ID = process.env.TWILIO_ID;
const TWILIO_TOKEN = process.env.TWILIO_TOKEN;
const TWILIO_PHONE = process.env.TWILIO_PHONE;
const USER_PHONE = process.env.USER_PHONE;
console.log(`accountSid is ${accountSid}`)
console.log(`token is ${authToken}`)


const twilio = require('twilio');
const express = require('express');
const logger = require('morgan');
const gpio = require('pigpio').Gpio;

const app = express();
const echo = new Gpio(7, {mode: Gpio.INPUT, alert: true}),
const client = new twilio(accountSid, authToken);
app.use(logger('dev'));

console.log(echo);



function checkRead() {
 echo.digitalRead() ? console.log('ALERT!!!!') : console.log('nothing')
}

setInterval(checkRead, 20)
// wrap this in a function
/*
client.messages.create({
    body: 'KrAzee K0d3rz be KrAzee',
    to: USER_PHONE,  // Text this number
    from: TWILIO_PHONE // From our Twilio number
})
.then((message) => console.log(message.sid));

*/

/*app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
*/
