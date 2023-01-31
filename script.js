const searchForm = document.querySelector(".search-form-container");

document.querySelector('#search-btn').onclick = () => {
    // if(searchForm.style.display == 'block'){
    //     searchForm.style.zIndex = '998';
    // }else{
    //     searchForm.style.zIndex = '1000';
    // }
    searchForm.classList.toggle("active");
    shoppingCart.classList.remove("active");
    menu.classList.remove("active");
    loginuser.classList.remove("active");
}

const shoppingCart = document.querySelector(".shopping-cart-container");

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle("active");
    menu.classList.remove("active");
    loginuser.classList.remove("active");
    searchForm.classList.remove("active");
}

const loginuser = document.querySelector('.login-form-container');

document.querySelector('#user-btn').onclick = () => {
    loginuser.classList.toggle("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    menu.classList.remove("active");
}

const menu = document.querySelector('.header .nav');

document.querySelector('#menu-btn').onclick = () => {
    menu.classList.toggle("active");
    loginuser.classList.remove("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
}

window.onscroll = () => {
    menu.classList.remove("active");
}