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
    var database = firebase.database();
    var usersInfo = database.ref('users');

    const Email = document.getElementById("id");
    const Password = document.getElementById("password");
    const Loginbtn = document.getElementById("loginbtn");


    Loginbtn.addEventListener("click", e=>{
        var email = Email.value
        if (email.indexOf("@") == -1) {
            email = email + "@CSeminar.com";
        }

        const password = Password.value;
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, password);
        promise
            .then(user => window.location="main.html")
            .catch(e => console.log(e.message));
    });

});
