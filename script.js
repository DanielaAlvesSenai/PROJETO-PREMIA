
// ===================================================== 

// ELEMENTOS 

// ===================================================== 

 

const microfone = 

    document.getElementById("microfone"); 
const botaoMensagem = 

    document.getElementById("mensagem"); 

 

const chatbox = 

    document.getElementById("chatbox"); 

 

const textoUsuario = 

    document.getElementById("textoUsuario"); 

 

const textoResposta = 

    document.getElementById("textoResposta"); 

 

const respostaAudio = 

    document.getElementById("respostaAudio"); 

 

const chatInput = 

    document.getElementById("chatInput"); 

 

const sendBtn = 

    document.getElementById("sendBtn"); 

 

const mensagens = 

    document.getElementById("mensagens"); 

 

 

 

// ===================================================== 

// DATA E HORA REAL 

// ===================================================== 

 

function atualizarDataHora() { 

 

    const agora = new Date(); 

 

 

    const dia = 

        String( 

            agora.getDate() 

        ).padStart(2, "0"); 

 

 

    const mes = 

        String( 

            agora.getMonth() + 1 

        ).padStart(2, "0"); 

 

 

    const ano = 

        agora.getFullYear(); 

 

 

    const horas = 

        String( 

            agora.getHours() 

        ).padStart(2, "0"); 

 

 

    const minutos = 

        String( 

            agora.getMinutes() 

        ).padStart(2, "0"); 

 

 

    const segundos = 

        String( 

            agora.getSeconds() 

        ).padStart(2, "0"); 

 

 

    document.getElementById("hora") 

        .textContent = 

        `${horas}:${minutos}:${segundos}`; 

 

 

    document.getElementById("data") 

        .textContent = 

        `${dia}/${mes}/${ano}`; 

 

} 

 

 

atualizarDataHora(); 

 

setInterval( 

    atualizarDataHora, 

    1000 

); 

 

 

 

// ===================================================== 

// ABRIR / FECHAR CHAT 

// ===================================================== 

 

botaoMensagem.addEventListener( 

    "click", 

    function() { 

 

        chatbox.classList.toggle( 

            "aberto" 

        ); 

 

    } 

); 

 

 

 

// ===================================================== 

// ADICIONAR MENSAGEM AO CHAT 

// ===================================================== 

 

function adicionarMensagem( 

    texto, 

    tipo 

) { 

 

    const mensagem = 

        document.createElement("div"); 

 

 

    mensagem.classList.add( 

        tipo 

    ); 

 

 

    mensagem.textContent = 

        texto; 

 

 

    mensagens.appendChild( 

        mensagem 

    ); 

 

 

    mensagens.scrollTop = 

        mensagens.scrollHeight; 

 

} 

 

 

 

// ===================================================== 

// ENTENDER PERGUNTA 

// ===================================================== 

 

