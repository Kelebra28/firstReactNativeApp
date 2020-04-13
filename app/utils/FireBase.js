import firebase from 'firebase/app'


const  firebaseConfig = {
        apiKey: "AIzaSyAHMRsecJINUUw5hO-dEkR9aUvN_slkNY8",
        authDomain: "w2goapp.firebaseapp.com",
        databaseURL: "https://w2goapp.firebaseio.com",
        projectId: "w2goapp",
        storageBucket: "w2goapp.appspot.com",
        messagingSenderId: "60328113353",
        appId: "1:60328113353:web:c6c72496f1793f119f4918"
      };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;