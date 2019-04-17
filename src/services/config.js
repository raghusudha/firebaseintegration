import Firebase from 'firebase';

let config={
    apiKey:'AIzaSyCyL36Iuqo3zPzFRysL6Y7NPJgEVdw70MY',
    authDomain:'fir-demo-18a59.firebaseapp.com',
    databaseURL:'https://fir-demo-18a59.firebaseio.com/',
    storageBucket:'fir-demo-18a59.appspot.com',
    projectId:'fir-demo-18a59',
    messagingSenderId:'218223131940'
};
let app=Firebase.initializeApp(config);
export const db=app.database();
export const firebaseApp=app.auth();