console.log('KrAzee K0d3rz are for realz');

require('dotenv').config();

const accountSid = process.env.TWILIO_ID;
const authToken = process.env.TWILIO_TOKEN;
console.log(`accountSid is ${accountSid}`)
console.log(`token is ${authToken}`)


const twilio = require('twilio');
const client = new twilio(accountSid, authToken);
const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));


// wrap this in a function
client.messages.create({
    body: 'KrAzee K0d3rz be KrAzee',
    to: '+12066011711',  // Text this number  //Trevor: +12066011711
    from: '+13608420945' // From our Twilio number  //Trevor :+13608420945
})
.then((message) => console.log(`message sent! ${message.sid}`));


// app.listen(process.env.PORT || 3000, () => {
//   console.log(`listening on port ${process.env.PORT}`);
// });

