import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBuB2u9KlD115qTorpxuaZVgZ8nMSJVKFQ',
  authDomain: 'miniblog-478ad.firebaseapp.com',
  projectId: 'miniblog-478ad',
  storageBucket: 'miniblog-478ad.appspot.com',
  messagingSenderId: '94360333639',
  appId: '1:94360333639:web:252378932ad89a1bec3062',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
