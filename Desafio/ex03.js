function handleDateOperations(params) {
  const dataInicial = new Date(params.startDate);
  const dataFinal = new Date(params.endDate);

  const diferencaEmMilissegundos = dataFinal - dataInicial;
  const diferencaEmDias = diferencaEmMilissegundos / (1000 * 60 * 60 * 24);

  const novaData = new Date(dataInicial);
  novaData.setDate(novaData.getDate() + params.daysToAdd);

  const dataConvertida = new Intl.DateTimeFormat('pt-BR', {
    timeZone: params.timeZone,
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(novaData);

  const dataFormatada = novaData.toLocaleDateString('pt-BR');

  return {
    daysDifference: diferencaEmDias,
    newDate: novaData,
    convertedDate: dataConvertida,
    formattedDate: dataFormatada,
  };
}

const resultado = handleDateOperations({
  startDate: '2025-01-01',
  endDate: '2025-01-20',
  daysToAdd: 5,
  timeZone: 'America/Sao_Paulo',
});

console.log('Resultado:', resultado);
