document.addEventListener("DOMContentLoaded", () => {
    const botaoIniciar = document.getElementById("botao-iniciar");
    const telaInicial = document.getElementById("tela-inicial");
    const telaSequencia = document.getElementById("tela-sequencia");
    const telaQuiz = document.getElementById("tela-quiz");
    const telaFinal = document.getElementById("tela-final");
    const telaContinuarEncerrar = document.getElementById("tela-continuar-encerrar");
    const botoesSequencia = document.getElementById("botoes-sequencia");
    const botaoMusica = document.getElementById("botao-musica");
    const opcoesDiv = document.getElementById("opcoes");
    const mensagemFinal = document.getElementById("mensagem-final");
    const barraProgresso = document.getElementById("barra-progresso");
    const tocandoMusicaTexto = document.getElementById("tocando-musica");
    const botaoContinuar = document.getElementById("botao-continuar");
    const botaoEncerrar = document.getElementById("botao-encerrar");
    const estatisticasFinal = document.getElementById("estatisticas-final");
    const barraProgressoContainer = document.getElementById("barra-progresso-container");
    const escolherOpcoes = document.getElementById("escolher-opcoes");
    const mensagemDiv = document.getElementById("mensagem-feedback");
    const mensagemTexto = document.getElementById("mensagem-texto");
    const botaoOk = document.getElementById("botao-ok");

    const REMOVER_OPCAO_CORRETA = 1; // Configuração para remover opções corretas após acertar
  
    const sequencias_original = {
        1: [
            { arquivo: "A Vida é uma festa - Trecho 1.mp3", titulo: "Coco (A Vida é uma festa)" },
            { arquivo: "Aladdin - Trecho 1.mp3", titulo: "Aladdin" },
            { arquivo: "Beauty and the Beast - Trecho 1.mp3", titulo: "Beauty and the Beast" },
            { arquivo: "ET the Extra Terrestrial - Trecho 1.mp3", titulo: "ET the Extra Terrestrial" },
            { arquivo: "Frozen - Trecho 1.mp3", titulo: "Frozen" }
        ],
        2: [
            { arquivo: "Avatar - Trecho 1.mp3", titulo: "Avatar" },
            { arquivo: "Avengers - Trecho 1.mp3", titulo: "Avengers" },
            { arquivo: "Black Panther - Trecho 1.mp3", titulo: "Black Panther" },
            { arquivo: "Dune -Trecho 1.mp3", titulo: "Dune" },
            { arquivo: "The Matrix - Trecho 3.mp3", titulo: "The Matrix" }
        ],
        3: [
            { arquivo: "Frozen - Trecho 2.mp3", titulo: "Frozen" },
            { arquivo: "Harry Potter - Trecho 1.mp3", titulo: "Harry Potter" },
            { arquivo: "Indiana Jones - Trecho 1.mp3", titulo: "Indiana Jones" },
            { arquivo: "Jurassic Park - Trecho 1.mp3", titulo: "Jurassic Park" },
            { arquivo: "Moana - Trecho 1.mp3", titulo: "Moana" }
        ],
        4: [
            { arquivo: "Dune -Trecho 3.mp3", titulo: "Dune" },
            { arquivo: "Top Gun - Trecho 2.mp3", titulo: "Top Gun" },
            { arquivo: "Gladiador - Trecho 1.mp3", titulo: "Gladiador" },
            { arquivo: "Inception - Trecho 1.mp3", titulo: "Inception" },
            { arquivo: "Interestellar - trecho 1.mp3", titulo: "Interestellar" }
        ],
        5: [
            { arquivo: "Rocky - Trecho 1.mp3", titulo: "Rocky" },
            { arquivo: "Star Wars - Trecho 1.mp3", titulo: "Star Wars" },
            { arquivo: "The Godfather - Trecho 1.mp3", titulo: "The Godfather" },
            { arquivo: "The Lord of the Rings - Trecho 1.mp3", titulo: "The Lord of the Rings" },
            { arquivo: "The Matrix - Trecho 1.mp3", titulo: "The Matrix" }
        ],
        6: [
            { arquivo: "Moana - Trecho 2.mp3", titulo: "Moana" },
            { arquivo: "Pirates of the Caribbean - Trecho 1.mp3", titulo: "Pirates of the Caribbean" },
            { arquivo: "Ratatouille - Trecho 1.mp3", titulo: "Ratatouille" },
            { arquivo: "The Lion King - Trecho 1.mp3", titulo: "The Lion King" },
            { arquivo: "The Little Mermaid - Trecho 1.mp3", titulo: "The Little Mermaid" }
        ],
        7: [
            { arquivo: "Star Wars - Trecho 3.mp3", titulo: "Star Wars" },
            { arquivo: "The Lord of the Rings - Trecho 2.mp3", titulo: "The Lord of the Rings" },
            { arquivo: "The Matrix - Trecho 2.mp3", titulo: "The Matrix" },
            { arquivo: "Top Gun - Trecho 1.mp3", titulo: "Top Gun" },
            { arquivo: "Wonder Woman - Trecho 1.mp3", titulo: "Wonder Woman" }
        ],
        8: [
            { arquivo: "The Lion King - Trecho 2.mp3", titulo: "The Lion King" },
            { arquivo: "Toy Story - Trecho 1.mp3", titulo: "Toy Story" },
            { arquivo: "Up - Trecho 1.mp3", titulo: "Up" },
			{ arquivo: "Shrek - Trecho 1.mp3", titulo: "Shrek" },
			{ arquivo: "Pirates of the Caribbean - Trecho 2.mp3", titulo: "Pirates of the Caribbean" }		
        ],
        9: [
            { arquivo: "Man of Steel - Trecho 1.mp3", titulo: "Man of Steel" },
            { arquivo: "Interestellar - trecho 2.mp3", titulo: "Interestellar" },
            { arquivo: "Mission Impossible - Trecho 1.mp3", titulo: "Mission Impossible" },
            { arquivo: "Nothing Hill - Trecho 1.mp3", titulo: "Nothing Hill" },
			{ arquivo: "Dirty Dancing - Trecho 3.mp3", titulo: "Dirty Dancing" }           
        ],
        10: [
            { arquivo: "A Vida é uma festa - Trecho 2.mp3", titulo: "Coco (A Vida é uma festa)" },
            { arquivo: "Aladdin - Trecho 2.mp3", titulo: "Aladdin" },
            { arquivo: "Avatar - Trecho 2.mp3", titulo: "Avatar" },
            { arquivo: "Avengers - Trecho 2.mp3", titulo: "Avengers" },
            { arquivo: "Inception - Trecho 2.mp3", titulo: "Inception" }            
        ],
        11: [
            { arquivo: "Avengers - Trecho 3.mp3", titulo: "Avengers" },
            { arquivo: "Black Panther - Trecho 2.mp3", titulo: "Black Panther" },
            { arquivo: "Gladiador - Trecho 3.mp3", titulo: "Gladiador" },
            { arquivo: "Man of Steel - Trecho 2.mp3", titulo: "Man of Steel" },              
            { arquivo: "Dune -Trecho 2.mp3", titulo: "Dune" }
        ],
        12: [
            { arquivo: "Moana - Trecho 3.mp3", titulo: "Moana" },
            { arquivo: "Frozen - Trecho 3.mp3", titulo: "Frozen" },
            { arquivo: "Gladiador - Trecho 2.mp3", titulo: "Gladiador" },
            { arquivo: "Avengers - Trecho 4.mp3", titulo: "Avengers" },
            { arquivo: "Aladdin - Trecho 3.mp3", titulo: "Aladdin" }
        ],
        13: [
            { arquivo: "Black Panther - Trecho 3.mp3", titulo: "Black Panther" },
            { arquivo: "Interestellar - trecho 3.mp3", titulo: "Interestellar" },
            { arquivo: "Mission Impossible - Trecho 2.mp3", titulo: "Mission Impossible" },
            { arquivo: "Dune -Trecho 4.mp3", titulo: "Dune" },            
            { arquivo: "Star Wars - Trecho 2.mp3", titulo: "Star Wars" }
        ],
        14: [
            { arquivo: "Ghost - Trecho 1.mp3", titulo: "Ghost" },
            { arquivo: "Bodyguard - Trecho 1.mp3", titulo: "Bodyguard" },
            { arquivo: "Saturday Night Fever - Trecho 1.mp3", titulo: "Saturday Night Fever" },
            { arquivo: "Pulp Fiction - Trecho 1.mp3", titulo: "Pulp Fiction" },            
            { arquivo: "Rocky - Trecho 2.mp3", titulo: "Rocky" }
        ],
        15: [
            { arquivo: "Dirty Dancing - Trecho 4.mp3", titulo: "Dirty Dancing" },
            { arquivo: "Greese - Trecho 1.mp3", titulo: "Greese" },
            { arquivo: "Pretty Woman - Trecho 1.mp3", titulo: "Pretty Woman" },
            { arquivo: "2001 space odyssey - Trecho 1.mp3", titulo: "2001 space odyssey" },            
            { arquivo: "Ghost - Trecho 2.mp3", titulo: "Ghost" }
        ]
    };
    
    // Gera uma ordem fixa aleatória para reorganização
    function gerarOrdemAleatoria(tamanho) {
        const ordem = Array.from({ length: tamanho }, (_, index) => index); // [0, 1, 2, ..., tamanho-1]
        for (let i = ordem.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [ordem[i], ordem[j]] = [ordem[j], ordem[i]]; // Embaralha os índices
        }
        return ordem;
    }

    
    // Criar o novo objeto `sequencias` baseado na ordem fixa
    // Função para inicializar as sequências
    function inicializarSequencias() {
        // Gera a ordem fixa dinamicamente com base no tamanho da sequência original
        const ordemFixa = gerarOrdemAleatoria(5); // Altere 5 para o número de itens por sequência
        sequencias = Object.keys(sequencias_original).reduce((result, key) => {
            const originalSequencia = sequencias_original[key];
            result[key] = ordemFixa.map(index => originalSequencia[index]);
            return result;
        }, {});
    }

    // Inicializa as sequências ao carregar o jogo
    inicializarSequencias();
    
    // Log para verificar
    console.log("Sequências original:", sequencias_original);
    console.log("Sequências reordenadas:", sequencias);
    
    
    let sequenciaAtual = null;
    let opcoesDisponiveis = [];
    let musicaAtualIndex = 0;
    let pontuacao = 0;
    let sequenciasJogadas = []; // Controle das sequências jogadas

    // Estatísticas acumuladas
    const estatisticas = {};

    botaoIniciar.addEventListener("click", () => {
        telaInicial.style.display = "none";
        telaSequencia.style.display = "block";

        carregarBotoesSequencia();
    });

    function carregarBotoesSequencia() {
        botoesSequencia.innerHTML = ""; // Limpa o contêiner antes de recriar os botões

        Object.keys(sequencias).forEach((sequencia) => {
            const button = document.createElement("button");
            button.textContent = `Sequência ${sequencia}`;
            button.id = `sequencia-${sequencia}`;
            button.disabled = sequenciasJogadas.includes(sequencia); // Desabilita se já foi jogada
            if (button.disabled) {
                button.textContent += " (Jogada)";              
            }

            button.addEventListener("click", () => iniciarSequencia(sequencia));
            botoesSequencia.appendChild(button);

            // Inicializa estatísticas para cada sequência
            if (!estatisticas[sequencia]) {
                estatisticas[sequencia] = { tentativas: 0, acertos: 0 };
            }
        });
    }

    function iniciarSequencia(sequenciaId) {
        telaSequencia.style.display = "none";
        telaQuiz.style.display = "block";
        escolherOpcoes.style.display = "none";

        sequenciaAtual = sequenciaId;
        opcoesDisponiveis = [...sequencias[sequenciaId]];
        musicaAtualIndex = 0;
        pontuacao = 0;

        carregarBotaoMusica();
    }

    function exibirMensagemFeedback(mensagem, callback) {
        mensagemTexto.textContent = mensagem; // Define o texto da mensagem
        mensagemDiv.style.display = "block"; // Exibe a mensagem

        botaoOk.onclick = () => {
            mensagemDiv.style.display = "none"; // Esconde a mensagem
            if (callback) callback(); // Executa o callback, se definido
        };
    }

    function carregarBotaoMusica() {
        botaoMusica.textContent = `Tocar trilha ${musicaAtualIndex + 1}`;
        botaoMusica.style.display = "block";
        barraProgressoContainer.style.display = "none";
        botaoMusica.onclick = () => tocarMusica();
    }

    function tocarMusica() {
        const musica = sequencias[sequenciaAtual][musicaAtualIndex];
        botaoMusica.style.display = "none";
        barraProgressoContainer.style.display = "block";
        tocandoMusicaTexto.style.display = "block";
        tocandoMusicaTexto.textContent = `🎵 Tocando trilha ${musicaAtualIndex + 1}`;
    
        const audio = new Audio(`Trilha de filmes/Trechos principais/${encodeURIComponent(musica.arquivo)}`);
        audio.ontimeupdate = () => {
            atualizarBarraProgresso(audio.currentTime, audio.duration);
        };
    
        audio.onended = () => {
            atualizarBarraProgresso(0, 0);
            exibirOpcoes(musica.titulo);
        };
    
        // Criar o botão "Já tenho meu palpite!!!"
        const botaoPalpite = document.createElement("button");
        botaoPalpite.textContent = "Já tenho meu palpite!!!";
        botaoPalpite.id = "botao-palpite";
        botaoPalpite.style.display = "block";
        botaoPalpite.style.margin = "20px auto";
        botaoPalpite.onclick = () => {
            // Forçar o fim da música e mostrar as opções
            audio.pause();
            audio.currentTime = audio.duration; // Avança para o final
            exibirOpcoes(musica.titulo);
    
            // Remove o botão após ser clicado
            botaoPalpite.remove();
        };
    
        // Adicionar o botão ao DOM, próximo à barra de progresso
        barraProgressoContainer.parentNode.appendChild(botaoPalpite);
    
        audio.play();
    }
    

    function atualizarBarraProgresso(tempoAtual, duracao) {
        const progresso = duracao ? (tempoAtual / duracao) * 100 : 0;
        barraProgresso.style.width = `${progresso}%`;
    }

    function embaralhar(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function exibirOpcoes(respostaCorreta) {
        tocandoMusicaTexto.style.display = "none";
        barraProgressoContainer.style.display = "none";
        escolherOpcoes.style.display = "block";
        opcoesDiv.innerHTML = "";

        // Remove o botão "Já tenho meu palpite!!!" se existir
        const botaoPalpite = document.getElementById("botao-palpite");
        if (botaoPalpite) {
             botaoPalpite.remove(); // Remove o botão do DOM
        }

        embaralhar(opcoesDisponiveis);

        opcoesDisponiveis.forEach((musica) => {
            const button = document.createElement("button");
            button.textContent = musica.titulo;
            button.addEventListener("click", () => verificarResposta(musica.titulo, respostaCorreta));
            opcoesDiv.appendChild(button);
        });
    }

    function verificarResposta(opcao, respostaCorreta) {
        estatisticas[sequenciaAtual].tentativas++;
        if (opcao === respostaCorreta) {
            pontuacao++;
            estatisticas[sequenciaAtual].acertos++;

            exibirMensagemFeedback("Acertou! 😊", () => {
                if (REMOVER_OPCAO_CORRETA) {
                    opcoesDisponiveis = opcoesDisponiveis.filter((musica) => musica.titulo !== respostaCorreta);
                }
                opcoesDiv.innerHTML = "";
                avancarParaProximaMusica(); // Avança para a próxima música
            });
        } else {
            exibirMensagemFeedback("Errou! 😢", () => {
                opcoesDiv.innerHTML = "";
                avancarParaProximaMusica(); // Avança para a próxima música
            });
        }
    }

    function avancarParaProximaMusica() {
        escolherOpcoes.style.display = "none";
        musicaAtualIndex++;
        if (musicaAtualIndex < sequencias[sequenciaAtual].length) {
            carregarBotaoMusica();
        } else {
            finalizarQuiz();
        }
    }

    function finalizarQuiz() {
        telaQuiz.style.display = "none";

        if (!sequenciasJogadas.includes(sequenciaAtual)) {
            sequenciasJogadas.push(sequenciaAtual); // Marca a sequência como jogada
        }

        const sequenciasRestantes = Object.keys(sequencias).length > sequenciasJogadas.length;

        if (sequenciasRestantes) {
            botaoContinuar.style.display = "inline-block";
        } else {
            botaoContinuar.style.display = "none";
        }

        telaContinuarEncerrar.style.display = "block";
    }

    botaoContinuar.addEventListener("click", () => {
        telaContinuarEncerrar.style.display = "none";
        telaSequencia.style.display = "block";
        carregarBotoesSequencia(); // Atualiza os botões
    });

    botaoEncerrar.addEventListener("click", () => {
        mostrarEstatisticas();
    });

    function mostrarEstatisticas() {
        telaContinuarEncerrar.style.display = "none";
        telaFinal.style.display = "block";
    
        let totalTentativas = 0;
        let totalAcertos = 0;
    
        estatisticasFinal.innerHTML = "<h3>Estatísticas por sequência:</h3>";
    
        // Exibe apenas estatísticas das sequências jogadas
        sequenciasJogadas.forEach((sequencia) => {
            const { tentativas, acertos } = estatisticas[sequencia];
            totalTentativas += tentativas;
            totalAcertos += acertos;
    
            const percentual = tentativas > 0 ? ((acertos / tentativas) * 100).toFixed(2) : 0;
            estatisticasFinal.innerHTML += `<p>Sequência ${sequencia}: ${percentual}% de acertos (${acertos}/${tentativas})</p>`;
        });
    
        const totalPercentual = totalTentativas > 0 ? ((totalAcertos / totalTentativas) * 100).toFixed(2) : 0;
        estatisticasFinal.innerHTML += `<h3>Total: ${totalPercentual}% de acertos (${totalAcertos}/${totalTentativas})</h3>`;
    }
    

document.getElementById("botaoReiniciar").addEventListener("click", () => {
    // Reseta todas as variáveis globais
    sequenciaAtual = null;
    opcoesDisponiveis = [];
    musicaAtualIndex = 0;
    pontuacao = 0;
    sequenciasJogadas = []; // Reseta o controle das sequências jogadas

    // Reseta as estatísticas
    Object.keys(estatisticas).forEach((sequencia) => {
        estatisticas[sequencia].tentativas = 0;
        estatisticas[sequencia].acertos = 0;
    });

    inicializarSequencias();

    // Limpa os botões das sequências e recria
    carregarBotoesSequencia();

    // Remove o botão "Já tenho meu palpite!!!" se existir
    const botaoPalpite = document.getElementById("botao-palpite");
    if (botaoPalpite) {
        botaoPalpite.remove(); // Remove o botão do DOM
    }

    // Oculta todas as telas e volta para a tela inicial
    telaFinal.style.display = "none";
    telaContinuarEncerrar.style.display = "none";
    telaSequencia.style.display = "none";
    telaQuiz.style.display = "none";
    telaInicial.style.display = "block";

    // Limpa as opções e barra de progresso
    opcoesDiv.innerHTML = "";
    barraProgresso.style.width = "0%";
});

});
