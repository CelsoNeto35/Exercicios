var string = "teste";

var stringInvertida = "";

for(var i = string.length -1; i>= 0; i--){
    stringInvertida+=string[i];
}
console.log("String Original:"+string);
console.log("String Invertida:"+stringInvertida);