var isAuthenticated = document.cookie.indexOf("authenticated=true") >= 0;

if (isAuthenticated) {
  document.body.className += " authenticated";
}
