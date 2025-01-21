# Desafio-Tecnico

Este repositório contém soluções para três desafios técnicos abordados em JavaScript. Abaixo está a descrição de cada desafio, juntamente com os detalhes sobre a lógica implementada.

- Desafio 1: Conversão de Números para Extenso (SOAP)
  
A função utiliza um web service SOAP para converter números em texto por extenso.

Como funciona:
Requisição SOAP:

A URL do serviço é configurada e uma requisição POST é criada usando XMLHttpRequest.
O cabeçalho da requisição é definido como text/xml para compatibilidade com o serviço SOAP.
Formato do Envelope SOAP:

O número é encapsulado dentro de um envelope XML que atende à especificação do web service.
Processamento da Resposta:

A resposta é recebida em XML e o valor convertido (NumberToWordsResult) é extraído e exibido no console.
Decisões Tomadas:
SOAP: Necessário devido ao formato do serviço utilizado.
XMLHttpRequest: Permite controle detalhado sobre a estrutura da requisição.
Callback: O onload é usado para lidar com o processamento assíncrono.

- Desafio 2: Manipulação de Matrizes
  
A função implementa operações básicas em matrizes bidimensionais de números inteiros, como somar linhas, somar colunas e calcular valores das diagonais.

Como funciona:
Inicialização:

As somas de colunas são armazenadas em um array inicializado com zeros, proporcional ao número de colunas.
Iteração Sobre a Matriz:

Para cada elemento, são realizadas:
Soma dos valores da linha atual.
Atualização das somas das colunas.
Identificação de elementos pertencentes às diagonais.
Resultado Final:

Retorna um objeto com as somas das linhas, colunas e os valores das diagonais principal e secundária.
Decisões Tomadas:
Uso de .fill(0): Facilita a inicialização das somas das colunas.
Eficiência: A matriz é processada em um único loop aninhado.
Generalização: Funciona tanto para matrizes quadradas quanto não quadradas.

- Desafio 3: Operações com Datas

A função realiza várias operações relacionadas a datas e horários sem o uso de bibliotecas externas.

Como funciona:
Cálculo da Diferença entre Datas:

Converte as datas em milissegundos e calcula a diferença em dias.
Adição de Dias a uma Data:

Ajusta a data inicial somando o número de dias especificado.
Conversão de Fuso Horário:

Converte a data para um fuso horário diferente usando as funções nativas de Date.
Formatação de Data:

Produz uma string no formato DD/MM/YYYY com os métodos de manipulação de datas do JavaScript.
Decisões Tomadas:
Métodos Nativos: Garante precisão e evita dependências externas.
Validação: Previne erros com entradas inválidas.
Organização Modular: As operações são separadas, mantendo clareza e reutilização.
