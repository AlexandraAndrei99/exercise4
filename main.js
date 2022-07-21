const heightOfEl = document.querySelector('.buttons a').offsetHeight
const heightOfNav = document.querySelector('nav').offsetHeight
const heightOfElPx = heightOfEl + (heightOfNav-heightOfEl)/2 + "px"
document.documentElement.style.setProperty('--marginTop', heightOfElPx);

window.addEventListener("resize", () => {
    const heightOfEl = document.querySelector('.buttons a').offsetHeight
    const heightOfNav = document.querySelector('nav').offsetHeight
    const heightOfElPx = heightOfEl + (heightOfNav-heightOfEl)/2 + "px"
    document.documentElement.style.setProperty('--marginTop', heightOfElPx);
})
const colorH1 = document.querySelector('.ctaSection h1')
const butonReq = document.querySelector('.heroSection button')
butonReq.addEventListener("click",() => {
    colorH1.style.color= "pink";
})
const hamburger= document.querySelector('.hamburger')
const meniu = document.querySelector('.menu')
const outNav = document.querySelector('.outNav')

hamburger.addEventListener("click", () =>{
    meniu.classList.toggle("menuToggler")
    outNav.classList.toggle("outNavToggler")
    hamburger.classList.toggle("hamburgerToggler")
    
} )




