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
        <li class="card" onclick="interaction(this)">
            <div class="back-face"></div>
            <div class="front-face">
                <img src="${imageURL}" alt="FRENTE">
            </div>
        </li>
        `;
    });
    return null
}

const prepareGame = () => {

    setCards(
        scrambleImages(
            extendImageList(
                getSliceOfImages(
                    scrambleImages(parrotsImages),numberOfCards/2
                )
            )
        )
    );
}

const flipCard = (element) => {

    const backFace = element.querySelector(".back-face");
    const frontFace = element.querySelector(".front-face");
    backFace.classList.toggle("back-face-flipped");
    frontFace.classList.toggle("front-face-flipped");
    element.classList.toggle("found");
    return null;
}

const clearAuxList = () => {

    auxList = [];
    return null;
} 

const action = () => {

    if (auxList.length === 2){
        const img1 = getImageSource(auxList[0]);
        const img2 = getImageSource(auxList[1]);
        if(img1 !== img2) {
            auxList.forEach(selectedElement => {
                flipCard(selectedElement);
            });
        }
        clearAuxList();
    }
    return null;
}

const getImageSource = (element) => {

    return element.querySelector(".front-face").querySelector("img").src;
}

const interaction = (element) => {

    if (!element.classList.contains("found")){
        numberOfFlips++;
        flipCard(element);
        auxList.push(element);
        //setTimeout não está esperando o tempo para executar a função
        setTimeout(action(),10000);
    }
    if(countFoundCards() === numberOfCards) {
        alert(`Você ganhou em ${numberOfFlips} jogadas!`)
        gameCounter++;
        showGamePoints();
        numberOfFlips = 0;
        if(continueGame()){
            numberOfCards = getNumberOfCards();
            prepareGame();
        } else {
            disableCards();
        }
        
    }
    return null
}

const countFoundCards = () => {

    return Array.from(document.querySelectorAll(".found")).length;
}

const showGamePoints = () => {

    document.querySelector("#game-points").innerText = (
        gameCounter <= 1 ?`${gameCounter} win`:`${gameCounter} wins`
    );
    return null
}

const continueGame = () => {

    return prompt("Você deseja continuar a jogar? (S/N)").toLowerCase() === "s"; 
}

const disableCards = () => {

    Array.from(document.querySelectorAll(".card")).forEach((element)=>{
        element.onclick = null;
    })
    return null;
}

const parrotsImages = [
    "./assets/img/bobrossparrot.gif",
    "./assets/img/explodyparrot.gif",
    "./assets/img/fiestaparrot.gif",
    "./assets/img/metalparrot.gif",
    "./assets/img/revertitparrot.gif",
    "./assets/img/tripletsparrot.gif",
    "./assets/img/unicornparrot.gif",
];
let auxList = [];
let gameCounter = 0;
let numberOfFlips = 0;
let numberOfCards = getNumberOfCards();
prepareGame();
showGamePoints();
