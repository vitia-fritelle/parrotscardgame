const comparador = () => Math.random() - 0.5; 

const getNumberOfCards = () => {
    let numberOfCards = parseInt(prompt("Com quantas cartas deseja jogar?\n"
                                        +"Selecione um número par entre 4 e 14,"
                                        +" inclusives."));
    while(
        numberOfCards > 14 || numberOfCards < 4 
        || numberOfCards%2 === 1 || isNaN(numberOfCards)) {
        numberOfCards = parseInt(prompt("Insira um número válido.\n"
                                        +"Com quantas cartas deseja jogar?\n"
                                        +"Selecione um número par entre 4 e 14,"
                                        +" inclusives."))
    }
    return numberOfCards
}

const scrambleImages = (imageList) => {
    const result = imageList;
    result.sort(comparador);
    return result
}

const getSliceOfImages = (imageList, N) => imageList.slice(0,N);

const extendImageList = (imageList) => imageList.concat(imageList);

const setCards = (imageList) => {
    ul = document.getElementById("cards");
    ul.innerHTML = '';
    imageList.forEach(imageURL => {
        ul.innerHTML += `
        <li class="card">
            <img class="front-face" src="${imageURL}" alt="FRENTE">
        </li>
        `;
    });
    return null
}

parrotsImages = [
    "../assets/img/bobrossparrot.gif",
    "../assets/img/explodyparrot.gif",
    "../assets/img/fiestaparrot.gif",
    "../assets/img/metalparrot.gif",
    "../assets/img/revertitparrot.gif",
    "../assets/img/tripletsparrot.gif",
    "../assets/img/unicornparrot.gif",
];

setCards(
    scrambleImages(
        extendImageList(
            getSliceOfImages(
                scrambleImages(parrotsImages),getNumberOfCards()/2
            )
        )
    )
);


