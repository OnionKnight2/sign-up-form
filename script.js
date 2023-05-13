let check = function() {
  if (document.getElementById('password').value != document.getElementById('password_confirm').value) {
    document.getElementById('password_confirm').title = "Passwords are not matching"
    document.getElementById('submit').disabled = true
  } 
  else {
    document.getElementById('submit').disabled = false
  }
}