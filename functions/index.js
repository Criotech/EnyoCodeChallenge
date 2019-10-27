const functions = require('firebase-functions');
var admin = require('firebase-admin');
var app = admin.initializeApp();
const uuid = require('uuidv4').default;

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.onNewUser = functions.database.ref('users').onCreate((snap,context)=>{
    const data = snap.val();
    const newData = { ...data, id: uuid(), uid: "somethingNew" };
    console.log(newData)

    return functions.database.ref('users').child('copiedData').set(newData)
})

exports.onNewUser = functions.database.ref('/users/{id}').onCreate((snapshot, context) => {
    const data = snapshot.val() 
    newData = { ...data, id: uuid(), uid: uuid() }
    console.log(newData)
    return snapshot.ref.update(newData)
})
