const functions = require('firebase-functions');
var admin = require('firebase-admin');
var app = admin.initializeApp();
const uuidv5 = require('uuid/v5')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.onNewUser = functions.database.ref('users').onCreate((event)=>{
    const data = event.data.val();
    const newData = { ...data, id: uuidv5()};

    return event.data.ref('users').set(newData)
})

