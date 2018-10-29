$(document).ready(function() {

    // Initialize Firebase
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

    const Email = document.getElementById("email");
    const Password = document.getElementById("password");
    const AdmissionYear = document.getElementById("year");
    const Registerbtn = document.getElementById("registerbtn");
    var Grade = "Undergraduate(Junior)"
    //insertfeeling should be modified to address this issue

    function addUser(user, email, password, admissionyear) {
        usersInfo.push({
            Email: email, // For adding @~
            Password: password,
            AdmissionYear: admissionyear,
            Grade: Grade
        });
        console.log(user, "You are signed up!!!");
        //window.location="main.html";
    }

    //registration event listener
    Registerbtn.addEventListener("click", e=>{
        var email = Email.value
        if (email.indexOf("@") == -1) {
            email = email + "@CSeminar.com";
        }
        const password = Password.value;
        const admissionyear = AdmissionYear.value;

        const auth = firebase.auth();
        console.log(email, password);

        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise
            .then(user => addUser(user, email, password, admissionyear))
            .catch(e => console.log(e.message));
    });

    $('input[name="grade_group"]', '#Grade').on('change', function() {
        Grade = $(this).val();
    });
/*

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