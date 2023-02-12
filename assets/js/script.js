const input = document.querySelector('.login-input')
const button = document.querySelector('.login-button')
const form = document.querySelector('.login-form')

const inputValide = ({target})=>{
    if (target.value.length > 2){ /* Valor do nosso input */
        button.removeAttribute('disabled')
        return 
    } 

    button.setAttribute('disabled', '')
}

const handleSubmit = (event) =>{
    event.preventDefault()

    localStorage.setItem('treinador', input.value)
    window.location = '/assets/html/game.html'
}

input.addEventListener('input', inputValide)
form.addEventListener('submit', handleSubmit)