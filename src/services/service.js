import { db, firebaseApp } from './config';

export const registerUser = (userInfo) => {
    // db.ref('/users').push(userInfo,err=>{
    //     console.log(err);
    // });
    return firebaseApp.createUserWithEmailAndPassword(userInfo.email, userInfo.password);
};
export const loginUser = (userInfo)=>{
    return firebaseApp.signInWithEmailAndPassword(userInfo.email,userInfo.password);
}