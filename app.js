
var userName = prompt("Please ENTER YOUR NAME.","");
if( userName >= 'a' || userName >='A')
{
alert("WELCOME,"+userName+"!");
}
else
{ alert("WELCOME!");}
confirm("PLEASE RATE OUR WEBSITE.");
alert('GET 20% off all Entrees')




var favburger = prompt("Do your prefer Chicken alfredo burger or Classic Beef Burger?")

while(favburger !== 'chicken alfredo burger' && favburger !== 'classic beef burger'){
  favburger = prompt("Please choose between chicken alfredo burger and classic beef burger")
}

var userInput = prompt("How many meals do you want?")
for (var i =0;i<=userInput;i++)
{
  if(favburger =='chicken alfredo burger'){
  document.write(i+"-")
  document.write('<img src = "https://twokooksinthekitchen.com/wp-content/uploads/2018/03/IMG_7838-3.jpg">')
}
else{
  document.write(i+"-")
  document.write('<img src = "https://www.crushpixel.com/big-static7/preview4/big-burger-with-french-fries-170857.jpg">')
}
}