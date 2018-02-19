var loginText = document.getElementById("loginid");
var submitBtn = document.getElementById("submitBtn");

function userlogin(){
    var firebaseRef = firebase.database().ref();
    
    var usernameText = loginText.value;
    
    firebaseRef.push("Text").set(usernameText);
}