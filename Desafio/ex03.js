function handleDateOperations(params) {
    const dataInicial = new Date(params.startDate);
    const dataFinal = new Date(params.endDate);

    // 1. Calcular diferença entre duas datas
    const diferencaEmMilissegundos = dataFinal - dataInicial;
    const diferencaEmDias = diferencaEmMilissegundos / (1000 * 60 * 60 * 24);

    // 2. Adicionar dias à data inicial
    const novaData = new Date(dataInicial);
    novaData.setDate(novaData.getDate() + params.daysToAdd);

    // 3. Converter para outro fuso horário
    const dataConvertida = new Intl.DateTimeFormat('pt-BR', {
        timeZone: params.timeZone,
        dateStyle: 'full',
        timeStyle: 'short',
    }).format(novaData);

    // 4. Formatar data
    const dataFormatada = novaData.toLocaleDateString('pt-BR');

    return {
        daysDifference: diferencaEmDias,
        newDate: novaData,
        convertedDate: dataConvertida,
        formattedDate: dataFormatada,
    };
}

// Exemplo de uso
const resultado = handleDateOperations({
    startDate: '2025-01-01',
    endDate: '2025-01-20',
    daysToAdd: 5,
    timeZone: 'America/Sao_Paulo',
});

console.log('Resultado:', resultado);