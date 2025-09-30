let pilha = [];
let proximoId = 1;

// Função de subir a pagina
function subirTopoC() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Formata a data de YYYY-MM-DD para DD/MM/YYYY
function formatarData(data) {
    const partes = data.split("-");
    if (partes.length !== 3) return data;
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

// Função para adicionar relatório
function pushRelatorio() {
    let titulo = document.getElementById("titulo").value.trim();
    let data = document.getElementById("data").value;

    // Validação visual
    if (!titulo || !data) {
        mostrarMensagem("console1", "⚠ Título e Data são obrigatórios", "erro");
        return;
    }

    let dataFormatada = formatarData(data);

    pilha.unshift({ id: proximoId++, titulo, data: dataFormatada });
    atualizarLista();
    mostrarMensagem("console1", `✅ Adicionado: ${titulo} | ${dataFormatada}`, "sucesso");
}

// Função para remover relatório
function popRelatorio() {
    if (pilha.length === 0) {
        mostrarMensagem("console2", "⚠ A pilha está vazia", "erro");
        return;
    }
    let removido = pilha.shift();
    atualizarLista();
    mostrarMensagem("console2", `🗑 Removido: ${removido.titulo} | ${removido.data}`, "sucesso");
}

// Atualiza lista na tela
function atualizarLista() {
    let lista = document.getElementById("lista");
    lista.textContent = pilha
        .map(r => `ID: ${r.id} | Título: ${r.titulo} | Data: ${r.data}`)
        .join("\n");
}

// Atualiza console falso
function atualizarConsole(consoleId, texto) {
    let consoleEl = document.getElementById(consoleId);
    consoleEl.textContent = texto;
}

// Mensagem estilizada no console falso
function mostrarMensagem(consoleId, texto, tipo) {
    let consoleEl = document.getElementById(consoleId);
    consoleEl.textContent = texto;
    consoleEl.className = `fake-console ${tipo}`;
}

// Verificar topo da pilha
function peekRelatorio() {
    if (pilha.length === 0) {
        mostrarMensagem("console5", "⚠ A pilha está vazia", "erro");
        return;
    }
    let topo = pilha[0];
    mostrarMensagem("console5", `🔝 Topo: ID ${topo.id} | ${topo.titulo} | ${topo.data}`, "info");
}

// Contar relatórios
function contarRelatorios() {
    let contador = pilha.length;
    mostrarMensagem("console6", `📊 Total de relatórios: ${contador}`, "info");
}

// Buscar relatório por título
function buscarRelatorio() {
    let tituloBusca = document.getElementById("tituloBusca").value.trim();
    if (!tituloBusca) {
        mostrarMensagem("console7", "⚠ Digite um título para buscar", "erro");
        return;
    }

    let encontrado = pilha.find(r => r.titulo === tituloBusca);

    if (encontrado) {
        mostrarMensagem("console7", `🔍 Encontrado: ID ${encontrado.id} | ${encontrado.titulo} | ${encontrado.data}`, "sucesso");
    } else {
        mostrarMensagem("console7", "❌ Nenhum relatório encontrado com esse título.", "erro");
    }
}
