let button = document.querySelector ('.btn')
button.addEventListener('click', adressSearch)
//button.addEventListener('click', renderTable)

let tabList = JSON.parse(localStorage.getItem("cep"))

function adressSearch () {
    const cep = document.querySelector('#cep').value
    const via = `https://viacep.com.br/ws/${cep}/json/`;
fetch (via)
.then (response => response.json())
.then (data => renderTable(data))
}

function renderTable (data) {
    const tableBody = document.querySelector('#result')
    let tableRow = `<tr>
        <td>${data.cep}</td>
        <td>${data.logradouro}</td>
        <td>${data.bairro}</td>
        <td>${data.localidade}/${data.uf}</td>
    </tr>`;
 tableBody.innerHTML += tableRow;
}
