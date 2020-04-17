// var start = document.querySelector("button#start");
// start.onclick = function(){
//     window.location.href = "perguntas/p1.html";
// }
function comecar(){
    window.location.href = "p1.html";
}
var questao = document.querySelector("title").innerHTML;
function getresposta(){
    var res = document.querySelector("input[class=inputres]");
    res = res.value;
    if (questao == "1"){
        if (res.toLowerCase() == "abacate"){
            alert("Acertou, clique em OK para continuar");
            window.location.href = "p2.html";
        }
        else {
            alert("Errou");
        }
    }
    else if (questao == "2"){
        if (res.toLowerCase() == "briófitas" || res.toLowerCase() == "briofitas"  ){
            alert("Acertou, clique em OK para continuar");
            window.location.href = "p3.html";
        }
        else {
            alert("Errou");
        }
    }
    else if (questao == "3"){
        if (res.toLowerCase() == "angiospermas"){
            alert("Acertou, clique em OK para continuar");
            window.location.href = "p4.html";
        }
        else {
            alert("Errou");
        }
    }
    else if (questao == "4"){
        if (res.toLowerCase() == "colletotrichum"){
            alert("Acertou, clique em OK para continuar");
            window.location.href = "p5.html";
        }
        else {
            alert("Errou");
        }
    }
    else if (questao == "5"){
        if (res.toLowerCase() == "plesionecrótico" || res.toLowerCase() == "plesionecrotico"){
            alert("Acertou, clique em OK para continuar");
            window.location.href = "p6.html";
        }
        else {
            alert("Errou");
        }
    }
    else if (questao == "6"){
        if (res.toLowerCase() == "mancha"){
            alert("Acertou, clique em OK para continuar");
            window.location.href = "p7.html";
        }
        else {
            alert("Errou");
        }
    }
    else if (questao == "7"){
        if (res.toLowerCase() == "exclusão" || res.toLowerCase() == "exclusao"){
            alert("Parabéns, você acertou todas as perguntas. Obrigado por Jogar!");
            window.location.href = "index.html"
        }
        else {
            alert("Errou");
        }
    }

}