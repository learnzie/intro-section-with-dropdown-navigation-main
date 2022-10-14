var navLinks = document.getElementById("sideLink");
var backdrop = document.querySelector(".backdrop");
var dropdown = document.querySelector(".dropdown-btn");
var dropdownC = document.querySelector(".dropdown-btnc");
var dropdownG = document.querySelector(".dropdown-btng");
var dropdownD = document.querySelector(".dropdown-btnd");
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
document.addEventListener("click", handleClickOutside);
function handleClickOutside(e) {
  if (!dropdown.contains(e.target)) {
    dropdownContentF.classList.remove("open");
  }
  if (!dropdownC.contains(e.target)) {
    dropdownContentC.classList.remove("open");
  }
  if (!dropdownG.contains(e.target)) {
    dropdownContentG.classList.remove("open");
  }
  if (!dropdownD.contains(e.target)) {
    dropdownContentD.classList.remove("open");
  }
}
// window.onclick = function(event){
//     //  if (!event.target.matches('.sharebtn'))
//     document.getElementsByClassName("dropdown-content").addEventListener('click',function(event){
//     event.stopPropagation();
// });

// window.onclick = function (event) {
//   if (!event.target.matches(".dropdown-btn")) {
//     var dropdowns = document.querySelector(".dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("open")) {
//         openDropdown.classList.remove("open");
//       }
//     }
//   }
// };
