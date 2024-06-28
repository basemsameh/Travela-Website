let navbar = document.querySelector('.navbar');
let scrollTop = document.querySelector('.scroll-top');
let searchForm = document.querySelector('.search-form');

window.onscroll = () => {
  // Scroll Top Button
  if (window.scrollY >= 500) {
    scrollTop.classList.add('active');
    scrollTop.onclick = () => { window.scrollTo(0, 0) };
  }
  if (window.scrollY < 500) {
    scrollTop.classList.remove('active');
  }
  // Make Navbar fixed then change position of Search Form
  if (window.scrollY >= 50) {
    navbar.classList.add('active');
    searchForm.classList.add('active');
  }
  if (window.scrollY < 50) {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
  }
}