import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyBvYZsAn8_NV8U5_ImvaBoiWTHCkrcBXVU",
    authDomain: "crwn-db-e0c41.firebaseapp.com",
    databaseURL: "https://crwn-db-e0c41.firebaseio.com",
    projectId: "crwn-db-e0c41",
    storageBucket: "crwn-db-e0c41.appspot.com",
    messagingSenderId: "796654284907",
    appId: "1:796654284907:web:ec7338514a2b2b6828c12e",
    measurementId: "G-Y9QJKF6J73"
};

export const createUserProfileDocument=async (userAuth,additionalData)=>{
    if(!userAuth) return;

const userRef=firestore.doc(`users/${userAuth.uid}`);
const snapShot=await userRef.get();
if(!snapShot.exists){
    const{displayName,email}=userAuth;
    const createdAt=new Date();
    try{
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })

    }catch (e) {
        console.log("error Creating user"+e.message)

    }
}
return userRef;
}


firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;
