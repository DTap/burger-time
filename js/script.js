var navToggle = document.querySelector('#main-nav-toggle');
var navList = document.querySelector('#main-nav-list');

//always check to see if elements exist before writing js involving those elements
if (navToggle && navList) {
  // console.log('foo');
  navToggle.addEventListener("click", function() {
    if (navToggle.classList.contains("close")) {
  //if the element has the close class that means the nav is open so to close it we need to remove the open class from the nav list and remove the close class from the hamburger
    navToggle.classList.remove("close");
    navList.classList.remove("open")
  } else {
  navToggle.classList.add("close");
  navList.classList.add("open");
  }
  });
}
