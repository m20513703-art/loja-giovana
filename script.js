"use strict";

/* =========================================================
   GIOVANA MODAS
   SCRIPT.JS
========================================================= */

const WHATSAPP = "5519981123401";

const ENDERECO =
    "Rua Guanabara, nº 26, Divinolândia - SP";

const CHAVE_CARRINHO =
    "giovanaModasCarrinho";

const CHAVE_HISTORICO =
    "giovanaModasHistorico";


/* =========================================================
   PRODUTOS
========================================================= */

const produtos = [

    {
        id: 1,
        categoria: "Feminino",
        nome: "Blusa Feminina",
        preco: 49.90,
        tamanhos: ["PP", "P", "M", "G", "GG"]
    },

    {
        id: 2,
        categoria: "Feminino",
        nome: "Vestido Feminino",
        preco: 89.90,
        tamanhos: ["PP", "P", "M", "G", "GG"]
    },

    {
        id: 3,
        categoria: "Masculino",
        nome: "Camiseta Masculina",
        preco: 59.90,
        tamanhos: ["P", "M", "G", "GG"]
    },

    {
        id: 4,
        categoria: "Masculino",
        nome: "Camisa Masculina",
        preco: 79.90,
        tamanhos: ["P", "M", "G", "GG"]
    },

    {
        id: 5,
        categoria: "Infantil",
        nome: "Conjunto Infantil",
        preco: 69.90,
        tamanhos: ["2", "4", "6", "8", "10", "12", "14"]
    },

    {
        id: 6,
        categoria: "Infantil",
        nome: "Camiseta Infantil",
        preco: 39.90,
        tamanhos: ["2", "4", "6", "8", "10", "12", "14"]
    },

    {
        id: 7,
        categoria: "Calçados",
        nome: "Tênis Feminino",
        preco: 149.90,
        tamanhos: ["37", "38", "39", "40", "41", "42"]
    },

    {
        id: 8,
        categoria: "Calçados",
        nome: "Sandália Feminina",
        preco: 79.90,
        tamanhos: ["37", "38", "39", "40", "41", "42"]
    },

    {
        id: 9,
        categoria: "Calçados",
        nome: "Tênis Masculino",
        preco: 159.90,
        tamanhos: ["37", "38", "39", "40", "41", "42"]
    },

    {
        id: 10,
        categoria: "Calçados",
        nome: "Sapato Masculino",
        preco: 179.90,
        tamanhos: ["37", "38", "39", "40", "41", "42"]
    },

    {
        id: 11,
        categoria: "Calçados",
        nome: "Tênis Infantil",
        preco: 89.90,
        tamanhos: [
            "25","26","27","28","29","30",
            "31","32","33","34","35","36"
        ]
    },

    {
        id: 12,
        categoria: "Calçados",
        nome: "Sandália Infantil",
        preco: 59.90,
        tamanhos: [
            "25","26","27","28","29","30",
            "31","32","33","34","35","36"
        ]
    },

    {
        id: 13,
        categoria: "Acessórios",
        nome: "Bolsa Feminina",
        preco: 99.90,
        tamanhos: ["Único"]
    },

    {
        id: 14,
        categoria: "Acessórios",
        nome: "Óculos de Sol",
        preco: 59.90,
        tamanhos: ["Único"]
    },

    {
        id: 15,
        categoria: "Moda Praia",
        nome: "Biquíni",
        preco: 79.90,
        tamanhos: ["P", "M", "G", "GG"]
    },

    {
        id: 16,
        categoria: "Moda Praia",
        nome: "Saída de Praia",
        preco: 69.90,
        tamanhos: ["P", "M", "G", "GG"]
    },

    {
        id: 17,
        categoria: "Fitness",
        nome: "Top Fitness",
        preco: 49.90,
        tamanhos: ["P", "M", "G", "GG"]
    },

    {
        id: 18,
        categoria: "Fitness",
        nome: "Legging Fitness",
        preco: 79.90,
        tamanhos: ["P", "M", "G", "GG"]
    },

    {
        id: 19,
        categoria: "Plus Size",
        nome: "Blusa Plus Size",
        preco: 69.90,
        tamanhos: ["GGG", "G1", "G2", "G3"]
    },

    {
        id: 20,
        categoria: "Plus Size",
        nome: "Vestido Plus Size",
        preco: 99.90,
        tamanhos: ["GGG", "G1", "G2", "G3"]
    },

    {
        id: 21,
        categoria: "Inverno",
        nome: "Jaqueta",
        preco: 159.90,
        tamanhos: ["P", "M", "G", "GG"]
    },

    {
        id: 22,
        categoria: "Inverno",
        nome: "Moletom",
        preco: 99.90,
        tamanhos: ["P", "M", "G", "GG"]
    }

];


