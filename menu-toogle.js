function toggleMenu() {
  var menu_icon = document.querySelector(".open-menu-icon");
  var div_controls = document.getElementById("div-controls");
  var menu_lateral_itens = document.querySelectorAll(".menu-lateral-iten");
  var menu_lateral = document.querySelector(".menu-lateral");

  if (menu_icon.innerText === "menu") {
    menu_lateral.style.width = "400px";
    menu_icon.innerText = "close";
    div_controls.style.display = "block";
    menu_lateral_itens.forEach((item) => {
      item.style.display = "block";
    });
  } else {
    menu_lateral.style.width = "40px";
    menu_icon.innerText = "menu";
    div_controls.style.display = "none";
    menu_lateral_itens.forEach((item) => {
      item.style.display = "none";
    });
  }
}