function entenderPergunta( 

    texto 

) { 

 

 

    const pergunta = 

        texto 

            .toLowerCase() 

            .normalize("NFD") 

            .replace( 

                /[\u0300-\u036f]/g, 

                "" 

            ); 

 

 

 

    // ================================================= 

    // SAUDAÇÃO 

    // ================================================= 

 

    if ( 

 

        pergunta.includes("oi") || 

        pergunta.includes("ola") || 

        pergunta.includes("bom dia") || 

        pergunta.includes("boa tarde") || 

        pergunta.includes("boa noite") 

 

    ) { 

 

        return ( 

            "Olá! Eu sou a P.R.E.M.I.A. " + 

            "Estou pronta para ajudar." 

        ); 

 

    } 

 

 

 

    // ================================================= 

    // TEMPERATURA 

    // ================================================= 

 

    if ( 

 

        pergunta.includes("temperatura") || 

        pergunta.includes("graus") || 

        pergunta.includes("quente") || 

        pergunta.includes("frio") || 

        pergunta.includes("ambiente") 

 

    ) { 

 

        return ( 

            "A temperatura atual do ambiente " + 

            "industrial é de 24,7 °C. " + 

            "A condição do ambiente está estável." 

        ); 

 

    } 

 

 

 

    // ================================================= 

    // UMIDADE 

    // ================================================= 

 

    if ( 

 

        pergunta.includes("umidade") || 

        pergunta.includes("umido") || 

        pergunta.includes("seco") 

 

    ) { 

 

        return ( 

            "A umidade atual do ambiente " + 

            "industrial é de 61%." 

        ); 

 

    } 

 

 

 

    // ================================================= 

    // MÁQUINAS 

    // ================================================= 

 

    if ( 

 

        pergunta.includes("maquina") || 

        pergunta.includes("maquinas") || 

        pergunta.includes("equipamento") || 

        pergunta.includes("equipamentos") || 

        pergunta.includes("producao") || 

        pergunta.includes("funcionando") 

 

    ) { 

 

        return ( 

            "Atualmente existem 14 máquinas ativas, " + 

            "2 máquinas em manutenção e 1 máquina " + 

            "em estado de alerta. " + 

            "11 máquinas estão operando normalmente." 

        ); 

 

    } 

 

 

 

    // ================================================= 

    // MANUTENÇÃO 

    // ================================================= 

 

    if ( 

 

        pergunta.includes("manutencao") || 

        pergunta.includes("conserto") || 

        pergunta.includes("reparo") 

 

    ) { 

 

        return ( 

            "Existem 2 máquinas em manutenção " + 

            "no momento e 1 máquina apresenta alerta." 

        ); 

 

    } 

 

 

 

    // ================================================= 

    // ESTOQUE 

    // ================================================= 

 

    if ( 

 

        pergunta.includes("estoque") || 

        pergunta.includes("materia prima") || 

        pergunta.includes("materia-prima") || 

        pergunta.includes("abastecimento") || 

        pergunta.includes("produto") || 

        pergunta.includes("produtos") 

 

    ) { 

 

        return ( 

            "O estoque de matéria-prima está em 87%. " + 

            "Existem 2 itens em situação crítica. " + 

            "A previsão de duração é de 23 dias." 

        ); 

 

    } 

 

 

 

    // ================================================= 

    // SISTEMA 

    // ================================================= 

 

    if ( 

 

        pergunta.includes("status") || 

        pergunta.includes("sistema") || 

        pergunta.includes("operacional") || 

        pergunta.includes("cpu") || 

        pergunta.includes("processador") || 

        pergunta.includes("memoria") 

 

    ) { 

 

        return ( 

            "O sistema está operacional. " + 

            "A CPU está em 32%, a memória em 68% " + 

            "e a inteligência artificial está ativa." 

        ); 

 

    } 

 

 

 

    // ================================================= 

    // ARMAZENAMENTO 

    // ================================================= 

 

    if ( 

 

        pergunta.includes("armazenamento") || 

        pergunta.includes("espaco") || 

        pergunta.includes("disco") || 

        pergunta.includes("gb") 

 

    ) { 

 

        return ( 

            "O armazenamento utilizado atualmente " + 

            "é de 247 GB de um total de 500 GB." 

        ); 

 

    } 

 

 

 

    // ================================================= 

    // QUALIDADE DO AR 

    // ================================================= 

 

    if ( 

 

        pergunta.includes("qualidade do ar") || 

        pergunta.includes("poluicao") || 

        pergunta.includes("ar") 

 

    ) { 

 

        return ( 

            "A qualidade do ar está normal. " + 

            "Os sensores ambientais estão funcionando " + 

            "corretamente." 

        ); 

 

    } 

 

 

 

    // ================================================= 

    // RUÍDO 

    // ================================================= 

 

    if ( 

 

        pergunta.includes("ruido") || 

        pergunta.includes("barulho") || 

        pergunta.includes("decibel") || 

        pergunta.includes("decibeis") 

 

    ) { 

 

        return ( 

            "O ruído operacional atual é de 72 dB." 

        ); 

 

    } 

 

 

 

    // ================================================= 

    // SENSORES 

    // ================================================= 

 

    if ( 

 

        pergunta.includes("sensor") || 

        pergunta.includes("sensores") 

 

    ) { 

 

        return ( 

            "Existem 18 sensores conectados " + 

            "e todos estão funcionando normalmente." 

        ); 

 

    } 

 

 

 

    // ================================================= 

    // EFICIÊNCIA 

    // ================================================= 

 

    if ( 

 

        pergunta.includes("eficiencia") || 

        pergunta.includes("desempenho") || 

        pergunta.includes("produtividade") 

 

    ) { 

 

        return ( 

            "A eficiência média das máquinas " + 

            "está em 94,6%." 

        ); 

 

    } 

 

 

 

    // ================================================= 

    // AJUDA 

    // ================================================= 

 

    if ( 

 

        pergunta.includes("ajuda") || 

        pergunta.includes("comandos") || 

        pergunta.includes("o que voce pode fazer") 

 

    ) { 

 

        return ( 

            "Posso consultar informações sobre " + 

            "temperatura, umidade, máquinas, " + 

            "manutenção, estoque, sistema, sensores, " + 

            "qualidade do ar, ruído e eficiência." 

        ); 

 

    } 

 

 

 

    // ================================================= 

    // NÃO RECONHECIDO 

    // ================================================= 

 

    return ( 

        "Entendi o que você disse, mas ainda não " + 

        "tenho uma informação cadastrada para " + 

        "responder essa pergunta." 

    ); 

 

} 

 

 

 

