import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  // Your Firebase config object here
  // Get this from Firebase Console after creating a project
  apiKey: "AIzaSyAfBUdjCy2oF5AbY3ApnVvLi4HcGxViv2A",
  authDomain: "fitness-platimun.firebaseapp.com",
  projectId: "fitness-platimun",
  storageBucket: "fitness-platimun.appspot.com",
  messagingSenderId: "528478370062",
  appId: "1:528478370062:web:112fad5e52828a4b4ebf5f",
  measurementId: "G-K45QD05SVR"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app); 