/* =========================================================
   CARRINHO
========================================================= */

let carrinho = carregarCarrinho();


function carregarCarrinho() {

    try {

        const dados =
            localStorage.getItem(CHAVE_CARRINHO);

        if (!dados) return [];

        const lista =
            JSON.parse(dados);

        return Array.isArray(lista)
            ? lista
            : [];

    } catch (erro) {

        return [];

    }

}


function salvarCarrinho() {

    localStorage.setItem(
        CHAVE_CARRINHO,
        JSON.stringify(carrinho)
    );

}


/* =========================================================
   FORMATAÇÃO
========================================================= */

function formatarMoeda(valor) {

    return Number(valor).toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}


/* =========================================================
   TELAS
========================================================= */

function abrirTela(idTela) {

    document
        .querySelectorAll(".tela")
        .forEach(function(tela) {

            tela.classList.remove("ativa");

        });


    const tela =
        document.getElementById(idTela);


    if (!tela) return;


    tela.classList.add("ativa");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function entrarNaLoja() {

    abrirTela("telaLoja");

}


function voltarInicio() {

    abrirTela("telaInicio");

}


/* =========================================================
   CATEGORIAS
========================================================= */

function abrirCategoria(categoria) {

    const lista =
        produtos.filter(function(produto) {

            return produto.categoria === categoria;

        });


    const titulo =
        document.getElementById(
            "tituloCategoria"
        );


    const container =
        document.getElementById(
            "listaProdutos"
        );


    if (!titulo || !container) return;


    titulo.textContent = categoria;

    container.innerHTML = "";


    lista.forEach(function(produto) {

        const card =
            document.createElement("div");


        card.className =
            "produto-card";


        card.innerHTML = `

            <h2>
                ${produto.nome}
            </h2>

            <p>
                ${produto.categoria}
            </p>

            <span class="preco">
                ${formatarMoeda(produto.preco)}
            </span>

            <br><br>

            <button
                class="btn btn-principal"
                type="button"
                onclick="abrirProduto(${produto.id})"
            >
                Ver produto
            </button>

        `;


        container.appendChild(card);

    });


    abrirTela("telaProdutos");

}


/* =========================================================
   PRODUTO
========================================================= */

function abrirProduto(id) {

    const produto =
        produtos.find(function(item) {

            return item.id === id;

        });


    if (!produto) return;


    const container =
        document.getElementById(
            "detalhesProduto"
        );


    const opcoes =
        produto.tamanhos.map(function(tamanho) {

            return `
                <option value="${tamanho}">
                    ${tamanho}
                </option>
            `;

        }).join("");


    container.innerHTML = `

        <h2>
            ${produto.nome}
        </h2>

        <p>
            ${produto.categoria}
        </p>

        <div class="preco">
            ${formatarMoeda(produto.preco)}
        </div>

        <div class="campo">

            <label>
                Tamanho
            </label>

            <select id="tamanhoProduto">

                <option value="">
                    Escolha o tamanho
                </option>

                ${opcoes}

            </select>

        </div>

        <div class="campo">

            <label>
                Quantidade
            </label>

            <input
                type="number"
                id="quantidadeProduto"
                min="1"
                value="1"
            >

        </div>

        <button
            class="btn btn-principal"
            type="button"
            onclick="adicionarAoCarrinho(${produto.id})"
        >
            🛒 Adicionar ao carrinho
        </button>

    `;


    abrirTela("telaProduto");

}


/* =========================================================
   ADICIONAR
========================================================= */

function adicionarAoCarrinho(id) {

    const produto =
        produtos.find(function(item) {

            return item.id === id;

        });


    const tamanho =
        document.getElementById(
            "tamanhoProduto"
        ).value;


    const quantidade =
        Number(
            document.getElementById(
                "quantidadeProduto"
            ).value
        );


    if (!tamanho) {

        alert("Escolha um tamanho.");

        return;

    }


    if (!quantidade || quantidade < 1) {

        alert("Quantidade inválida.");

        return;

    }


    const existente =
        carrinho.find(function(item) {

            return (
                item.id === id &&
                item.tamanho === tamanho
            );

        });


    if (existente) {

        existente.quantidade += quantidade;

    } else {

        carrinho.push({

            id: produto.id,

            nome: produto.nome,

            categoria: produto.categoria,

            preco: produto.preco,

            tamanho: tamanho,

            quantidade: quantidade

        });

    }


    salvarCarrinho();

    atualizarCarrinho();

    alert(
        "Produto adicionado ao carrinho!"
    );

    abrirTela("telaCarrinho");

}


/* =========================================================
   TOTAL
========================================================= */

function calcularTotalCarrinho() {

    return carrinho.reduce(
        function(total, item) {

            return total +
                Number(item.preco) *
                Number(item.quantidade);

        },
        0
    );

}


/* =========================================================
   CARRINHO
========================================================= */

function atualizarCarrinho() {

    const lista =
        document.getElementById(
            "listaCarrinho"
        );


    const total =
        document.getElementById(
            "totalCarrinho"
        );


    const contador =
        document.getElementById(
            "contadorCarrinho"
        );


    if (!lista) return;


    lista.innerHTML = "";


    if (carrinho.length === 0) {

        lista.innerHTML = `

            <div class="vazio">

                <strong>
                    Seu carrinho está vazio.
                </strong>

                Escolha alguns produtos
                para continuar.

            </div>

        `;

    } else {

        carrinho.forEach(function(item, indice) {

            const subtotal =
                item.preco *
                item.quantidade;


            const div =
                document.createElement("div");


            div.className =
                "item-carrinho";


            div.innerHTML = `

                <div>

                    <h3>
                        ${item.nome}
                    </h3>

                    <p>
                        Tamanho:
                        ${item.tamanho}
                    </p>

                    <p>
                        ${formatarMoeda(item.preco)}
                    </p>

                    <p>
                        Subtotal:
                        <strong>
                            ${formatarMoeda(subtotal)}
                        </strong>
                    </p>

                </div>


                <div class="quantidade">

                    <button
                        type="button"
                        onclick="alterarQuantidade(${indice}, -1)"
                    >
                        −
                    </button>

                    <strong>
                        ${item.quantidade}
                    </strong>

                    <button
                        type="button"
                        onclick="alterarQuantidade(${indice}, 1)"
                    >
                        +
                    </button>

                    <button
                        type="button"
                        onclick="removerDoCarrinho(${indice})"
                    >
                        ✕
                    </button>

                </div>

            `;


            lista.appendChild(div);

        });

    }


    const totalAtual =
        calcularTotalCarrinho();


    if (total) {

        total.textContent =
            formatarMoeda(totalAtual);

    }


    if (contador) {

        contador.textContent =
            carrinho.reduce(
                function(soma, item) {

                    return soma +
                        Number(item.quantidade);

                },
                0
            );

    }

}


function alterarQuantidade(indice, valor) {

    if (!carrinho[indice]) return;


    carrinho[indice].quantidade += valor;


    if (
        carrinho[indice].quantidade <= 0
    ) {

        carrinho.splice(indice, 1);

    }


    salvarCarrinho();

    atualizarCarrinho();

}


function removerDoCarrinho(indice) {

    if (!carrinho[indice]) return;


    carrinho.splice(indice, 1);

    salvarCarrinho();

    atualizarCarrinho();

}


/* =========================================================
   FINALIZAR
========================================================= */

function finalizarCompra() {

    if (carrinho.length === 0) {

        alert(
            "Seu carrinho está vazio."
        );

        return;

    }


    const total =
        document.getElementById(
            "totalFinal"
        );


    if (total) {

        total.textContent =
            formatarMoeda(
                calcularTotalCarrinho()
            );

    }


    abrirTela("telaFinalizar");

}


/* =========================================================
   ENTREGA / RETIRADA
========================================================= */

function configurarEntrega() {

    const tipoEntrega =
        document.getElementById(
            "tipoEntrega"
        );


    const areaEndereco =
        document.getElementById(
            "areaEndereco"
        );


    if (!tipoEntrega || !areaEndereco) {
        return;
    }


    function atualizarEndereco() {

        if (
            tipoEntrega.value ===
            "Entrega"
        ) {

            areaEndereco.style.display =
                "block";

        } else {

            areaEndereco.style.display =
                "none";


            document.getElementById(
                "ruaCliente"
            ).value = "";


            document.getElementById(
                "numeroCliente"
            ).value = "";


            document.getElementById(
                "bairroCliente"
            ).value = "";


            document.getElementById(
                "referenciaCliente"
            ).value = "";

        }

    }


    tipoEntrega.addEventListener(
        "change",
        atualizarEndereco
    );


    atualizarEndereco();

}


/* =========================================================
   PAGAMENTO
========================================================= */

function configurarPagamento() {

    const formaPagamento =
        document.getElementById(
            "formaPagamento"
        );


    const areaTroco =
        document.getElementById(
            "areaTroco"
        );


    if (!formaPagamento || !areaTroco) {
        return;
    }


    function atualizarTroco() {

        if (
            formaPagamento.value ===
            "Dinheiro"
        ) {

            areaTroco.style.display =
                "block";

        } else {

            areaTroco.style.display =
                "none";

        }

    }


    formaPagamento.addEventListener(
        "change",
        atualizarTroco
    );


    atualizarTroco();

}


/* =========================================================
   TROCO
========================================================= */

function calcularTroco() {

    const campo =
        document.getElementById(
            "valorTroco"
        );


    const resultado =
        document.getElementById(
            "valorTrocoCalculado"
        );


    if (!campo || !resultado) return;


    const valorPago =
        Number(campo.value);


    const total =
        calcularTotalCarrinho();


    if (!valorPago) {

        resultado.textContent =
            "Troco: R$ 0,00";

        return;

    }


    const troco =
        valorPago - total;


    if (troco < 0) {

        resultado.textContent =
            "Valor insuficiente.";

        return;

    }


    resultado.textContent =
        "Troco: " +
        formatarMoeda(troco);

}


/* =========================================================
   HISTÓRICO
========================================================= */

function salvarPedidoHistorico(pedido) {

    let historico = [];


    try {

        const dados =
            localStorage.getItem(
                CHAVE_HISTORICO
            );


        if (dados) {

            historico =
                JSON.parse(dados);

        }

    } catch (erro) {

        historico = [];

    }


    if (!Array.isArray(historico)) {
        historico = [];
    }


    historico.unshift(pedido);


    localStorage.setItem(
        CHAVE_HISTORICO,
        JSON.stringify(historico)
    );

}


/* =========================================================
   ENVIAR PEDIDO
========================================================= */

function enviarPedido(evento) {

    evento.preventDefault();


    if (carrinho.length === 0) {

        alert(
            "Seu carrinho está vazio."
        );

        return;

    }


    const nome =
        document.getElementById(
            "nomeCliente"
        ).value.trim();


    const telefone =
        document.getElementById(
            "telefoneCliente"
        ).value.trim();


    const tipoEntrega =
        document.getElementById(
            "tipoEntrega"
        ).value;


    const formaPagamento =
        document.getElementById(
            "formaPagamento"
        ).value;


    if (!nome) {

        alert("Informe seu nome.");

        return;

    }


    if (!telefone) {

        alert("Informe seu WhatsApp.");

        return;

    }


    if (!tipoEntrega) {

        alert(
            "Escolha entrega ou retirada."
        );

        return;

    }


    if (!formaPagamento) {

        alert(
            "Escolha a forma de pagamento."
        );

        return;

    }


    const total =
        calcularTotalCarrinho();


    let endereco = "";

    let referencia = "";


    /* =====================================================
       ENDEREÇO SOMENTE PARA ENTREGA
    ====================================================== */

    if (
        tipoEntrega ===
        "Entrega"
    ) {

        const rua =
            document.getElementById(
                "ruaCliente"
            ).value.trim();


        const numero =
            document.getElementById(
                "numeroCliente"
            ).value.trim();


        const bairro =
            document.getElementById(
                "bairroCliente"
            ).value.trim();


        const referenciaElemento =
            document.getElementById(
                "referenciaCliente"
            );


        referencia =
            referenciaElemento
                ? referenciaElemento.value.trim()
                : "";


        if (
            !rua ||
            !numero ||
            !bairro
        ) {

            alert(
                "Preencha o endereço completo."
            );

            return;

        }


        endereco =
            `${rua}, nº ${numero} - ${bairro}`;

    }


    /* =====================================================
       TROCO
    ====================================================== */

    let valorPago = 0;

    let troco = 0;


    if (
        formaPagamento ===
        "Dinheiro"
    ) {

        valorPago =
            Number(
                document.getElementById(
                    "valorTroco"
                ).value
            );


        if (
            !valorPago ||
            valorPago < total
        ) {

            alert(
                "Informe um valor suficiente para o pagamento."
            );

            return;

        }


        troco =
            valorPago - total;

    }


    /* =====================================================
       PEDIDO
    ====================================================== */

    const numeroPedido =
        "GM-" +
        String(Date.now()).slice(-8);


    const dataPedido =
        new Date().toLocaleString(
            "pt-BR"
        );


    const itensPedido =
        carrinho.map(function(item) {

            return {

                nome:
                    item.nome,

                tamanho:
                    item.tamanho,

                quantidade:
                    item.quantidade,

                preco:
                    item.preco,

                subtotal:
                    item.preco *
                    item.quantidade

            };

        });


    const pedido = {

        numero:
            numeroPedido,

        data:
            dataPedido,

        nome:
            nome,

        telefone:
            telefone,

        tipoEntrega:
            tipoEntrega,

        endereco:
            endereco,

        referencia:
            referencia,

        pagamento:
            formaPagamento,

        valorPago:
            valorPago,

        troco:
            troco,

        total:
            total,

        itens:
            itensPedido

    };


    salvarPedidoHistorico(pedido);


    /* =====================================================
       WHATSAPP
    ====================================================== */

    let mensagem =
        "🛍️ *NOVO PEDIDO - GIOVANA MODAS*%0A%0A";


    mensagem +=
        "*Pedido:* " +
        numeroPedido +
        "%0A";


    mensagem +=
        "*Cliente:* " +
        encodeURIComponent(nome) +
        "%0A";


    mensagem +=
        "*WhatsApp:* " +
        encodeURIComponent(telefone) +
        "%0A%0A";


    mensagem +=
        "*ITENS DO PEDIDO:*%0A";


    carrinho.forEach(function(item) {

        const subtotal =
            item.preco *
            item.quantidade;


        mensagem +=
            "• " +
            encodeURIComponent(item.nome) +
            " | Tam. " +
            encodeURIComponent(item.tamanho) +
            " | Qtd. " +
            item.quantidade +
            " | " +
            encodeURIComponent(
                formatarMoeda(subtotal)
            ) +
            "%0A";

    });


    mensagem +=
        "%0A*TOTAL:* " +
        encodeURIComponent(
            formatarMoeda(total)
        ) +
        "%0A";


    mensagem +=
        "*Pagamento:* " +
        encodeURIComponent(
            formaPagamento
        ) +
        "%0A";


    if (
        formaPagamento ===
        "Dinheiro"
    ) {

        mensagem +=
            "*Dinheiro para:* " +
            encodeURIComponent(
                formatarMoeda(valorPago)
            ) +
            "%0A";


        mensagem +=
            "*Troco:* " +
            encodeURIComponent(
                formatarMoeda(troco)
            ) +
            "%0A";

    }


    mensagem +=
        "%0A*Recebimento:* " +
        encodeURIComponent(
            tipoEntrega
        ) +
        "%0A";


    if (
        tipoEntrega ===
        "Entrega"
    ) {

        mensagem +=
            "*Endereço:* " +
            encodeURIComponent(
                endereco
            ) +
            "%0A";


        if (referencia) {

            mensagem +=
                "*Referência:* " +
                encodeURIComponent(
                    referencia
                ) +
                "%0A";

        }


        mensagem +=
            "%0A⏱️ *Seu pedido será entregue para você em até 30 minutos.*%0A";

    } else {

        mensagem +=
            "%0A⏱️ *Seu pedido estará disponível para retirada em até 30 minutos.*%0A";

    }


    mensagem +=
        "%0A💗 Obrigado por comprar na *Giovana Modas*!";


    /* =====================================================
       LIMPAR CARRINHO
    ====================================================== */

    carrinho = [];

    salvarCarrinho();

    atualizarCarrinho();


    /* =====================================================
       CONFIRMAÇÃO
    ====================================================== */

    const telaFinalizar =
        document.getElementById(
            "telaFinalizar"
        );


    if (telaFinalizar) {

        telaFinalizar.innerHTML = `

            <div class="conteudo-tela">

                <div class="pedido-sucesso">

                    <div class="icone-sucesso">
                        ✅
                    </div>

                    <h2>
                        Pedido realizado!
                    </h2>

                    <p>
                        Número do pedido:
                        <strong>
                            ${numeroPedido}
                        </strong>
                    </p>

                    <p>
                        Obrigado,
                        <strong>
                            ${nome}
                        </strong>!
                    </p>

                    ${
                        tipoEntrega === "Entrega"
                            ? `
                                <p>
                                    Seu pedido será
                                    entregue para você
                                    em até
                                    <strong>
                                        30 minutos
                                    </strong>.
                                </p>
                            `
                            : `
                                <p>
                                    Seu pedido estará
                                    disponível para retirada
                                    em até
                                    <strong>
                                        30 minutos
                                    </strong>.
                                </p>
                            `
                    }

                    <p>
                        Seu pedido foi salvo
                        no histórico deste dispositivo.
                    </p>

                    <br>

                    <button
                        class="btn btn-principal"
                        type="button"
                        onclick="voltarInicio()"
                    >
                        🏠 Voltar ao início
                    </button>

                </div>

            </div>

        `;

    }


    /* =====================================================
       ABRIR WHATSAPP
    ====================================================== */

    const urlWhatsApp =
        "https://wa.me/" +
        WHATSAPP +
        "?text=" +
        mensagem;


    setTimeout(function() {

        window.open(
            urlWhatsApp,
            "_blank"
        );

    }, 500);

}


/* =========================================================
   MAPA
========================================================= */

function abrirMapa() {

    const enderecoMapa =
        encodeURIComponent(
            ENDERECO
        );


    const url =
        "https://www.google.com/maps/search/?api=1&query=" +
        enderecoMapa;


    window.open(
        url,
        "_blank"
    );

}


/* =========================================================
   BOTÕES
========================================================= */

function configurarBotoes() {

    const btnCarrinho =
        document.getElementById(
            "btnCarrinho"
        );


    const btnFinalizar =
        document.getElementById(
            "btnFinalizarPedido"
        );


    const formulario =
        document.getElementById(
            "formPedido"
        );


    const campoTroco =
        document.getElementById(
            "valorTroco"
        );


    if (btnCarrinho) {

        btnCarrinho.onclick =
            function() {

                atualizarCarrinho();

                abrirTela(
                    "telaCarrinho"
                );

            };

    }


    if (btnFinalizar) {

        btnFinalizar.onclick =
            function(evento) {

                evento.preventDefault();

                finalizarCompra();

            };

    }


    if (formulario) {

        formulario.addEventListener(
            "submit",
            enviarPedido
        );

    }


    if (campoTroco) {

        campoTroco.addEventListener(
            "input",
            calcularTroco
        );

    }

}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        atualizarCarrinho();

        configurarEntrega();

        configurarPagamento();

        configurarBotoes();

        abrirTela("telaInicio");

    }
);