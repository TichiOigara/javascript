function quiz(){
alert("Choose either 1 or 2");
var ques1 = parseInt(prompt("Do you like 1.Dogs or 2. Cats?"));
var ques2 = parseInt(prompt("Do you like 1. Outdoors or 2. Indoors?"));
var ques3 = parseInt(prompt("Do you like 1.Large Gatherings or 2. Small Gatherings"));
if((ques1+ques2+ques3)===3 ||(ques1+ques2+ques3)===4){
	alert("You are an extrovert!");
}else if((ques1+ques2+ques3)===5 || (ques1+ques2+ques3)===6){
	alert("You are an intorvert.")
}
// if (ques1 === 1 && ques2===1 && ques3 ===1 ){
// 	alert("You are an extrovert.");
// }else if(ques1===2 && ques2===2 &&ques3==2){
// alert("You are an introvert");
// }else if(ques1===1 || ques2 ===2 && ques3===2){
// alert("You are introverted.")
// }else if(){
//
// }

}
quiz();
