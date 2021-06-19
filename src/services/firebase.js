import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBWnsTJbehPANKzKG4flGWvtcR36H54rZQ",
    authDomain: "grupou-max.firebaseapp.com",
    projectId: "grupou-max",
    storageBucket: "grupou-max.appspot.com",
    messagingSenderId: "238684459442",
    appId: "1:238684459442:web:7b98f3906e9dcc4edd94ab"
};


if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}