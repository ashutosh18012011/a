
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


  room_name = localStorage.getItem("roomname");
  user_name = localStorage.getItem("username");

  console.log("roomname"+room_name);
  console.log("username"+user_name);

  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    });

    document.getElementById("msg").value = "";                                                                         
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  firebase_message_id = childKey;
  message_data = childData;
      //Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4>"+ name + "<img class = 'user_tick' src = 'tick.png'></h4>";
      message_with_tag = "<h4 class = 'message_h4'>"+ message + "</h4>";
      like_button = "<button class = 'btn btn-warning' id = "+ firebase_message_id + "value ="+ like + "onclick = 'updateLike(this.id)'>";
      span_with_tag  = "<span class = 'glyphicon glyphicon-thumbs-up'>Like: "+ like + "</span> </button> <hr>";
      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
          like : updated_likes  
      });
}


function logout(){
  localStorage.removeItem("roomname");
  localStorage.removeItem("username");
  window.location="index.html";
}