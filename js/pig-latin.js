function  pigLatin(){
	var sentence = prompt("Enter the sentence: ");
  var words = sentence.split(" ");
  var translate = [];
  var finalTranslation ;
   words.forEach(function(word){
    var char1 = word.charAt(0);
    if(char1 === "a" || char1 === "e" || char1 === "i" || char1 === "o" || char1 === "u"){
    translate.push(word +"ay");
    }else
    {
    var charIndex ;
		//used a for-loop to check if every character was a vowel
		// saved the index position where a vowel was encountered
    for (var i =0; i<word.length;i++){

    	if(word.charAt(i)=="a"|| word.charAt(i)=="e" || word.charAt(i)=="i" || word.charAt(i)=="o" || word.charAt(i)=="u"){
      	charIndex =i;
        break;
      }

    }
    var consonants = word.slice(0,charIndex);
    translate.push(word.slice(charIndex, word.length)+consonants+"ay");
    //translate.push(word+"ay");
    }
  });

   finalTranslation = translate.join(" ");
   alert(finalTranslation);
    }
pigLatin();
