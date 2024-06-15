const dado = document.getElementById('dado');

const adviceIdElement = document.querySelector('.advice-id');

const adviceTextElement = document.querySelector('.advice-text')


const happyQuotes = [
    "A felicidade não é algo pronto. Ela vem de suas próprias ações.",
    "A verdadeira felicidade custa pouco; se é cara, não é de boa qualidade.",
    "Ser feliz sem motivo é a mais autêntica forma de felicidade.",
    "A felicidade não se resume na ausência de problemas, mas sim na sua capacidade de lidar com eles.",
    "A felicidade é a única coisa que podemos dar sem possuir.",
];
 





dado.addEventListener('click', function() {
    // Altera o texto do <h1>
    adviceIdElement.textContent = 'Estamos felizes por saber como você está se sentindo! Aqui está uma frase que celebra sua felicidade.';

    setTimeout(function() {
        // Seleciona aleatoriamente uma frase do array
        const randomQuote = happyQuotes[Math.floor(Math.random() * happyQuotes.length)];
        // Altera o texto do elemento <p> com a classe 'advice-text'
        adviceTextElement.textContent = randomQuote;
    }, 2000); // 2000 milissegundos (2 segundos)
});

