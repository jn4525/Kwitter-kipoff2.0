const firebaseConfig = {
      apiKey: "AIzaSyCEFhyRm86L7tenUWlqNKIPhmZFtYIsLYY",
      authDomain: "twitter-ripoff-5352f.firebaseapp.com",
      databaseURL: "https://twitter-ripoff-5352f-default-rtdb.firebaseio.com",
      projectId: "twitter-ripoff-5352f",
      storageBucket: "twitter-ripoff-5352f.appspot.com",
      messagingSenderId: "552390212024",
      appId: "1:552390212024:web:483c24ee46f354f284f74d"
    };
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            like:0

      });
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
document.getElementById("msg").value = "";
      } });  }); }
 
getData();
