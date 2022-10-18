const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

// Creates buttons
sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', ()=> {
        stopSounds()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSounds(){
    sounds.forEach(sound => {
        const soundss = document.getElementById(sound)

        soundss.pause()
        soundss.currentTime = 0;
    })
}