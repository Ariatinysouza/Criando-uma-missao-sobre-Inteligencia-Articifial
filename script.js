const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: [
                "No início ficou com medo do que a tecnologia pode fazer.",
                "Achou assustador pensar na velocidade na qual a tecnologia está avançando."
            ]
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: [
                "Quis saber como usar IA no seu dia a dia.",
                "pensou que essa nova tecnologia pode ajudar em várias tarefas do seu dia a dia."
                ]
            }

        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: 
                    ["Conseguiu utilizar a IA para buscar informações úteis",
                        "Percebeu que a IA pode ajudar a encontrar informações úteis na internet.",
                        "Percebeu que a IA consegue explicar termos complicados de forma simplificada."
                    ]
                      
            },
            {
                texto: "Escrever o trabalho com base nas conversas que teve.",
                afirmacao: 
                    ["Sentiu mais facilidade em utilizar seus próprios recursos",
                        "Achou que era muito mais fácil procurar por respostas",
                        "Sentiu um pouco de medo de quais dados utilizar", 
                    ]
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho.",
        alternativas: [
            {
                texto: "Me preocupo com as pessoas que perderam o emprego.",
                afirmacao: 
                   ["Vem impulsionando a inovação na área de IA.",
                       "Participa ativamente do desenvolvimento de solução."]
            },
            {
                texto: "Defendem a ideia que a IA pode criar novas oportunidades.",
                afirmacao: 
                    ["Sua preocupação com as pessoas motivou a criar um grupo.",
                        "Criou grupos de ética voltado para a IA."]
            }       
       
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: [
                    "Notou também que muitas pessoas ainda não sabem utilizar.",
                    "Ainda acha que os meios de desenho tradicionais são mais legal."   ]
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: ["Acelerou o processo de criação.",
                    "Compartilhou artes em redes sociais.",
                    "Percebeu que muitas pessoas têm dificuldades." ]
            }
      
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: [
                    "Tem dificuldades em expressar opiniões.",
                    "Infelizmente passou a utilizar IA." ]
            }
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz." 
            }
       
       
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

function aleatorio (lista){
    const posicao = Math.floor(Math.random()* Lista.length);
    return lista[posicao];
}

mostraPergunta();
