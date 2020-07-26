var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var eventList = document.getElementById("event");
var myEventList = document.getElementById("myregistration");
var data = document.getElementById("data");
var nodata = document.getElementById("ini");

myEventList.style.display = "none";
eventList.style.display = "block";


function events() {
    if(eventList.style.display === "none"){
        eventList.style.display = "block";
        myEventList.style.display = "none";
    }
}


function myreg() {
    if(myEventList.style.display === "none"){
        myEventList.style.display = "block";
        eventList.style.display = "none";
    }
}

nodata.style.display = "block";
data.style.display = "none";
var x = document.getElementById("myTable").rows.length;
if(x === 1){
  
  nodata.style.display = "block";data.style.display = "none";
}
else{
  
  data.style.display = "block";nodata.style.display = "none";
}

let successbut = document.querySelector(".checkk");
successbut.addEventListener("click", validation);

function validation(ev) {
  ev.preventDefault();
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var phno = document.getElementById("phno").value;
  var email = document.getElementById("email").value;

  var e = document.getElementById("eventname");
  var strUser = e.options[e.selectedIndex].value;
  var strUser1 = e.options[e.selectedIndex].text;
  // console.log(strUser1);
  if (strUser === 0) {
    document.getElementById("eventname1").innerHTML = "Please Select a Event";
    // alert("Please select a Contest");
    return false;
  }
  setTimeout(() => {
    document.getElementById("eventname1").innerHTML = " ";
  }, 2000);

  if (fname === "") {
    document.getElementById("fname1").innerHTML =
      "Please fill the Frist Name";
    setTimeout(() => {
      document.getElementById("fname1").innerHTML = " ";
    }, 2000);
    return false;
  }
  if (fname.length <= 2 || fname.length > 20) {
    document.getElementById("fname1").innerHTML =
      "Please enter a valid name";
    setTimeout(() => {
      document.getElementById("fname1").innerHTML = " ";
    }, 2000);
    return false;
  }
  if (!isNaN(fname)) {
    document.getElementById("fname1").innerHTML =
      "only characters are allowed";
    setTimeout(() => {
      document.getElementById("fname1").innerHTML = " ";
    }, 2000);
    return false;
  }

  if (lname === "") {
    document.getElementById("lname1").innerHTML =
      "Please fill the Last Name";
    setTimeout(() => {
      document.getElementById("lname1").innerHTML = " ";
    }, 2000);
    return false;
  }
  if (fname.length <= 2 || fname.length > 20) {
    document.getElementById("lname1").innerHTML =
      "Please enter a valid name";
    setTimeout(() => {
      document.getElementById("lname1").innerHTML = " ";
    }, 2000);
    return false;
  }
  if (!isNaN(fname)) {
    document.getElementById("lname1").innerHTML =
      "only characters are allowed";
    setTimeout(() => {
      document.getElementById("lname1").innerHTML = " ";
    }, 2000);
    return false;
  }


  if (phno === "") {
    document.getElementById("phno1").innerHTML =
      "Please fill the mobile Number field";
    setTimeout(() => {
      document.getElementById("phno1").innerHTML = " ";
    }, 2000);

    return false;
  }
  if (isNaN(phno)) {
    document.getElementById("phno1").innerHTML =
      "User must write digits only not characters";
    setTimeout(() => {
      document.getElementById("phno1").innerHTML = " ";
    }, 2000);

    return false;
  }
  if (phno.length != 10) {
    document.getElementById("phno1").innerHTML =
      "Mobile Number must be 10 digits only";
    setTimeout(() => {
      document.getElementById("phno1").innerHTML = " ";
    }, 2000);

    return false;
  }

  if (email === "") {
    document.getElementById("email1").innerHTML =
      "Please fill the email field";
    setTimeout(() => {
      document.getElementById("email1").innerHTML = " ";
    }, 2000);

    return false;
  }
  if (email.indexOf("@") <= 0) {
    document.getElementById("email1").innerHTML = "@ Invalid Position";
    setTimeout(() => {
      document.getElementById("email1").innerHTML = " ";
    }, 2000);

    return false;
  }

  if (
    email.charAt(email.length - 4) != "." &&
    email.charAt(email.length - 3) != "."
  ) {
    document.getElementById("email1").innerHTML = " . Invalid Email";
    setTimeout(() => {
      document.getElementById("email1").innerHTML = "";
    }, 2000);

    return false;
  }
  let today = new Date();
  let timestamp = today.getHours() + " " + "Hr" + ":" + today.getMinutes() + " " + "Min";
  let lists = document.querySelector(".values");
  let row = document.createElement("tr");
  row.innerHTML = `<td>${fname} ${lname}</td>
                      <td>${phno}</td>
                      <td>${email}</td>
                      <td>${strUser1}</td>
                      <td>${timestamp}</td>`;

  lists.append(row);

  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("phno").value = "";
  document.getElementById("email").value = "";
  document.getElementById("eventname").value = "0";

  modal.style.display = "none";
  myreg();
  alert("Event is added");
  x = document.getElementById("myTable").rows.length;
  if(x === 1){
    data.style.display = "none";
    nodata.style.display = "block";
  }
  else{
    nodata.style.display = "none";
    data.style.display = "block";
  }
}

