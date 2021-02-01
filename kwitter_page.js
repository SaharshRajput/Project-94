 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCuvyZv50qKnZzEsrp1yGfiTtghEUQ0Xhg",
    authDomain: "project-93--96.firebaseapp.com",
    databaseURL: "https://project-93--96-default-rtdb.firebaseio.com",
    projectId: "project-93--96",
    storageBucket: "project-93--96.appspot.com",
    messagingSenderId: "28826380110",
    appId: "1:28826380110:web:1e54a1489bf397ebd5e01f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  
  function send()
  {
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });