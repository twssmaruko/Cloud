
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

function Register(){
    var UN = document.getElementById("username").value;
    var PW = document.getElementById("password").value;
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