const firebaseConfig = {
      apiKey: "AIzaSyA0M5sAbuflm69lLYl3PtbHbmxkb9ql9hE",
      authDomain: "kwitter-4aca3.firebaseapp.com",
      databaseURL: "https://kwitter-4aca3-default-rtdb.firebaseio.com",
      projectId: "kwitter-4aca3",
      storageBucket: "kwitter-4aca3.appspot.com",
      messagingSenderId: "686006766274",
      appId: "1:686006766274:web:b94f2d838334c7fbfe895b"
    };

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
