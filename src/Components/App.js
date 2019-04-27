//App.js in src dir is using the Login Form and Header to set up the main UI for index.js at root for the App
import React, { Component } from "react";
import { View } from "react-native";
// import the firebase third party lib
import firebase from "firebase";
// Custom Components to be used in the app
//import { Header } from "./components/common/Header";

import { Header } from "./Common/";
// Import our LoginForm component to be displayed on the screen
//import LoginForm from "./components/LoginForm";

import LoginForm from "./LoginForm";

class App extends Component {
    //Life Cycle Method to init the firebase
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyA1STosHY1lqSUhSv_-9eAmXFdfb1RdisY",
            authDomain: "classwork-d19be.firebaseapp.com",
            databaseURL: "https://classwork-d19be.firebaseio.com",
            projectId: "classwork-d19be",
            storageBucket: "classwork-d19be.appspot.com",
            messagingSenderId: "738596208209"
        });
    }


render() {
    return (
        <View>
            <Header headerText="Authentication" />
            <LoginForm />
        </View>
    );
}

}

export default App ;