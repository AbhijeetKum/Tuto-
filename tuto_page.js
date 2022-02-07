var firebaseConfig = {
      apiKey: "AIzaSyA0OIRRli7GNeP-CBTbXD_L8XmvEhdmYPo",
      authDomain: "prac-494ae.firebaseapp.com",
      databaseURL: "https://prac-494ae-default-rtdb.firebaseio.com",
      projectId: "prac-494ae",
      storageBucket: "prac-494ae.appspot.com",
      messagingSenderId: "1092979843681",
      appId: "1:1092979843681:web:5400061beb1ad52de88020"
    };
    
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

document.getElementById("msg").value="";

   }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_teg="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_teg="<h4 class='message_h4'>"+message+"</h4>";
button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_with_teg="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button> <hr>";
row=name_with_teg+message_with_teg+button+span_with_teg;
document.getElementById("output").innerHTML+=row;
      } });  }); }
getData();

function updatelike(message_id)
{
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      update_like=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like:update_like
      });
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}