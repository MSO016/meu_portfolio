// Produtos iniciais
let produtos = [
    {nome: "Arroz Integral", qtd: 2, cat: "Comida", loja: "Carrefour"},
    {nome: "Teclado Mecânico", qtd: 1, cat: "Tech", loja: "Amazon"},
    {nome: "Leite", qtd: 3, cat: "Comida", loja: "Supermercado C"},
];

let carrinho = [];

// Função para mostrar produtos
function listarProdutos() {
    const lista = document.querySelector(".php-lista");
    lista.innerHTML = "";

    produtos.forEach((p, i) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <div class="item-info">
                <strong>${p.nome}</strong>
                <span>Categoria: ${p.cat} | Loja: ${p.loja}</span>
            </div>
            <div class="item-quantidade">${p.qtd} ${p.qtd > 1 ? "unidades" : "unidade"}</div>
            <div class="item-actions">
                <button class="editar php-button" onclick="editarProduto(${i})">Editar</button>
                <button class="excluir php-button" onclick="removerProduto(${i})">Excluir</button>
                <button class="adicionar php-button" onclick="adicionarCarrinho(${i})">Adicionar ao Carrinho</button>
            </div>
        `;
        lista.appendChild(li);
    });
}

// Adicionar produto
function adicionarProduto() {
    const nome = document.getElementById("produtoNome").value;
    const qtd = parseInt(document.getElementById("produtoQtd").value);
    const cat = document.getElementById("produtoCat").value;
    const loja = document.getElementById("produtoLoja").value;

    if (!nome || !qtd || !cat || !loja) {
        document.getElementById("consoleAdd").textContent = "Preencha todos os campos corretamente!";
        return;
    }

    produtos.push({nome, qtd, cat, loja});
    document.getElementById("consoleAdd").textContent = `Produto ${nome} adicionado!`;
    listarProdutos();
}

// Remover produto
function removerProduto(index) {
    const p = produtos.splice(index,1)[0];
    listarProdutos();
    alert(`Produto ${p.nome} removido!`);
}

// Editar produto
function editarProduto(index) {
    const p = produtos[index];
    document.getElementById("produtoNome").value = p.nome;
    document.getElementById("produtoQtd").value = p.qtd;
    document.getElementById("produtoCat").value = p.cat;
    document.getElementById("produtoLoja").value = p.loja;

    removerProduto(index);
}

// Adicionar ao carrinho e remover da lista
function adicionarCarrinho(index) {
    const p = produtos.splice(index, 1)[0];
    const existente = carrinho.find(item => item.nome === p.nome);
    if (existente) {
        existente.qtd += p.qtd;
    } else {
        carrinho.push({...p});
    }
    listarProdutos();
    listarCarrinho();
}

// Listar carrinho
function listarCarrinho() {
    const carrinhoDiv = document.getElementById("carrinho");
    carrinhoDiv.innerHTML = "";

    if(carrinho.length === 0) {
        carrinhoDiv.textContent = "Carrinho vazio";
        return;
    }

    let html = "<ul>";
    carrinho.forEach((c,i) => {
        html += `<li>${c.nome} | Qtd: ${c.qtd} | ${c.cat} | ${c.loja} 
                    <button class="php-button" onclick="removerDoCarrinho(${i})">Remover</button>
                 </li>`;
    });
    html += "</ul>";
    carrinhoDiv.innerHTML = html;
}

// Remover do carrinho
function removerDoCarrinho(index) {
    const c = carrinho.splice(index,1)[0];
    listarCarrinho();
    alert(`Produto ${c.nome} removido do carrinho!`);
}

// Limpar carrinho
function limparCarrinho() {
    carrinho = [];
    listarCarrinho();
}

// Limpar lista de produtos
function limparLista() {
    produtos = [];
    listarProdutos();
}

// Função de subir a pagina
function subirTopo() {
    window.scrollTo({top: 0, behavior: "smooth"});
}

// Inicializar
listarProdutos();
listarCarrinho();