// ===================================================== 

// ENVIAR MENSAGEM PELO CHAT 

// ===================================================== 

 

function enviarMensagem() { 

 

 

    const texto = 

        chatInput.value.trim(); 

 

 

    if ( 

        texto === "" 

    ) { 

 

        return; 

 

    } 

 

 

    // mensagem do usuário 

 

    adicionarMensagem( 

        texto, 

        "mensagem-usuario" 

    ); 

 

 

    chatInput.value = ""; 

 

 

    // resposta 

 

    setTimeout( 

        function() { 

 

            const resposta = 

                entenderPergunta( 

                    texto 

                ); 

 

 

            adicionarMensagem( 

                resposta, 

                "mensagem-bot" 

            ); 

 

        }, 

        400 

    ); 

 

} 

 

 

 

sendBtn.addEventListener( 

    "click", 

    enviarMensagem 

); 

 

 

 

chatInput.addEventListener( 

    "keydown", 

    function(evento) { 

 

        if ( 

            evento.key === "Enter" 

        ) { 

 

            enviarMensagem(); 

 

        } 

 

    } 

); 

 

 

 

// ===================================================== 

// RECONHECIMENTO DE VOZ 

// ===================================================== 

 

const Reconhecimento = 

    window.SpeechRecognition || 

    window.webkitSpeechRecognition; 

 

 

 

if (!Reconhecimento) { 

 

 

    textoResposta.textContent = 

        "Seu navegador não suporta reconhecimento de voz. Use o Google Chrome ou Microsoft Edge."; 

 

 

    respostaAudio.classList.add( 

        "mostrar" 

    ); 

 

 

} else { 

 

 

    const reconhecimento = 

        new Reconhecimento(); 

 

 

    reconhecimento.lang = 

        "pt-BR"; 

 

 

    reconhecimento.continuous = 

        false; 

 

 

    reconhecimento.interimResults = 

        false; 

 

 

 

    // ================================================= 

    // COMEÇOU A ESCUTAR 

    // ================================================= 

 

    reconhecimento.onstart = 

        function() { 

 

 

            microfone.classList.add( 

                "ouvindo" 

            ); 

 

 

            respostaAudio.classList.add( 

                "mostrar" 

            ); 

 

 

            textoUsuario.textContent = 

                "Estou ouvindo..."; 

 

 

            textoResposta.textContent = 

                "Fale seu comando."; 

 

        }; 

 

 

 

    // ================================================= 

    // RECEBEU A FALA 

    // ================================================= 

 

    reconhecimento.onresult = 

        function(evento) { 

 

 

            const texto = 

                evento 

                    .results[0][0] 

                    .transcript; 

 

 

            // MOSTRA O QUE O USUÁRIO FALOU 

 

            textoUsuario.textContent = 

                texto; 

 

 

            // IDENTIFICA O COMANDO 

 

            processarComando( 

                texto 

            ); 

 

        }; 

 

 

 

    // ================================================= 

    // TERMINOU DE OUVIR 

    // ================================================= 

 

    reconhecimento.onend = 

        function() { 

 

            microfone.classList.remove( 

                "ouvindo" 

            ); 

 

        }; 

 

 

 

    // ================================================= 

    // ERRO 

    // ================================================= 

 

    reconhecimento.onerror = 

        function(evento) { 

 

 

            microfone.classList.remove( 

                "ouvindo" 

            ); 

 

 

            respostaAudio.classList.add( 

                "mostrar" 

            ); 

 

 

            if ( 

                evento.error === 

                "not-allowed" 

            ) { 

 

                textoResposta.textContent = 

                    "O acesso ao microfone foi bloqueado. Permita o uso do microfone no navegador."; 

 

            } else { 

 

                textoResposta.textContent = 

                    "Não consegui entender sua fala. Tente novamente."; 

 

            } 

 

        }; 

 

 

 

    // ================================================= 

    // BOTÃO DO MICROFONE 

    // ================================================= 

 

    microfone.addEventListener( 

        "click", 

        function() { 

 

 

            try { 

 

                reconhecimento.start(); 

 

            } catch (erro) { 

 

                console.log( 

                    "Reconhecimento já iniciado." 

                ); 

 

            } 

 

        } 

    ); 

 

} 

 

 

 

