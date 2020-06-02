function myFunction() {
    var x = document.getElementById("my-menu");
    if (x.className === "menu-section") {
      x.className += " responsive";
    } else {
      x.className = "menu-section";
    }
}