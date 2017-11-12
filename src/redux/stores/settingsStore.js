import firebase from 'firebase';
import MobxFirebaseStore from 'mobx-firebase-store'

const config = {
  apiKey: "AIzaSyAcf6ebRf22QVZYiMeCc7YalVi8XQ2Fe8I",
  authDomain: "curby-the-app.firebaseapp.com",
  databaseURL: "https://curby-the-app.firebaseio.com",
  projectId: "curby-the-app",
  storageBucket: "curby-the-app.appspot.com",
  messagingSenderId: "991590430037"
};

  export default class SettingsStore extends MobxFirebaseStore {
    constructor () {
      firebase.initializeApp(config);
      super(firebase.database().ref())
      this.splashTime = 5000
      this.splashImg = require('../../img/splash.jpg')
    }

    get SplashTime(){
      return this.splashTime
    }

    get SplashImg(){
      return this.splashImg
    }

}