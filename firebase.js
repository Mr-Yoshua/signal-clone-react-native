import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCmKNituLYzm15-86eLqe0X2_Qf3XtxX8Y",
    authDomain: "signal-clone-bf14c.firebaseapp.com",
    projectId: "signal-clone-bf14c",
    storageBucket: "signal-clone-bf14c.appspot.com",
    messagingSenderId: "29680055516",
    appId: "1:29680055516:web:22faf35fffdb81998cf019"
  };

  let app;

  if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
  }else{
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();
  
  export {db,auth};
