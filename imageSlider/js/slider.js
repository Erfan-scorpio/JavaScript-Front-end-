//viriables
let counter = 0
let slideshow =document.querySelector('.slidebox')
let slides = document.querySelectorAll('.slide')
let points = document.querySelectorAll('.point')
let nextBtn = document.querySelector('#next')
let prevBtn = document.querySelector('#prev')
let timer = 3000

let slideSwitcher = ()=>{
    slides.forEach(slide => slide.classList.remove('active'))
    slides[counter].classList.add('active')
    points.forEach(point => point.classList.remove('active'))
    points[counter].classList.add('active')
}

//slider engine
let goNext = ()=>{
    counter = (counter == slides.length -1) ? 0 : counter + 1
    slideSwitcher()
}
let goPrev = ()=>{
    counter = (counter == 0) ? slides.length -1 : counter - 1
    slideSwitcher()
}
let switcherTimer = setInterval(goNext , timer)
//buttons
nextBtn.addEventListener('click' , e => goNext() )
prevBtn.addEventListener('click' , e => goPrev() )
//slideshow hover
slideshow.addEventListener('mouseover' , e => clearInterval(switcherTimer) )
slideshow.addEventListener('mouseleave' , e => switcherTimer = setInterval(goNext , timer))
//pointers
points.forEach((point , index) => {
    point.addEventListener('mouseover' , e =>{
        counter = index
        slideSwitcher()
    })
})
//by Erfan-scorpio 