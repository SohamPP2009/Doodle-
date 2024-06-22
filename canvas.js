
function logout() {
  window.location="index.html";
}

name=localStorage.getItem("name");
password=localStorage.getItem("password");
document.getElementById("name").innerHTML=name+" !";

var firebaseConfig = {
  apiKey: "AIzaSyDsg6yTdy_UB0Lx9PAORpuUaVCwH42ucNo",
  authDomain: "doodle-a9383.firebaseapp.com",
  databaseURL: "https://doodle-a9383-default-rtdb.firebaseio.com",
  projectId: "doodle-a9383",
  storageBucket: "doodle-a9383.appspot.com",
  messagingSenderId: "94206953827",
  appId: "1:94206953827:web:41da21d7877a20bdfbeb56",
  measurementId: "G-H5SZD8G0SC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// initialize database
const db = firebase.database();

// get user's data



// submit form
// listen for submit event on the form and call the postChat function
document.getElementById("message-form").addEventListener("submit", sendMessage);

// send message to db
function sendMessage(e) {
  e.preventDefault();

  // get values to be submitted
  const timestamp = Date.now();
  const messageInput = document.getElementById("msg");
  const message = messageInput.value;

  // clear the input box
  messageInput.value = "";

  //auto scroll to bottom
  document
      .getElementById("messages")
      .scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest"
      });

  // create db collection and send in the data
  db.ref("messages/" + timestamp).set({
      name,
      password,
      message,
  });
}

// display the messages
// reference the collection created earlier
const fetchChat = db.ref("messages/");

// check for new messages using the onChildAdded event listener
fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const message = `<li class=${
name === messages.name ? "sent" : "receive"
}><span>${messages.name}: </span>${messages.message}</li>`;
  // append the message on the page
  document.getElementById("messages").innerHTML += message;
});


// Function to send a message
db = firebase.database();




// Import Firebase SDK


// Initialize Firebase





/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

 
function inbox(){
  bin=document.getElementById("chatt");
  sho=document.getElementById("chat");
  box=document.getElementById("msgg")
  save=document.getElementById("saved");
  boxn=document.getElementById("msg");
  tras=document.getElementById("trash");

  bin.style.display="block"
  save.style.display="none";
  tras.style.display="none";
  sho.style.display="none";
  box.style.display="none";
  box.style.display="none";
  boxn.style.display="none";

  
}
function main(){
  sho=document.getElementById("chat");
  bin=document.getElementById("chatt");
  box=document.getElementById("inboxx");
  save=document.getElementById("saved");
  boxn=document.getElementById("msg");
  tras=document.getElementById("trash");
  
  sho.style.display="block";
  save.style.display="none";
  bin.style.display="none";
  tras.style.display="none";
  box.style.display="none";
  boxn.style.display="none";
}
function saved(){
  bin=document.getElementById("chatt");
  sho=document.getElementById("chat");
  box=document.getElementById("inboxx")
  foot=document.getElementById("foot");
  save=document.getElementById("saved");
  tras=document.getElementById("trash");

  save.style.display="block";
  bin.style.display="none";
  tras.style.display="none";
  sho.style.display="none";
  box.style.display="none";
  foot.style.display="none";
}
function trash(){
  tras=document.getElementById("trash");
  bin=document.getElementById("chatt");
  sho=document.getElementById("chat");
  box=document.getElementById("inboxx")
  foot=document.getElementById("foot");
  save=document.getElementById("saved");

  tras.style.display="block";
  save.style.display="none";
  bin.style.display="none";
  sho.style.display="none";
  box.style.display="none";
  foot.style.display="none";
}

function setting(){
  window.location="setting.html";
}








  





