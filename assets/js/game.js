const grid = document.querySelector('.grid')

const pokemons = ['pokemon00','pokemon01','pokemon02','pokemon03','pokemon04','pokemon05','pokemon06','pokemon07','pokemon08', 'pokemon09']

const createElement = (tag, className) =>{
    const element = document.createElement(tag)
    element.className = className
    return element
}

const createCard = (pokemon) =>{
    const card = createElement('div', 'card')
    const frente = createElement('div', 'lado frente')
    const atras = createElement('div', 'lado atras')

    frente.style.backgroundImage = `url('../images/pokemon/${pokemon}.jpeg')`

    card.appendChild(frente)
    card.appendChild(atras)

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