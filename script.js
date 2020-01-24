let menu_open = false;
function menu_openen(knop) {
  knop.classList.toggle("change");
  let menu = document.getElementById('mobiel-nav');
  let menu_ul = document.getElementById('nav-hamburger');
  if (menu_open == false) {
    menu.style.width = "50vw";
    menu_ul.style.display = "block";
    menu_open = true;
  } else {
    menu.style.width = "0px";
    menu_ul.style.display = "none";
    menu_open = false;
  }
}
