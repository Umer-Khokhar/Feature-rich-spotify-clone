import './style.css'

const navShow = document.getElementById('nav-burger');
const leftSide = document.querySelector('.left')
const rightSide = document.querySelector('.right')
const show = document.querySelector(".show")

console.log(leftSide)

navShow.addEventListener('click', e => {
    leftSide.classList.add('active')
    console.log("clicked")
    // rightSide.classList.add('unactive')
})


show.addEventListener('click', e => {
    leftSide.classList.remove('active')
    console.log("clicked")
    rightSide.classList.remove('unactive')
})