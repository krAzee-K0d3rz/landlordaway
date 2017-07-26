console.log('KrAzee K0d3rz are for realz');

require('dotenv').config();

const TWILIO_ID = process.env.TWILIO_ID;
const TWILIO_TOKEN = process.env.TWILIO_TOKEN;
const TWILIO_PHONE = process.env.TWILIO_PHONE;
const USER_PHONE = process.env.USER_PHONE;
console.log(`accountSid is ${accountSid}`)
console.log(`token is ${authToken}`)


const twilio = require('twilio');
const client = new twilio(accountSid, authToken);
const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));

client.messages.create({
    body: 'KrAzee K0d3rz be KrAzee',
    to: USER_PHONE,  // Text this number
    from: TWILIO_PHONE // From our Twilio number
})
.then((message) => console.log(message.sid));

/*app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
*/
