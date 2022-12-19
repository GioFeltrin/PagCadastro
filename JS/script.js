

function buscaCep() {
let cep = document.getElementById('txtCEP').value;
    if (cep !== "") {
        let url = 'https://brasilapi.com.br/api/cep/v1/' + cep;
        
        let req = new XMLHttpRequest();
        req.open ("GET", url);
        req.send ();

        req.onload = function() {
            if (req.status === 200) {
                let endereco = JSON.parse (req.response);
                document.getElementById ("txtRua").value = endereco.street;
                document.getElementById ("txtBairro").value = endereco.neighborhood;
                document.getElementById ("txtCidade").value = endereco.city;
                document.getElementById ("txtEstado").value = endereco.state;
            }
            else if (req.status === 404) {
                alert("CEP Inválido")
            }
            else {
                alert ("Erro ao fazer a requisição")
            }
        }
    }
}

window.onload = function () {
    let txtCep = document.getElementById ('txtCEP');
    txtCep.addEventListener ('blur' , buscaCep);
    
}



function cadastrar () {
    let nome = document.getElementById('txtNome').value;
    let CPF = document.getElementById ('txtCPF').value;
    let email = document.getElementById('txtEmail').value;
    let cel = document.getElementById ('txtTelefone').value;
    let CEP2 = document.getElementById ('txtCEP').value;
    let rua = document.getElementById ("txtRua").value;
    let num = document.getElementById ('txtNum').value;
    let bairro = document.getElementById ("txtBairro").value;
    let cidade = document.getElementById ("txtCidade").value;
    let estado = document.getElementById ("txtEstado").value;

if (nome == '')  {
        alert ('preencher nome')
    } else 
        if (CPF.length < 11) {
        alert ('CPF inválido')
    } else
        if (email == '') {
            alert ('preencher e-mail')
    } else 
        if(cel.length < 11 || cel.length > 13) {
            alert ('Celular inválido')
    } else 
        if (CEP2 == ''){
            alert ('preencher CEP')
    } else
        if (rua == '') {
            alert ('preencher rua')
    } else
        if (bairro == '') {
            alert ('preencher bairro')
    } else 
        if (cidade == '') {
            alert ('preencher cidade')
    } else 
        if (estado == '') {
            alert ('preencher estado')
    } else 
        if (num == ''){
            alert ('preencher número')
    }
    else {
        alert('Cadastro Efetuado com sucesso!')
        window.location.reload()}
    
}
