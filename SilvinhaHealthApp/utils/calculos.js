export const calcularIMC = (peso, altura) => {
    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 24.9) classificacao = 'Peso normal';
    else if (imc < 24.9) classificacao = 'Obesidade grau I';
    else if (imc < 24.9) classificacao = 'Obesidade grau II';
    else classificacao = 'Obesidade grau III';

    return {
        valor: imc.toFixed(2),
        classificacao
    };
};