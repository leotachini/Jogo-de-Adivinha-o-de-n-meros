const resposta = Math.floor(Math.random() * 100 + 1);
let chutes = 0;

document.getElementById("submitButton1").onclick = function(){

  let chute = document.getElementById("guessField").value;
  chutes+=1;

  if(chute == resposta){
    alert(`${resposta}, está correto, e você 
    levou ${chutes} tentativas para acertar`);
  }
  else if(chute < resposta){
    alert("Muito pouco");
  }
  else{
    alert("Muito alto");
  }
}