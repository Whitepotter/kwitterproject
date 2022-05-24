var firebaseConfig = {
    apiKey: "AIzaSyAiA9hR_NI618kxPlE93kRocc5Jeh_kDbs",
    authDomain: "lets-chat-cbab1.firebaseapp.com",
    databaseURL: "https://lets-chat-cbab1-default-rtdb.firebaseio.com",
    projectId: "lets-chat-cbab1",
    storageBucket: "lets-chat-cbab1.appspot.com",
    messagingSenderId: "712009111264",
    appId: "1:712009111264:web:8400343c5e329180aa2285"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("room_name");
  user_name = localStorage.getItem("user_name");

  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name : user_name,
          message : msg,
          like : 0
    });
    document.getElementById("output").innerHTML = msg;
    document.getElementById("msg").value = "";
}

function log_out(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}