import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA7RD3pee7IqrevuXnjQpfA8Z7Oe12CYmY',
  authDomain: 'save-the-date-moni.firebaseapp.com',
  projectId: 'save-the-date-moni',
  storageBucket: 'save-the-date-moni.firebasestorage.app',
  messagingSenderId: '942019160942',
  appId: '1:942019160942:web:2a94ba5c8b7fc816df2f7f',
  measurementId: 'G-BPSVMRQKDT',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
