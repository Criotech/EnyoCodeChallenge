import * as firebase from 'firebase';
import { USER_CREATED, USER_UPDATED, USER_DELETED } from '../actions/types'
import { update_User } from '../actions';
import { put, take, call, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

const config = {
    apiKey: "AIzaSyDQx1N-8hKmCOBpU9R6VO6z5OKTIE6FotM",
    authDomain: "usermanager-eb1d3.firebaseapp.com",
    databaseURL: "https://usermanager-eb1d3.firebaseio.com",
    projectId: "usermanager-eb1d3",
    storageBucket: "usermanager-eb1d3.appspot.com",
    messagingSenderId: "339079121964",
    appId: "1:339079121964:web:61db5d641f601219c99589",
    measurementId: "G-6WQJN4F70K"
};

const app = firebase.initializeApp(config);
const database = firebase.database();

function addUser(user) {
    const newUserRef = database.ref('users').push();
    return newUserRef.set(user);
}

function deleteUser(userId) {
    firebase.database().ref("users").orderByChild('id').equalTo(userId)
        .once('value').then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                //remove each child
                firebase.database().ref("users").child(childSnapshot.key).remove();
            });
        });
}

function createEventChannel() {
    const listener = eventChannel(
        emit => {
            database.ref('users')
                .on(
                'child_added',
                data => emit(data.val())
                );
            return () => database.ref('users').off(listener);
        }
    );

    return listener;
};

function* updatedUserSaga() {
    const updateChannel = createEventChannel();
    while (true) {
        const user = yield take(updateChannel);
        yield put(update_User(user));
    }
}

function* createUserSaga() {
    while (true) {
        const action = yield take(USER_CREATED);
        // console.log(action.payload)
        try {
            yield call(addUser, action.payload);
        } catch (err) {
            console.log(err)
        }
    }
}

function* deleteSaga() {
    while (true) {
        const action = yield take(USER_DELETED);
        // console.log(action.payload)
        try {
            yield call(deleteUser, action.payload);
        } catch (err) {
            console.log(err)
        }
    }
}

export default function* rootSaga() {
    yield fork(createUserSaga);
    yield fork(updatedUserSaga);
    yield fork(deleteSaga);
}