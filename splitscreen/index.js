// Getting elements by id
const burger = document.getElementById('mBurger')
const leftWindow = document.getElementById('leftSplit')
const rightWindow = document.getElementById('rightSplit')

//Lets get bounds for the parent container so we can calculate where the mouse is more accurately and consistently
const containerBounds = document.getElementById('container').getBoundingClientRect()


// Move main window flag
var statMove=false

const moveLeftWindow = (e)=>{
    if(statMove){
        const x = e.clientX/window.innerWidth;
        const y = e.clientY - containerBounds.top;
        console.log(x)
        leftWindow.style.width=`${x*100}vw`
        burger.style.left=`${x*100}vw`
    }
}

const handleMouseDown = ()=>{
    statMove = true
}

const handleMouseUp = ()=>{
    statMove = false
}

window.addEventListener('mousemove',moveLeftWindow)

//burger click events
burger.addEventListener('mousedown', handleMouseDown)
burger.addEventListener('mouseleave', handleMouseUp)
