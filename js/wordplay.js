function splitArrays(){
	var sentence = prompt("Please enter a sentence");
  var splitWords = sentence.split(" ");
  var longWords = [];
  splitWords.forEach(function(splitWord){
  	if(splitWord.length >3){
    	longWords.push(splitWord);
    }
  });

 /*  for(var i=0;i<longWords.length;i++){
    alert(longWords[i]);
  } */
  longWords.reverse();
 	longWords.join('-');
  alert(longWords);
}
splitArrays();
