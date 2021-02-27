function RegisterUser(){

    var url = "https://www.irinarentals.com/wp-login.php";
       
    xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(null);
}
RegisterUser();
