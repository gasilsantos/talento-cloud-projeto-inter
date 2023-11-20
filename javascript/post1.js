
const cardData = [
    { 
        title: 'Teatro amazonas', 
        content: 'é um dos mais importantes teatros do Brasil e o principal cartão-postal da cidade de Manaus...',
        image: 'img/teatro-amazonas-divulg.jpg',
        buttonText: 'saiba mais',
        buttonLink: '#post1.html',
    },
    { 
        title: 'Cristo redento', 
        content: 'O monumento é parte de um santuário católico e a Arquidiocese do Rio de Janeiro...',
        image: 'img/cristo redento.jpg',
        buttonText: 'saiba mais',
        buttonLink: 'post1.html' // Substitua pela URL da sua outra página

    },
    { 
        title: 'Masp', 
        content: 'É conhecido pelo vão de mais de 70 metros que se estende sob quatro enormes pilares... ',
        image: 'img/masp-en-la-avenida-paulista (1).jpg',
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