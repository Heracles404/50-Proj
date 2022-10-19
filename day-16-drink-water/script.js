const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

// Small cups
smallCups.forEach((cup,idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})




// Small cups fill
function highlightCups(idx){
    // if full cups is clicked, and the next cup is empty, then decrease index by 1
    // removes fill in the last full cup
    if(smallCups[idx].classList.contains('full')
        && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }

    // loops through all the cups
    smallCups.forEach((cup, idx2) => {
        // checks all the cups/index before and the clicked cups/index
        if(idx2 <= idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })

    updateBigCup()

}

// Big cup fill
function updateBigCup(){
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    // hide percentage if no filled cups
    if(fullCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }else {
        percentage.style.visibility = 'visible'
        // 330px is the set height of big cup in css
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups *100}%`
    }

    // remained liters
    if (fullCups === totalCups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}