

const cardData = [
    { 
        title: 'Chapada dos Guimarães', 
        content: 'O parque pode ser visitado o ano todo  está localizado entre os municípios de Cuiabá ...',
        image: 'img/58676_chapada-dos-guimaraes.jpg',
        buttonText: 'saiba mais',
        buttonLink: 'post1.html',
    },
    { 
        title: 'Anavilhanas', 
        content: 'Possui aproximadamente 400 ilhas, 60 lagos Está localizado no estado do Amazonas Estende-se por cerca de 160 km....',
        image: 'img/anavilhanas-lodge-daniela-filomeno-e1672939232223.webp',
        buttonText: 'saiba mais',
        buttonLink: 'post1.html' // Substitua pela URL da sua outra página

    },
    { 
        title: 'Praia de boa viagem', 
        content: 'Praia animada com faixa de areia de 11 km... ',
        image: 'img/Praia-de-Boa-Viagem.jpg',
        buttonText: 'saiba mais'

    }
];

// Função para renderizar os cards
function renderCards() {
    const cardsContainer = document.getElementById('cards-container');

    // Limpar conteúdo existente
    cardsContainer.innerHTML = '';

    // Iterar sobre os dados do card e criar elementos HTML
    cardData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        const imageElement = document.createElement('img');
        imageElement.src = card.image;

        const titleElement = document.createElement('h2');
        titleElement.textContent = card.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = card.content;

        const buttonLinkElement = document.createElement('a');
        buttonLinkElement.href = card.buttonLink;


        const buttonElement = document.createElement('button');
        buttonElement.textContent = card.buttonText;

        // Adicionar elementos ao card
        cardElement.appendChild(imageElement);
        cardElement.appendChild(titleElement);
        cardElement.appendChild(contentElement);
        cardElement.appendChild(buttonElement);
        cardElement.appendChild(buttonLinkElement); // Adiciona a âncora ao card


        // Adicionar card ao contêiner
        cardsContainer.appendChild(cardElement);
    });
}

// Chamar a função para renderizar os cards
renderCards();