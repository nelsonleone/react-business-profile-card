const toggle = document.querySelector('.toggle')
const toggleIcon = document.querySelector('.toggle-icon')
window.onload = document.body.classList.add('theme1')

toggleIcon.addEventListener('click',() => {
    if(document.body.classList.contains('theme1')){
        document.body.classList.remove('theme1')
        document.body.classList.add('theme2')
        toggleIcon.style.left = '65%';
        toggleIcon.style.backgroundColor  = 'white';
        toggle.style.animationName = 'toggleForwards'
    }else{
        document.body.classList.remove('theme2')
        document.body.classList.add('theme1')
        toggleIcon.style.left = '2%';
        toggleIcon.style.backgroundColor  = 'black';
        toggle.style.animationName = 'toggleBackwards'
    }
})