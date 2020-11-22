import * as firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyCLkjhrqW0DPlLUgJoFn3FvvmMVV4DIRIQ',
    authDomain: 'kpi-case.firebaseapp.com',
    databaseURL: 'https://kpi-case.firebaseio.com',
    projectId: 'kpi-case',
    storageBucket: 'kpi-case.appspot.com',
    messagingSenderId: '521516367755',
    appId: '1:521516367755:web:41aea8bbbd1a60a115b98e',
    measurementId: 'G-ZSFEYE09GB'
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();