function GenerateAllCombinationOfString(mot){
console.log("Le mot est : " + mot);
var combi = [];
for(var i = 0; i <= mot.length; i++){
  for(var j =1; j <= mot.length; j++){
     if(mot.slice(i, j) != ""){
     combi[combi.length] = mot.slice(i, j);
    }
  }
}
console.log(combi);
}

GenerateAllCombinationOfString("dog");
