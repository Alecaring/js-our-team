
const members = [
    {
        immagine    : "../img/wayne-barnett-founder-ceo.jpg",
        nome        : "Wayne Barnett",
        posizione   : "Founder & CEO",
    },
    {
        immagine    : "../img/angela-caroll-chief-editor.jpg",
        nome        : "Angela Caroll",
        posizione   : "Chief Editor",
    },
    {
        immagine    : "../img/walter-gordon-office-manager.jpg",
        nome        : "Walter Gordon",
        posizione   : "Office Manager",
    },
    {
        immagine    : "../img/angela-lopez-social-media-manager.jpg",
        nome        : "Angela Lopez",
        posizione   : "Social Media Manager",
    },
    {
        immagine    : "../img/scott-estrada-developer.jpg",
        nome        : "Scott Estrada",
        posizione   : "Developer",
    },
    {
        immagine    : "../img/barbara-ramos-graphic-designer.jpg",
        nome        : "Barbara Ramos",
        posizione   : "Graphic Designer",
    },
];

const $one = document.getElementById.bind(document);
const $all = document.querySelectorAll.bind(document);

const Container = $one("myJsContainer");
console.log(Container);

for (let i = 0; i < members.length; i++) {
    const curMenber = members[i];


    const cards = document.createElement("div");
        cards.className = "card col-3";
        Container.append(cards);

    const img = document.createElement("img")
        img.className = "card-img-top";
        img.src = curMenber.immagine;
        img.alt = "sono una immagine";
        cards.append(img);

    const txtContainerInnerCard = document.createElement("div");
        txtContainerInnerCard.className = "card-body";
        cards.append(txtContainerInnerCard);

    const headTitle = document.createElement("h5");
        headTitle.className = "card-title text-center";
        headTitle.textContent = curMenber.nome;
        txtContainerInnerCard.append(headTitle);

    const paraDescription = document.createElement("p");
        paraDescription.className = "card-text text-center";
        paraDescription.textContent = curMenber.posizione;
        txtContainerInnerCard.append(paraDescription);


    for (let key in curMenber) {
        
        console.log(`${curMenber.nome} : ${curMenber.posizione} : ${curMenber.immagine}`);
    }

}