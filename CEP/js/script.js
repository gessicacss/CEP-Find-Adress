const button = document.querySelector ('.btn');
button.addEventListener ('click', adressList);
button.addEventListener ('click', renderTable);

function adressList () {
    const cep = document.querySelector('#cep').value
    const via = `https://viacep.com.br/ws/${cep}/json/`;

fetch (via)
.then ((response) => response.json())
.then ((data) => renderTable(data))
.catch ((error) => console.log(error));

}

function renderTable (data) {
    const tableBody = document.querySelector('#result');
    tableBody.innerHTML = `
    <tr>
        <td>${data.cep}</td>
        <td>${data.logradouro}</td>
        <td>${data.bairro}</td>
        <td>${data.localidade}/${data.uf}</td>
    </tr>
 `
}