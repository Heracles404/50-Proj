const tagsElement = document.getElementById('tags')
const textarea = document.getElementById('textarea')

// .focus() automatically puts cursor inside the #textarea
textarea.focus()

textarea.addEventListener('keyup', (event) => {
    createTags(event.target.value)

    if(event.key === 'Enter'){
        setTimeout(() => {
            // Clear input value
            event.target.value = ''
        }, 10)
        randomSelect()
    }
})


// Input
function createTags(input){
    // formatting - removes empty string and commas before the comma
    const tags = input.split(',')
        .filter(tag => tag.trim() !=='')
        .map(tag => tag.trim())

    // empties previous choice list on initial keypress
    tagsElement.innerHTML = ''

    // Appends to choice list, tags to tagsElement
    tags.forEach(tag => {
        const tags = document.createElement('span')
        tags.classList.add('tag')
        tags.innerText = tag
        tagsElement.appendChild(tags)
    })
}


// From here Random Selector
function randomSelect(){
    // sets how many times highlight goes through each of the choices
    const times = 30

    //sets
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        })

    }, times * 100)
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight')
}

function unHighlightTag(tag){
    tag.classList.remove('highlight')
}



















