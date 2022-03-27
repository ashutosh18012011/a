//firebase links
const firebaseConfig = {
    apiKey: "AIzaSyDCxq8ldjptxrVUOJdec2Nr03495CAhuDc",
    authDomain: "lets-chat-webapp-bcbf8.firebaseapp.com",
    databaseURL: "https://lets-chat-webapp-bcbf8-default-rtdb.firebaseio.com",
    projectId: "lets-chat-webapp-bcbf8",
    storageBucket: "lets-chat-webapp-bcbf8.appspot.com",
    messagingSenderId: "175609804745",
    appId: "1:175609804745:web:a58e8375e9fb1730d59a18",
    measurementId: "G-EPVQVVJY24"
  };
    
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

    user_name = localStorage.getItem("username");
    document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";
    
    function addRoom(){
        room_name = document.getElementById("room_name").value;

        localStorage.setItem("roomname", room_name);
    
             window.location = "jmail_page.html";

             firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
             });
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
          console.log("room_name -"+Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"<div><hr>";
          document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToroomname(name){
  console.log(name);
  localStorage.setItem("roomname",name);
  window.location = "jmail_page.html";
}
function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location="index.html";
}
  
