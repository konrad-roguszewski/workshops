import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyAql0LLT0nDLUMiqhWKT7y4TRi837KdDic',
  authDomain: 'isa-project-f57f2.firebaseapp.com',
  projectId: 'isa-project-f57f2',
  storageBucket: 'isa-project-f57f2.appspot.com',
  messagingSenderId: '103237690797',
  appId: '1:103237690797:web:eee57b851c6ead696d2d24'
});

export { firebaseConfig as firebase };
