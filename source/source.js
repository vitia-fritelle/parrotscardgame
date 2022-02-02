const getNumberOfCards = () => {
    let numberOfCards = parseInt(prompt("Com quantas cartas deseja jogar?\n"
                                        +"Selecione um número par entre 4 e 14,"
                                        +" inclusives."));
    while(numberOfCards > 14 || numberOfCards < 4 || numberOfCards%2 === 1) {
        numberOfCards = parseInt(prompt("Insira um número válido.\n"
                                        +"Com quantas cartas deseja jogar?\n"
                                        +"Selecione um número par entre 4 e 14,"
                                        +" inclusives."))
    }
    return numberOfCards
}

const setCards = (numberOfCards) => {
    ul = document.getElementById("cards");
    ul.innerHTML = '';
    for(let i = 0; i < numberOfCards; i++) {
        ul.innerHTML += `
        <li class="card"></li>
        `;
    }
}

setCards(getNumberOfCards())