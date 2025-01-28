
const readline = require('readline-sync');

// Função para criar uma matriz
function criarMatriz(linhas, colunas, callback) {
    const matriz = [];
    for (let i = 0; i < linhas; i++) {
        const linha = [];
        for (let j = 0; j < colunas; j++) {
            const valor = callback(i, j);
            linha.push(valor);
        }
        matriz.push(linha);
    }
    return matriz;
}

// Função de callback para inicializar a matriz com zeros
function inicializarComZero(i, j) {
    return 0;
}

// Função para exibir a matriz
function exibirMatriz(matriz) {
    console.log("\nMatriz Atual:");
    for (let i = 0; i < matriz.length; i++) {
        let linha = '';
        for (let j = 0; j < matriz[i].length; j++) {
            linha += matriz[i][j] + ' ';
        }
        console.log(linha.trim());
    }
}

// Função para atualizar um elemento na matriz
function atualizarElemento(matriz) {
    const linha = parseInt(readline.question("Digite o índice da linha: "));
    const coluna = parseInt(readline.question("Digite o índice da coluna: "));
    
    // Verificar se os índices são válidos usando variáveis condicionais e if
    const indiceValido = (linha >= 0 && linha < matriz.length) && (coluna >= 0 && coluna < matriz[0].length) ? true : false;
    
    if (indiceValido) {
        const novoValor = parseInt(readline.question("Digite o novo valor: "));
        matriz[linha][coluna] = novoValor;
        console.log("Elemento atualizado com sucesso!");
    } else {
        console.log("Índices inválidos. Tente novamente.");
    }
}

// Função principal para exibir o menu e lidar com as opções
function menu(matriz) {
    let sair = false;
    while (!sair) { // Loop para manter o menu ativo
        console.log("\n=== Gerenciador de Matrizes ===");
        console.log("1. Exibir Matriz");
        console.log("2. Atualizar Elemento");
        console.log("3. Sair");
        
        const escolha = readline.question("Escolha uma opção: ");
        
        switch (escolha) { // Uso do switch para tratar as opções
            case '1':
                exibirMatriz(matriz);
                break;
            case '2':
                atualizarElemento(matriz);
                break;
            case '3':
                sair = true;
                console.log("Saindo do gerenciador. Até mais!");
                break;
            default:
                console.log("Opção inválida. Por favor, tente novamente.");
        }
    }
}

// Função para inicializar e iniciar o programa
function iniciarPrograma() {
    console.log("Bem-vindo ao Gerenciador de Matrizes!");

    const linhas = parseInt(readline.question("Digite o número de linhas da matriz: "));
    const colunas = parseInt(readline.question("Digite o número de colunas da matriz: "));
    
    // Uso de ternário para validar entrada
    const linhasValidas = linhas > 0 ? linhas : 3;
    const colunasValidas = colunas > 0 ? colunas : 3;
    
    if (linhas <= 0 || colunas <= 0) {
        console.log("Valores inválidos fornecidos. Usando uma matriz padrão 3x3.");
    }
    
    // Criação da matriz usando a função criarMatriz com callback
    const matriz = criarMatriz(linhasValidas, colunasValidas, inicializarComZero);
    
    // Adicionar alguns valores iniciais para demonstração
    matriz[0][0] = 1;
    matriz[1][1] = 2;
    matriz[2][2] = 3;
    
    menu(matriz);
}

// Iniciar o programa
iniciarPrograma();
 