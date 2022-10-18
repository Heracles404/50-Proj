const jokeElement = document.getElementById('joke')
const jokeBtn = document.getElementById('joke-btn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()


// Using .then()
// function generateJoke(){
//     const config = {
//         headers:{
//             'Accept': 'application/json'
//         }
//     }
//
//     fetch('https://icanhazdadjoke.com/', config)
//         .then(res => res.json())
//         .then(data => {
//             // Set "//Jokes goes here" text to  fetch joke
//             jokeElement.innerHTML = data.joke
//         })
// }


// Using async await --- Cleaner version of using API
// IMPORTANT: async is a must when using await method
async function generateJoke(){
    const config = {
        headers:{
            'Accept': 'application/json'
        }
    }

    const res =  await fetch('https://icanhazdadjoke.com/', config)
    const data = await res.json()

    jokeElement.innerHTML = data.joke

}