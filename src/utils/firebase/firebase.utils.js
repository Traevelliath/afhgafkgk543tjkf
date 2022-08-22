import { initializeApp } from 'firebase/app';
import { getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    createUserWithEmailAndPassword,
    GoogleAuthProvider } from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC5u-g7APIsL-z3ZLZuSJcpJ40GykimFks",
    authDomain: "crwn-db-bf35f.firebaseapp.com",
    projectId: "crwn-db-bf35f",
    storageBucket: "crwn-db-bf35f.appspot.com",
    messagingSenderId: "735360837524",
    appId: "1:735360837524:web:45a38bd0e8f696b8465181"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (userSnapshot.exists()) return userDocRef;
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
        await setDoc(userDocRef,{
            displayName,
            email,
            createdAt,
            ...additionalInfo
        })
    } catch (error) {
        console.log('failed to create user', error.message)
    }
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (email && password)
        return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInWithEmail = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
}