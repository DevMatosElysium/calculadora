function adicionarNum(num){
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = valorDisplay + num
}

function limpaTela(){
    document.querySelector(".display").value = ""
}

function calcular(){
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = eval(valorDisplay)
}

function inverterNum(){
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = valorDisplay * -1
}