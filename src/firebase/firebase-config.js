import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBcxPe37OfrEXQqnkPBE6BSY59lcNuFfoU",
	authDomain: "sagpt-175e9.firebaseapp.com",
	databaseURL: "https://sagpt-175e9.firebaseio.com",
	projectId: "sagpt-175e9",
	storageBucket: "sagpt-175e9.appspot.com",
	messagingSenderId: "775510801672",
	appId: "1:775510801672:web:88e68d6ce5b79c671080bd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db, firebase };

