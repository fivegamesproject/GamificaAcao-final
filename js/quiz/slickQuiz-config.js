//Setup your quiz text and questions here

//NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Nome do Quiz",
        "main":    "<p>Ao responder não poderá voltar na questão, só conseguirá ir para a próxima questão se responder a atual</p>",
        "results": "Siga para a  <a href='/views/minigame.html'>próxima etapa!</a>",
    },
    "questions": [
        { 
            "q": "Se todos os veículos são azuis e algum azul é um carro, então algum veículo é um carro?",
            "a": [
                {"option": "Sim",      "correct": true},
                {"option": "Não",     "correct": false}
            ],
        },
        { 
            "q": "Se x + 2 = 5, qual é o valor de x?",
            "a": [
                {"option": "2",      "correct": false},
                {"option": "3",     "correct": true},
                {"option": "7",      "correct": false},
                {"option": "5",     "correct": false}
            ],

        },
        {
            "q": "Qual é a média de uma série de números onde a soma é 150 e há 6 números na série?",
            "a": [
                {"option": "25",      "correct": true},
                {"option": "30",     "correct": false},
                {"option": "24",      "correct": false},
                {"option": "28",     "correct": false}
            ],
        },
        {
            "q": "Qual é o produto de 6 por 7?",
            "a": [
                {"option": "42",      "correct": true},
                {"option": "48",     "correct": false},
                {"option": "36",      "correct": false},
                {"option": "54",     "correct": false}
            ],
        },
        {
            "q": "Qual é a área de um círculo com raio de 4cm? (Use π = 3,14)",
            "a": [
                {"option": "50,24 cm²",      "correct": true},
                {"option": "12,56 cm²",     "correct": false},
                {"option": "25,12 cm²",      "correct": false},
                {"option": "16 cm²",     "correct": false}
            ],
        },
        {
            "q": "Qual palavra está escrita incorretamente?",
            "a": [
                {"option": "Excessão",      "correct": true},
                {"option": "Exceção",     "correct": false},
                {"option": "Ascenção",      "correct": false},
                {"option": "Descenso",     "correct": false}
            ],

        },
        {
            "q": "Em um texto sobre economia, a palavra 'inflação' sugere:",
            "a": [
                {"option": "Crescimento econômico",      "correct": false},
                {"option": "Decréscimo nos preços",     "correct": false},
                {"option": "Aumento generalizado dos preços",      "correct": true},
                {"option": "Estabilidade financeira",     "correct": false}
            ],

        },
        {
            "q": "Qual figura de linguagem está presente em 'O céu chora suas mágoas'?",
            "a": [
                {"option": "Metáfora",      "correct": false},
                {"option": "Prosopopeia",     "correct": true},
                {"option": "Onomatopeia",      "correct": false},
                {"option": "Hipérbole",     "correct": false}
            ],
        },
        {
            "q": "Qual é a forma correta de pluralizar a palavra 'mal'?",
            "a": [
                {"option": "Maus",      "correct": false},
                {"option": "Mals",     "correct": false},
                {"option": "Mais",      "correct": false},
                {"option": "Males",     "correct": true}
            ],
        },
        {
            "q": "Qual é o sinônimo de 'rápido'?",
            "a": [
                {"option": "Lento",      "correct": false},
                {"option": "Veloz",     "correct": true},
                {"option": "Devagar",      "correct": false},
                {"option": "Moroso",     "correct": false}
            ],

        },
        {
            "q": "O que significa 'apple' em português?",
            "a": [
                {"option": "Banana",      "correct": false},
                {"option": "Maçã",     "correct": true},
                {"option": "Pera",      "correct": false},
                {"option": "Uva",     "correct": false}
            ],

        },
        {
            "q": "Qual é o passado de 'go'?",
            "a": [
                {"option": "Gone",      "correct": false},
                {"option": "Went",     "correct": true},
                {"option": "Goed",      "correct": false},
                {"option": "Goes",     "correct": false}
            ],

        },
        {
            "q": "Se 'John can play the guitar', o que John é capaz de fazer?",
            "a": [
                {"option": "Cantar",      "correct": false},
                {"option": "Dançar",     "correct": false},
                {"option": "Tocar guitarra",      "correct": true},
                {"option": "Jogar futebol",     "correct": false}
            ],

        },
        {
            "q": "O que significa 'look up to'?",
            "a": [
                {"option": "Admirar",      "correct": true},
                {"option": "Procurar",     "correct": false},
                {"option": "Subir",      "correct": false},
                {"option": "Olhar para cima",     "correct": false}
            ],

        },
        {
            "q": "Como se diz 'obrigado' em inglês?",
            "a": [
                {"option": "Hello",      "correct": false},
                {"option": "Please",     "correct": false},
                {"option": "Thank you",   "correct": true},
                {"option": "Goodbye",     "correct": false}
            ],

        },
    ]

    
};
