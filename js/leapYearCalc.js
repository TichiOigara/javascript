// if (year%4===0 || year%400===0 && year%100 !== 0){
// 	leapYear = true;
// }else{
// 	leapYear=false;
// }
function testYear() {
  var year = parseInt(prompt("Enter the year:"));
  var leapYear;
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        leapYear = true;
      } else {
        leapYear = false;
      }
    } else {
      leapYear = true;
    }
  } else {
    leapYear = false;
  }
  alert(leapYear);
}
testYear();
