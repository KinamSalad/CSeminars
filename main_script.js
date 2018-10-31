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
    var userInfo = database.ref('users');
    userInfo.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log(childData);
        });
    });

});