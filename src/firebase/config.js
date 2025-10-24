import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA9Y3a-s2QltDMpCZ1wEHRKDMQ6hWpXS48",
  authDomain: "thefinancesavingapp.firebaseapp.com",
  projectId: "thefinancesavingapp",
  storageBucket: "thefinancesavingapp.firebasestorage.app",
  messagingSenderId: "1056549719113",
  appId: "1:1056549719113:web:0412ade01aeb7ba3f20398"
};


// Инициализация Firebase
const app = initializeApp(firebaseConfig)

// Инициализация сервисов
export const auth = getAuth(app)
export const db = getFirestore(app)

export default app