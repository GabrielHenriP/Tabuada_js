
function tabuada(){
    var tnumero = document.getElementById("txtnumero")
    var tabela = document.getElementById("seltab")
    
    if(tnumero.value.length == 0 ){
        alert('por favor, digite um número')

    } else {

        var numero = Number(tnumero.value)
        tabela.innerHTML = ''
        for(var i = 1; i <=10; i++){
            var res = numero * i
            var resultado = document.createElement('option')
            resultado.innerHTML = `${numero} X ${i} = ${res}`
            resultado.value = `tabela${i}` // pro javascript n faz sentido mas para outas linguagens sim
            tabela.appendChild(resultado)
        }
    }
}