// ===================================================== 

// PROCESSAR COMANDO DE VOZ 

// ===================================================== 

 

function processarComando( 

    texto 

) { 

 

 

    const comando = 

        texto 

            .toLowerCase() 

            .normalize("NFD") 

            .replace( 

                /[\u0300-\u036f]/g, 

                "" 

            ); 

 

 

 

    // ================================================= 

    // ABRIR CHAT POR VOZ 

    // ================================================= 

 

    if ( 

 

        comando.includes("abrir chat") || 

        comando.includes("abrir conversa") || 

        comando.includes("abrir mensagem") || 

        comando.includes("mostrar chat") 

 

    ) { 

 

 

        chatbox.classList.add( 

            "aberto" 

        ); 

 

 

        falar( 

            "Pronto. A conversa foi aberta." 

        ); 

 

 

        return; 

 

    } 

 

 

 

    // ================================================= 

    // FECHAR CHAT POR VOZ 

    // ================================================= 

 

    if ( 

 

        comando.includes("fechar chat") || 

        comando.includes("fechar conversa") || 

        comando.includes("fechar mensagem") || 

        comando.includes("esconder chat") 

 

    ) { 

 

 

        chatbox.classList.remove( 

            "aberto" 

        ); 

 

 

        falar( 

            "Pronto. A conversa foi fechada." 

        ); 

 

 

        return; 

 

    } 

 

 

 

    // ================================================= 

    // COMANDO NORMAL 

    // ================================================= 

 

    const resposta = 

        entenderPergunta( 

            texto 

        ); 

 

 

    falar( 

        resposta 

    ); 

 

} 

 

 

 

// ===================================================== 

// RESPOSTA FALADA 

// ===================================================== 

 

function falar(texto) { 

 

    respostaAudio.classList.add("mostrar"); 

 

    textoResposta.textContent = texto; 

 

    window.speechSynthesis.cancel(); 

 

    const voz = new SpeechSynthesisUtterance(texto); 

 

    voz.lang = "pt-BR"; 

    voz.rate = 0.95; 

    voz.pitch = 1.1; 

    voz.volume = 1; 

 

    let vozes = speechSynthesis.getVoices(); 

 

    for (let i = 0; i < vozes.length; i++) { 

 

        if ( 

            vozes[i].lang == "pt-BR" && 

            ( 

                vozes[i].name.toLowerCase().includes("maria") || 

                vozes[i].name.toLowerCase().includes("francisca") || 

                vozes[i].name.toLowerCase().includes("female") || 

                vozes[i].name.toLowerCase().includes("feminina") 

            ) 

        ) { 

 

            voz.voice = vozes[i]; 

 

            break; 

        } 

    } 

 

    voz.onstart = function() { 

        microfone.classList.add("ouvindo"); 

    }; 

 

    voz.onend = function() { 

        microfone.classList.remove("ouvindo"); 

    }; 

 

    window.speechSynthesis.speak(voz); 

} 

 

 

 

// ===================================================== 

// GRÁFICO DE BARRAS 

// ===================================================== 

 

function criarGraficoBarras() { 

 

 

    const canvas = 

        document.getElementById( 

            "barChart" 

        ); 

 

 

    if (!canvas) { 

 

        return; 

 

    } 

 

 

    const ctx = 

        canvas.getContext("2d"); 

 

 

    const largura = 

        canvas.clientWidth; 

 

 

    const altura = 

        canvas.clientHeight; 

 

 

    const dpr = 

        window.devicePixelRatio || 1; 

 

 

    canvas.width = 

        largura * dpr; 

 

 

    canvas.height = 

        altura * dpr; 

 

 

    ctx.scale( 

        dpr, 

        dpr 

    ); 

 

 

    const valores = [ 

 

        78, 

        60, 

        80, 

        30 

 

    ]; 

 

 

    const nomes = [ 

 

        "Vendas", 

        "Finanças", 

        "Insumos", 

        "RH" 

 

    ]; 

 

 

    const alturaGrafico = 

        altura - 45; 

 

 

    const larguraBarra = 

        Math.min( 

            55, 

            largura / 7 

        ); 

 

 

    const espaco = 

        ( 

            largura - 

            valores.length * 

            larguraBarra 

        ) / 

        ( 

            valores.length + 1 

        ); 

 

 

 

    valores.forEach( 

        function( 

            valor, 

            i 

        ) { 

 

 

            const x = 

                espaco + 

                i * 

                ( 

                    larguraBarra + 

                    espaco 

                ); 

 

 

            const alturaBarra = 

                ( 

                    valor / 

                    100 

                ) * 

                alturaGrafico; 

 

 

            const y = 

                altura - 

                35 - 

                alturaBarra; 

 

 

            ctx.fillStyle = 

                "#a6fbff"; 

 

 

            ctx.fillRect( 

                x, 

                y, 

                larguraBarra, 

                alturaBarra 

            ); 

 

 

            ctx.fillStyle = 

                "#eaffff"; 

 

 

            ctx.font = 

                "12px Arial"; 

 

 

            ctx.textAlign = 

                "center"; 

 

 

            ctx.fillText( 

                nomes[i], 

                x + 

                larguraBarra / 2, 

                altura - 12 

            ); 

 

        } 

    ); 

 

} 

 

 

 

