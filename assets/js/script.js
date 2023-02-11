const input = document.querySelector('.login-input')
const button = document.querySelector('.login-button')

const inputValide = ({target})=>{
    if (target.value.length > 2){ /* Valor do nosso input */
        button.removeAttribute('disabled')
        return 
    } 

    button.setAttribute('disabled', '')
}

input.addEventListener('input', inputValide)