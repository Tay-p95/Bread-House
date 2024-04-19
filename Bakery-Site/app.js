
const searchIcon = document.querySelector('.search-icon');
const searchForm = document.querySelector('.search-form');
const menuIcon = document.querySelector('.menu-icon');
const navBar = document.querySelector('.navbar')
const cartIcon = document.querySelector('.cart-icon');
const cartContainer = document.querySelector('.cart-items-container');



cartIcon.addEventListener('click', () =>{
  cartContainer.classList.toggle('active');
  searchForm.classList.remove('active');
  navBar.classList.remove('active');
})

searchIcon.addEventListener('click', () =>{
  searchForm.classList.toggle('active');
  cartContainer.classList.remove('active');
  navBar.classList.remove('active');
})

menuIcon.addEventListener('click', ()=>{
  navBar.classList.toggle('active');
  cartContainer.classList.remove('active');
  searchForm.classList.remove('active');
})