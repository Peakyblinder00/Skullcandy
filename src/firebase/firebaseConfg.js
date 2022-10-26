import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB_I2nZivFNjfsM8kX4tqh6K8jzj_YC-kE",
  authDomain: "skullcandy-e3771.firebaseapp.com",
  projectId: "skullcandy-e3771",
  storageBucket: "skullcandy-e3771.appspot.com",
  messagingSenderId: "347443777429",
  appId: "1:347443777429:web:9ff72a1e6dfb36bb32f09c"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const firestore = getFirestore()
