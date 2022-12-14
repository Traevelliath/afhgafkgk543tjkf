import { initializeApp } from 'firebase/app';
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from 'firebase/auth';
import { collection, doc, getDoc, getDocs, getFirestore, query, setDoc, writeBatch } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: 'AIzaSyC5u-g7APIsL-z3ZLZuSJcpJ40GykimFks',
    authDomain: 'crwn-db-bf35f.firebaseapp.com',
    projectId: 'crwn-db-bf35f',
    storageBucket: 'crwn-db-bf35f.appspot.com',
    messagingSenderId: '735360837524',
    appId: '1:735360837524:web:45a38bd0e8f696b8465181'
};

initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });
    await batch.commit();
};

export const getCollectionAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
};

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    if ( !userAuth ) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if ( userSnapshot.exists() ) return userSnapshot;
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInfo
        });
    } catch (error) {
        console.log('failed to create user', error.message);
    }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if ( email && password )
        return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) =>
    await signInWithEmailAndPassword(auth, email, password);

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
            const unsubscribe = onAuthStateChanged(
                auth,
                userAuth => {
                    unsubscribe();
                    resolve(userAuth);
                },
                reject
            );
        }
    );
};