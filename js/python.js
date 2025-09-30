// ========================
// python.js — Funções para o projeto Python
// ========================

// Taxas fixas de conversão
const TAXA_USD = 5.20;
const TAXA_EUR = 5.50;
const TAXA_GBP = 6.00;

// Função de subir a pagina
function subirTopoPython() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função de conversão (simulação do código Python)
function converterMoeda() {
    const valorBRL = parseFloat(document.getElementById("valor").value);
    const moeda = document.getElementById("moeda").value;
    let resultado = "";

    // Validação do valor
    if (isNaN(valorBRL) || valorBRL <= 0) {
        resultado = "Valor inválido. Por favor, digite um número positivo.";
    } else {
        let valorConvertido;
        let simbolo;

        // Cálculo baseado na moeda selecionada
        if (moeda === "usd") {
            valorConvertido = valorBRL / TAXA_USD;
            simbolo = "USD";
        } else if (moeda === "eur") {
            valorConvertido = valorBRL / TAXA_EUR;
            simbolo = "EUR";
        } else if (moeda === "gbp") {
            valorConvertido = valorBRL / TAXA_GBP;
            simbolo = "GBP";
        }

        resultado = `R$ ${valorBRL.toFixed(2)} = ${simbolo} ${valorConvertido.toFixed(2)}`;
    }

    // Atualiza o console falso
    atualizarConsole("consolePython", resultado);
}

// Atualiza o "console falso" no HTML
function atualizarConsole(consoleId, texto) {
    document.getElementById(consoleId).textContent = texto;
}
