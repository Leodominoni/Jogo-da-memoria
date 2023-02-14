const grid = document.querySelector('.grid')

const pokemons = ['pokemon00','pokemon01','pokemon02','pokemon03','pokemon04','pokemon05','pokemon06','pokemon07','pokemon08', 'pokemon09']

const createElement = (tag, className) =>{
    const element = document.createElement(tag)
    element.className = className
    return element
}

let primeiraCard = ''
let segundaCard = ''

const finalGame = () => {
    const disabledCard = document.querySelectorAll('.disable-card')

    if(disabledCard.length === 20){
        alert ('Você venceu')
    }
}

const checarCard = () => {
    const primeiroPokemon = primeiraCard.getAttribute('data-pokemon')
    const segundooPokemon = segundaCard.getAttribute('data-pokemon')

    if( primeiroPokemon === segundooPokemon){
        primeiraCard.firstChild.classList.add('disable-card')
        segundaCard.firstChild.classList.add('disable-card')

        primeiraCard = ''
        segundaCard = ''

        finalGame()

    } else{

        setTimeout(()=>{
            primeiraCard.classList.remove('revelar-card')
            segundaCard.classList.remove('revelar-card')

            primeiraCard = ''
            segundaCard = ''
        },600)

    }
}

const revelarCard = ({target}) =>{

    if(target.parentNode.className.includes('revelar-card')){
        return
    }

    if(primeiraCard === ''){
        target.parentNode.classList.add('revelar-card')
        primeiraCard = target.parentNode
    } else if (segundaCard === ''){
        target.parentNode.classList.add('revelar-card')
        segundaCard = target.parentNode
    
        checarCard()
    }  
}

const createCard = (pokemon) =>{
    const card = createElement('div', 'card')
    const frente = createElement('div', 'lado frente')
    const atras = createElement('div', 'lado atras')

    frente.style.backgroundImage = `url('../images/pokemon/${pokemon}.jpeg')`

    card.appendChild(frente)
    card.appendChild(atras)

    card.addEventListener('click', revelarCard)
    card.setAttribute('data-pokemon', pokemon)

    return card
}

const game = () =>{

    const duplicarPokemons = [ ... pokemons, ...pokemons] /* espalhar os elementos de um array  */

    const embarralharPokemons = duplicarPokemons.sort( () => Math.random() - 0.5 )
    
    duplicarPokemons.forEach((pokemon)=>{
        const card = createCard(pokemon)
        grid.appendChild(card)
    })
}
game()