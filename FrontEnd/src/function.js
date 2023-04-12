const { url } = require("inspector");

function Login(){
    var UN = document.getElementById("username").value;
    var PW = document.getElementById("password").value;
    //Login info submit and wait feedback from backend
    alert("Login clicked")
}

//Check if username is registered already
function CheckRepeat(username){
    
    if(username=="123"){
        return true;
    }
    else{
        return false;
    }
}

function CheckConfirm(PW, PW_confirm){
    if(PW==PW_confirm){
        return true;
    }
    else{
        return false;
    }
}

const userAction = async () => {
    url = "http://localhost:3000/";
    const response = await fetch(url);
    const myJson = await response.json(); //extract JSON from the http response
    const str = JSON.stringify(myJson);
    console.log(str);
  }

function RegisterUser(user_name, password){
    const Http = new XMLHttpRequest();
    const url="http://localhost:3000/register";

    const body = JSON.stringify({
        user_name: "bob",
        password: "bob_0",
      });


      Http.open("POST", url, false);

    //   set content-type header to JSON
    Http.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    Http.send(body);

    // Http.onload = () => {
    //     if (Http.readyState == 4 && Http.status == 201) {
    //       console.log(JSON.parse(Http.responseText));
    //     } else {
    //       alert(`Error: ${Http.status}`);
    //     }
    //   };onreadystatechange

    Http.onload = (e) => {
        console.log(Http.responseText);
        if (Http.responseText.trim() == "true"){
            console.log("Success");
            return true;
        }
        else {
            console.log("Failure")
            return false;
        }
         
    }


}

function Register(){
   
    var UN = document.getElementById("username").value;
    var PW = document.getElementById("password").value;

    const success = RegisterUser(UN, PW);

    if (!success) {
        alert("Registration Failed");
    }

    var PW_confirm = document.getElementById("confirm-password").value;
    if (CheckRepeat(UN)) {
        if(CheckConfirm(PW, PW_confirm)){
            //username is not registed and two password are identical, registration is available
            //
        }
        else{
            alert("Two passwords are not identical, please check again!")
        }
    }
    else{
        alert("Username has been registed, please choose another one.")
    }
}


function AddFriend(){
    //alert("addfriend")
    document.getElementById("AddFriend-box").style.display="block";
}
function CloseWindow(){
    document.getElementById("AddFriend-box").style.display="none";
}