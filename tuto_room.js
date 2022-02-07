var firebaseConfig = {
      apiKey: "AIzaSyA0OIRRli7GNeP-CBTbXD_L8XmvEhdmYPo",
      authDomain: "prac-494ae.firebaseapp.com",
      databaseURL: "https://prac-494ae-default-rtdb.firebaseio.com",
      projectId: "prac-494ae",
      storageBucket: "prac-494ae.appspot.com",
      messagingSenderId: "1092979843681",
      appId: "1:1092979843681:web:5400061beb1ad52de88020"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="WELCOME "+ user_name+".";
function addroom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"add_roomName"
});
localStorage.setItem("room_name",room_name);
window.location="tuto_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name' id="+Room_names+" onclick='rediarct(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();

function rediarct(name)
{
      localStorage.setItem("room_name",name);
      window.location="tuto_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}