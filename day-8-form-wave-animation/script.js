const label = document.querySelectorAll('.form-control label')

label.forEach(label => {
    label.innerHTML = label.innerText
        // Splits letter
        .split('')
        // Map letters to an array and puts it inside <span> attribute
        .map((letter,idx) => `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`)
        // Join the letters
        .join('')
})
