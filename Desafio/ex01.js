function convertNumberToWords(number) {
  let url = "https://www.dataaccess.com/webservicesserver/NumberConversion.wso?WSDL";
  const request = new XMLHttpRequest();
  request.open("POST", url, true);
  request.setRequestHeader("Content-Type", "text/xml");

  let numeroConvertido;

  request.onload = function () {
    if (request.status === 200) {
      let resposta = request.responseXML;
      numeroConvertido = resposta.getElementsByTagName("m:NumberToWordsResult")[0].textContent;
      console.log(numeroConvertido);
    } else {
      console.log("Falha na requisição");
    }
  };

  let data = `
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.dataaccess.com/webservicesserver/">
      <soapenv:Header/>
      <soapenv:Body>
        <web:NumberToWords>
          <web:ubiNum>${number}</web:ubiNum>
        </web:NumberToWords>
      </soapenv:Body>
    </soapenv:Envelope>
  `;

  request.send(data);

  return numeroConvertido;
}
