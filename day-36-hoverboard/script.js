const container = document.getElementById('container')
const colors = ['#5800FF', '#0096FF', '#00D7FF', '#72FFFF', '#541690', '#FF4949', '#FF8D29', '#FFCD38', '#00AD7C', '#B5FF7D', '#52D681']

const squares = 500

for(let i = 0; i < squares; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.background = '#222'
    element.style.boxShadow = '0 0 2px #111'
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}