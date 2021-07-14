let menu = document.querySelector("#menu");
let header = document.querySelector("#header");

if (screen.width <= 991) {
  console.log("Active");
  menu.style.display = "block";
  menu.addEventListener("click", () => {
    if (menu.className == "fa fa-bars") {
      header.style.left= "0%";
      menu.className = "fa fa-close";
    } else {
      header.style.left = "-120%";
      menu.className = "fa fa-bars";
    }
  });
} else {
  menu.style.display = "none";
  header.style.left = "0%";
}


