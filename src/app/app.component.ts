import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loginApp';

  ngOnInit(){
 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyDtjz6rOKNaM8-m_Wx88PDXxwC30DMsQNc",
  authDomain: "nodeangular-7546f.firebaseapp.com",
  databaseURL: "https://nodeangular-7546f.firebaseio.com",
  projectId: "nodeangular-7546f",
  storageBucket: "nodeangular-7546f.appspot.com",
  messagingSenderId: "715732213942"

  };
  firebase.initializeApp(config);

  } //oninit
}
