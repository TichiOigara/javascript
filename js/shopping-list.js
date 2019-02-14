var list = [];
function shoppingList(list){

  for(var i=0; i<=10; i++){
  	list[i] = prompt("Enter item to shopping List:");
  }
}
function displayitems(list){
	list.sort();
	for(var i=0;i<=10;i++){
  	alert(list[i]);
  }
}
shoppingList(list);
displayitems(list);
