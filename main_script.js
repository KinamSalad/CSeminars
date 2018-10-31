$(document).ready(function(){
    var config = {
        apiKey: "AIzaSyAgPf_ItR-nJBT2fxbOgOkEQfpjBIbyYEE",
        authDomain: "cseminars-68d33.firebaseapp.com",
        databaseURL: "https://cseminars-68d33.firebaseio.com",
        projectId: "cseminars-68d33",
        storageBucket: "",
        messagingSenderId: "414702609"
    };
    firebase.initializeApp(config);
    var query = firebase.database().ref('users').limitToLast(50);
    console.log(query);

});