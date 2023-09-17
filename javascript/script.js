function subscribe() {
    var input = document.getElementById('emailInput');
    var email = input.value;

        alert('Obrigado por se inscrever, ' + email + '! Você começará a receber nossas melhores ofertas em breve.');

    input.value = '';
}