// ===================================================== 

// GRÁFICO DE LINHAS 

// ===================================================== 

 

function criarGraficoLinhas() { 

 

 

    const canvas = 

        document.getElementById( 

            "lineChart" 

        ); 

 

 

    if (!canvas) { 

 

        return; 

 

    } 

 

 

    const ctx = 

        canvas.getContext("2d"); 

 

 

    const largura = 

        canvas.clientWidth; 

 

 

    const altura = 

        canvas.clientHeight; 

 

 

    const dpr = 

        window.devicePixelRatio || 1; 

 

 

    canvas.width = 

        largura * dpr; 

 

 

    canvas.height = 

        altura * dpr; 

 

 

    ctx.scale( 

        dpr, 

        dpr 

    ); 

 

 

 

    const dados = [ 

 

        [12, 14, 17, 18, 24], 

 

        [10, 12, 16, 17, 20], 

 

        [8, 9, 13, 15, 16] 

 

    ]; 

 

 

    const anos = [ 

 

        "2021", 

        "2022", 

        "2023", 

        "2024", 

        "2025" 

 

    ]; 

 

 

 

    const esquerda = 

        30; 

 

 

    const baixo = 

        35; 

 

 

    const maximo = 

        28; 

 

 

    const larguraGrafico = 

        largura - 55; 

 

 

    const alturaGrafico = 

        altura - 60; 

 

 

 

    dados.forEach( 

        function( 

            linha, 

            numero 

        ) { 

 

 

            ctx.beginPath(); 

 

 

            linha.forEach( 

                function( 

                    valor, 

                    i 

                ) { 

 

 

                    const x = 

                        esquerda + 

                        i * 

                        ( 

                            larguraGrafico / 

                            ( 

                                linha.length - 1 

                            ) 

                        ); 

 

 

                    const y = 

                        altura - 

                        baixo - 

                        ( 

                            valor / 

                            maximo 

                        ) * 

                        alturaGrafico; 

 

 

 

                    if ( 

                        i === 0 

                    ) { 

 

                        ctx.moveTo( 

                            x, 

                            y 

                        ); 

 

                    } else { 

 

                        ctx.lineTo( 

                            x, 

                            y 

                        ); 

 

                    } 

 

                } 

            ); 

 

 

            if ( 

                numero === 0 

            ) { 

 

                ctx.strokeStyle = 

                    "#2bbce8"; 

 

            } else if ( 

                numero === 1 

            ) { 

 

                ctx.strokeStyle = 

                    "#a6fbff"; 

 

            } else { 

 

                ctx.strokeStyle = 

                    "#555"; 

 

            } 

 

 

            ctx.lineWidth = 

                3; 

 

 

            ctx.stroke(); 

 

        } 

    ); 

 

 

 

    ctx.font = 

        "11px Arial"; 

 

 

    ctx.textAlign = 

        "center"; 

 

 

    anos.forEach( 

        function( 

            ano, 

            i 

        ) { 

 

 

            const x = 

                esquerda + 

                i * 

                ( 

                    larguraGrafico / 

                    ( 

                        anos.length - 1 

                    ) 

                ); 

 

 

            ctx.fillStyle = 

                "#eaffff"; 

 

 

            ctx.fillText( 

                ano, 

                x, 

                altura - 10 

            ); 

 

        } 

    ); 

 

} 

 

 

 

// ===================================================== 

// INICIAR GRÁFICOS 

// ===================================================== 

 

function desenharGraficos() { 

 

    criarGraficoBarras(); 

 

    criarGraficoLinhas(); 

 

} 

 

 

desenharGraficos(); 

 

 

window.addEventListener( 

    "resize", 

    desenharGraficos 

); 

 

speechSynthesis.onvoiceschanged = function() { 

    speechSynthesis.getVoices(); 

}; 

