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
 

const sadQuotes = [
    "Às vezes, as coisas dão errado antes de darem certo. Mantenha a fé.",
    "Acredite em si mesmo e em tudo o que você é. Saiba que há algo dentro de você que é maior que qualquer obstáculo.",
    "A dor que você sente hoje será a força que você sentirá amanhã.",
    "Depois da tempestade vem a calmaria. Dias melhores estão a caminho.",
    "Você é mais forte do que pensa e será mais feliz do que imagina.",
    "Cada dificuldade que você enfrenta é uma oportunidade para crescer e se tornar mais forte.",
    "Mesmo que hoje seja difícil, acredite que o amanhã trará novas oportunidades e alegrias.",
    "Nunca perca a esperança. Grandes coisas levam tempo.",
    "Não desista. As coisas boas estão por vir.",
    "Lembre-se: você já superou desafios antes, e pode superá-los novamente."
];

const nervousQuotes = [
    "Respire fundo. Tudo vai dar certo.",
    "A calma é a chave para lidar com qualquer situação.",
    "Lembre-se, você já superou muitos desafios antes.",
    "Mantenha a calma e siga em frente.",
    "Acredite na sua capacidade de superar qualquer obstáculo.",
    "Respire, você é mais forte do que pensa.",
    "Um passo de cada vez. Você consegue.",
    "A tranquilidade começa com uma respiração profunda.",
    "Você é capaz de lidar com isso. Confie em si mesmo.",
    "Nada dura para sempre, nem mesmo seus problemas.",
    "A coragem não é a ausência do medo, mas a conquista sobre ele.",
    "Você é mais forte do que qualquer desafio que enfrenta.",
    "Enfrente seus medos com calma e determinação.",
    "Você tem o controle sobre como responder a esta situação.",
    "Cada pequena vitória é um passo para a grande conquista.",
];

const wellQuotes = [
    "Continue assim! Sua energia positiva é contagiante.",
    "Mantenha essa vibração! O mundo precisa de mais pessoas como você.",
    "Aproveite cada momento, sua felicidade é inspiradora.",
    "Sua alegria ilumina o dia de todos ao seu redor.",
    "Felicidade é apreciar as pequenas coisas da vida. Continue valorizando esses momentos.",
    "Sua positividade é um exemplo para todos. Mantenha-se assim!",
    "A vida é bela quando se está bem. Continue aproveitando cada instante.",
    "Sua boa disposição é uma bênção. Que ela continue a crescer!",
    "Alegria compartilhada é alegria redobrada. Espalhe sua felicidade!",
    "É maravilhoso ver você assim! Que essa energia boa te acompanhe sempre.",
    "Sua serenidade e felicidade são inspiradoras. Mantenha-se nessa vibração.",
    "Aproveite o presente. Sua felicidade é a melhor dádiva.",
    "Continue brilhando e espalhando luz. Sua felicidade é um presente para todos nós.",
    "Sua paz interior é visível. Continue cultivando esse sentimento maravilhoso.",
    "A gratidão e a alegria que você sente tornam o mundo um lugar melhor."
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

triste.addEventListener('click', function() {
    // Altera o texto do <h1>
    adviceIdElement.textContent = "Estamos aqui para você! Aqui está uma frase para elevar seu espírito.";



    setTimeout(function() {
        // Seleciona aleatoriamente uma frase do array
        const randomQuote = sadQuotes[Math.floor(Math.random() * happyQuotes.length)];
        // Altera o texto do elemento <p> com a classe 'advice-text'
        adviceTextElement.textContent = randomQuote;
    }, 2000); // 2000 milissegundos (2 segundos)
});

nervoso.addEventListener('click', function() {
    // Altera o texto do <h1>
    adviceIdElement.textContent = "Respire fundo, estamos com você! Aqui está uma mensagem para tranquilizar sua mente.";



    setTimeout(function() {
        // Seleciona aleatoriamente uma frase do array
        const randomQuote = nervousQuotes[Math.floor(Math.random() * happyQuotes.length)];
        // Altera o texto do elemento <p> com a classe 'advice-text'
        adviceTextElement.textContent = randomQuote;
    }, 2000); // 2000 milissegundos (2 segundos)
});


bem.addEventListener('click', function() {
    // Altera o texto do <h1>
    adviceIdElement.textContent = "Sua positividade é contagiante! Aqui está uma mensagem para manter essa energia.";



    setTimeout(function() {
        // Seleciona aleatoriamente uma frase do array
        const randomQuote = wellQuotesQuotes[Math.floor(Math.random() * happyQuotes.length)];
        // Altera o texto do elemento <p> com a classe 'advice-text'
        adviceTextElement.textContent = randomQuote;
    }, 2000); // 2000 milissegundos (2 segundos)
});
