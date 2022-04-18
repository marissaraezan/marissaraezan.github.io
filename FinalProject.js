const items = document.querySelectorAll(".item");
 

function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}
 
document.getElementById("btnsubscribe").onclick = function() {
	var validateEmail = prompt("Enter your email to get our newsletter!");
  alert("Thank you for subscribing!");
}

