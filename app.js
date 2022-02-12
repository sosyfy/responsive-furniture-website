const cart = document.querySelector('.cart')
const cartIcon = document.getElementById('cart-icon')

cartIcon.onclick = ()=>{
    cart.classList.toggle('active')
    login.classList.remove('user')
    mobile.classList.remove('mobile-nav')

}
const login = document.querySelector('.login-form')
const userIcon = document.getElementById('user-icon')

userIcon.onclick = ()=>{
    login.classList.toggle('user')
    cart.classList.remove('active')
    mobile.classList.remove('mobile-nav')

}
const mobile = document.querySelector('.mobile-view')
const hum = document.getElementById('mobile')

hum.onclick = ()=>{
    login.classList.remove('user')
    cart.classList.remove('active')
    mobile.classList.toggle('mobile-nav')
}
const mobileNav = document.querySelector('.mobile-view')
const remove = document.getElementById('remove')

remove.onclick = ()=>{
    login.classList.remove('user')
    cart.classList.remove('active')
    mobileNav.classList.remove('mobile-nav')
}

