$(document).ready(function() {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDXDv5cMj_dVBjIueJxdJCcERIJwyWKP8Q",
        authDomain: "cseminars-a5fc6.firebaseapp.com",
        databaseURL: "https://cseminars-a5fc6.firebaseio.com",
        projectId: "cseminars-a5fc6",
        storageBucket: "cseminars-a5fc6.appspot.com",
        messagingSenderId: "633452798355"
    };

    firebase.initializeApp(config);

    var database = firebase.database();
    var usersReference = database.ref("users");

    const Email = document.getElementById("email");
    const Password = document.getElementById("password");
    const AdmissionYear = document.getElementById("AdmissionYear");
    const Grade = document.getElementById("Grade");
    const Registerbtn = document.getElementById("registerbtn");

    var gender = "Man";
    var age = 20;
    var avatar = 0;

    //insertfeeling should be modified to address this issue

    function addUser(user) {
        usersReference.push({
            Email: user.email, // For adding @~
            Password: Password,
            AdmissionYear: AdmissionYear,
            Grade: Grade
        });
        console.log(user, "You are signed up!!!");
        window.location="main.html";
    }

    //registration event listener
    Registerbtn.addEventListener("click", e => {
        var email = Email.value;
        if (email.indexOf("@") == -1) {
        email = email + "@CSeminar.com";
    }
        const password = Password.value;

        const auth = firebase.auth();
        console.log(email, password);

        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise
            .then(user => addUser(user))
            .catch(e => console.log(e.message));
    });
/*
    $('input[name="age"]', '#ages').on('change', function() {
        age = $(this).val();
    });


    $('input[name="gender_group"]', '#genders').on('change', function() {
        if($(this).is(':checked')) {
            gender = $(this).val();
        }
    });

    $('input[name="occupation_group"]', '#occupations').on('change', function() {
        if($(this).is(':checked')) {
            occupation = $(this).val();
        }
        console.log("before");
    });

*/

});