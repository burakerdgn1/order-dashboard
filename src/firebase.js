import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA56kHQgOqAgGWcgi0d2d2Jkb6suwzHOAE",
    authDomain: "dashboard-92430.firebaseapp.com",
    projectId: "dashboard-92430",
    storageBucket: "dashboard-92430.appspot.com",
    messagingSenderId: "432405843939",
    appId: "1:432405843939:web:022adbe968d5d8acca9ad6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
