
var firebaseConfig = {
  apiKey: "AIzaSyCg7AfxaPPLXRkW0g1Q3REv2LNw7hH7FAw",
  authDomain: "social-website-c1a98.firebaseapp.com",
  databaseURL: "https://social-website-c1a98-default-rtdb.firebaseio.com",
  projectId: "social-website-c1a98",
  storageBucket: "social-website-c1a98.appspot.com",
  messagingSenderId: "596312541808",
  appId: "1:596312541808:web:48b7e155b1686d64df42b5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


