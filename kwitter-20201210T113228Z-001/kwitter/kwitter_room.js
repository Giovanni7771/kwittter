
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyACzeLIAES5vE9H0kp-IePv5dYGs1XADcE",
      authDomain: "kwitter-478bc.firebaseapp.com",
      databaseURL: "https://kwitter-478bc-default-rtdb.firebaseio.com",
      projectId: "kwitter-478bc",
      storageBucket: "kwitter-478bc.appspot.com",
      messagingSenderId: "634612987734",
      appId: "1:634612987734:web:1f09dfef36a316a372c8f7",
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebase.Config);
    function addRoom() {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").childKey(room_name).update({

          });
          localStorage;setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name -" + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html";
}
