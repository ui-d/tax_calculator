import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyBN7prIMcPo-LLs-jTU1WNPqe3SNHiS2Nk',
    authDomain: 'taxes-project.firebaseapp.com',
    projectId: 'taxes-project',
    storageBucket: 'taxes-project.appspot.com',
    messagingSenderId: '32184291226',
    appId: '1:32184291226:web:892e4318100300fce83423',
}

firebase.initializeApp(firebaseConfig)

export default firebase
