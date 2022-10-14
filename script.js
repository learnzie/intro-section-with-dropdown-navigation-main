var navLinks = document.getElementById("sideLink");
var backdrop = document.querySelector(".backdrop");
var dropdown = document.querySelector(".dropdown-btn");
// var dropdownt = document.querySelector(".dropdown-bto");
var dropdownContentF = document.querySelector(".dropdown-content.features");
var dropdownContentC = document.querySelector(".dropdown-content.company");

var dropdownContentG = document.querySelector(".dropdown-content.feature");
var dropdownContentD = document.querySelector(".dropdown-content.companys");
function showMenu() {
  navLinks.style.right = "0";
  backdrop.classList.add("open");
}
function hideMenu() {
  navLinks.style.right = "-200px";
  backdrop.classList.remove("open");
}

function showDropdown(type) {
  console.log(type);
  // if (dropdownContent.classList.contains("open")) {
  //   dropdownContent.classList.remove("open");
  // } else {
  //   dropdownContent.classList.add("open");
  // }
  if (type === "f") {
    dropdownContentF.classList.toggle("open");
  } else {
    dropdownContentC.classList.toggle("open");
  }
  // dropdownContentF.classList.toggle("open");
}
function showDrop(type) {
  console.log(type);
  if (type === "g") {
    dropdownContentG.classList.toggle("open");
  } else {
    dropdownContentD.classList.toggle("open");
  }
}
