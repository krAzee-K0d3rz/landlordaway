console.log('KrAzee K0d3rz are for realz')

require('dotenv').config()

const accountSid = process.env.TWILIO_ID;
const authToken = process.env.TWILIO_TOKEN;
console.log(`accountSid is ${accountSid}`)
console.log(`token is ${authToken}`)


const twilio = require('twilio');
const client = new twilio(accountSid, authToken);


// wrap this in a function
client.messages.create({
    body: 'KrAzee K0d3rz be KrAzee',
    to: '+12066011711',  // Text this number
    from: '+13608420945' // From our Twilio number
})
.then((message) => console.log(message.sid));


// setup server
// figure out how to detect sensor event

// when sensor event fires, fire twilio function