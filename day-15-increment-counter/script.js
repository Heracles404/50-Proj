const counter = document.querySelectorAll('.counter')

counter.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        // '+' turns it into a number -- could be number() or parseInt
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        // increment number, change divisor to higher number if wanted longer loading time
        const increment = target / 200

        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        }else{
            counter.innerText = target
        }
    }

    updateCounter()

})