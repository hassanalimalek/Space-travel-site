const mobileNavToggle= document.getElementsByClassName('mobile-nav-toggle')
let header = document.querySelector('.primary-header')
console.log("mobileNavToggle -->",mobileNavToggle)
mobileNavToggle[0].addEventListener('click',(()=>{
    header.classList.toggle('primary-navigation-visible')
    console.log("Test @@@")
}))