import { Stack } from "./stack.js";

function validarExpressao(exp) {
    let pilha = new Stack();
    const aberturas = ['(', '[', '{'];
    const fechamentos = [')', ']', '}'];

    for (let i = 0; i < exp.length; i++) {
        let elemento = exp[i];

        // Se for um símbolo de abertura, empilha
        if (aberturas.includes(elemento)) {
            pilha.push(elemento);
        }
        
        // Se for um símbolo de fechamento
        else if (fechamentos.includes(elemento)) {
            // Se a pilha estiver vazia, significa que fechou algo que não abriu
            if (pilha.isEmpty()) {
                return false;
            }

            // Verifica se o topo da pilha corresponde ao fechamento atual
            let ultimoAberto = pilha.pop();
            let indiceFechamento = fechamentos.indexOf(elemento);
            let correspondenteAbertura = aberturas[indiceFechamento];

            if (ultimoAberto !== correspondenteAbertura) {
                return false; // Não correspondem (ex: abriu '(' e fechou ']')
            }
        }
    }

    // Se a pilha estiver vazia no final, tudo foi fechado corretamente
    return pilha.isEmpty();
}

export { validarExpressao };