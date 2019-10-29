const functions = require('firebase-functions');
var admin = require('firebase-admin');
// const cors = require("cors")({origin: true})
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: true }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'DELETE, GET, POST, DELETE');
        return res.status(200).json({})
    }
    next();
});



const uuid = require('uuidv4').default;
const uuidv5 = require('uuid/v5');

admin.initializeApp();

const database = admin.database().ref("/users");

const getUsersFromDatabase = (res) => {
    let users = [];
    return database.on('value', (snapshot) => {
        snapshot.forEach((user) => {
            users.push({
                id: user.val().id,
                firtName: user.val().firstName,
                lastName: user.val().lastName,
                age: user.val().age,
                birthday: user.val().birthday,
                hobby: user.val().hobby
            });
        });
        res.status(200).json(users)
    }, (error) => {
        res.status(error.code).json({
            message: `Something went wrong. ${error.message}`
        })
    })
}


exports.onNewUser = functions.database.ref('/users/{id}').onCreate((snapshot, context) => {
    const data = snapshot.val()
    const MY_NAMESPACE = uuid();

    newData = { ...data, id: uuidv5('Hello, World!', MY_NAMESPACE), }
    console.log(newData)
    return snapshot.ref.update(newData)
})

app.post('/addUsers', (req, res) => {
    if (req.method !== 'POST') {
        return res.status(401).json({
            message: 'Not allowed'
        })
    }
    console.log(req.body)
    let data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        birthday: req.body.birthday,
        hobby: req.body.hobby
    }

    database.push(data);
    getUsersFromDatabase(res)
})

app.get('/getUsers', (req, res) => {
    if (req.method !== 'GET') {
        return res.status(401).json({
            message: 'Not allowed'
        })
    }
    getUsersFromDatabase(res)
})

app.delete('/deleteUsers/:id', (req, res) => {
    if (req.method !== 'DELETE') {
        return res.status(401).json({
            message: 'Not allowed'
        })
    }
    const id = req.params.id
    admin.database().ref(`/users/${id}`).remove()
})
exports.app = functions.https.onRequest(app);

// //add users
// exports.addUsers = functions.https.onRequest((req, res) => {
//     return cors(req, res, () => {
//         if (req.method !== 'POST') {
//             return res.status(401).json({
//                 message: 'Not allowed'
//             })
//         }
//         console.log(req.body)
//         let data = {
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             age: req.body.age,
//             birthday: req.body.birthday,
//             hobby: req.body.hobby
//         }

//         database.push(data);
//         getUsersFromDatabase(res)
//     })
// })

// exports.onNewUser = functions.database.ref('/users/{id}').onCreate((snapshot, context) => {
//     const data = snapshot.val()
//     const MY_NAMESPACE = uuid();

//     newData = { ...data, id: uuidv5('Hello, World!', MY_NAMESPACE), }
//     console.log(newData)
//     return snapshot.ref.update(newData)
// })

// //fetch users data
// exports.getUsers = functions.https.onRequest((req, res) => {
//   return cors(req, res, () => {
//         if (req.method !== 'GET') {
//             return res.status(401).json({
//                 message: 'Not allowed'
//             })
//         }
//         getUsersFromDatabase(res)
//     })
// })

// exports.deleteUsers = functions.https.onRequest((req, res) => {
//     return cors(req, res, () => {
//         if (req.method !== 'DELETE') {
//             return res.status(401).json({
//                 message: 'Not allowed'
//             })
//         }
//         const id = req.query.id
//         admin.database().ref(`/users/${id}`).remove()
//         getUsersFromDatabase(res)
//     })
// })
