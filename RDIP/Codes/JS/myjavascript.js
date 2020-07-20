var eng=[]
var hin=[]
eng[0]="John ate an apple before afternoon"
eng[1]="before afternoon John ate an apple"
eng[2]="John before afternoon ate an apple"
eng[3]="some students like to study in the night"
eng[4]="at night some students like to study"
eng[5]="John and Mary went to church"
eng[6]="Mary and John went to church"
eng[7]="John went to church after eating"
eng[8]="after eating John went to church"
eng[9]="John after eating went to church"
eng[10]="did he go to market"
eng[11]="he did go to market"
eng[12]="the woman who called my sister sells cosmetics"
eng[13]="the woman who sells cosmetics called my sister"
eng[14]="my sister who sells cosmetics called the woman"
eng[15]="my sister who called the woman sells cosmetics"
eng[16]="John goes to the library and studies"
eng[17]="John studies and goes to the library"
eng[18]="John ate an apple so did she"
eng[19]="she ate an apple so did John"
eng[20]="the teacher returned the book after she noticed the error"
eng[21]="the teacher noticed the error after she returned the book"
eng[22]="after the teacher returned the book she noticed the error"
eng[23]="after the teacher noticed the error she returned the book"
eng[24]="she returned the book after the teacher noticed the error"
eng[25]="she noticed the error after the teacher returned the book"
eng[26]="after she returned the book the teacher noticed the error"
eng[27]="after she noticed the error the teacher returned the book"
eng[28]="I told her that I bought a book yesterday"
eng[29]="I told her yesterday that I bought a book"
eng[30]="yesterday I told her that I bought a book"
eng[31]="I bought a book that I told her yesterday"
eng[32]="I bought a book yesterday that I told her"
eng[33]="yesterday I bought a book that I told her"

hin[0]="राम और श्याम बाजार गयें"
hin[1]="राम और श्याम गयें बाजार"
hin[2]="बाजार गयें राम और श्याम"
hin[3]="गयें बाजार राम और श्याम"
hin[4]="राम सोया और श्याम भी"
hin[5]="श्याम सोया और राम भी"
hin[6]="सोया श्याम और राम भी"
hin[7]="सोया राम और श्याम भी"
hin[8]="मैंने उसे बताया कि राम सो रहा है"
hin[9]="मैंने उसे बताया कि सो रहा है राम"
hin[10]="उसे मैंने बताया कि राम सो रहा है"
hin[11]="उसे मैंने बताया कि सो रहा है राम"
hin[12]="मैंने बताया उसे कि राम सो रहा है"
hin[13]="मैंने बताया उसे कि सो रहा है राम"
hin[14]="उसे बताया मैंने कि राम सो रहा है"
hin[15]="उसे बताया मैंने कि सो रहा है राम"
hin[16]="बताया मैंने उसे कि राम सो रहा है"
hin[17]="बताया मैंने उसे कि सो रहा है राम"
hin[18]="बताया उसे मैंने कि राम सो रहा है"
hin[19]="बताया उसे मैंने कि सो रहा है राम"
hin[20]="राम खाकर सोया"
hin[21]="खाकर राम सोया"
hin[22]="राम सोया खाकर"
hin[23]="खाकर सोया राम"
hin[24]="सोया राम खाकर"
hin[25]="सोया खाकर राम"
hin[26]="बिल्लियों को मारकर कुत्ता सो गया"
hin[27]="मारकर बिल्लियों को कुत्ता सो गया" 
hin[28]="बिल्लियों को मारकर सो गया कुत्ता"
hin[29]="मारकर बिल्लियों को सो गया कुत्ता"
hin[30]="कुत्ता सो गया बिल्लियों को मारकर"
hin[31]="कुत्ता सो गया मारकर बिल्लियों को"
hin[32]="सो गया कुत्ता बिल्लियों को मारकर"
hin[33]="सो गया कुत्ता मारकर बिल्लियों को"
hin[34]="एक लाल किताब वहाँ है"
hin[35]="एक लाल किताब है वहाँ"
hin[36]="वहाँ है एक लाल किताब"
hin[37]="है वहाँ एक लाल किताब"
hin[38]="एक बड़ी सी किताब वहाँ है"
hin[39]="एक बड़ी सी किताब है वहाँ"
hin[40]="बड़ी सी एक किताब वहाँ है"
hin[41]="बड़ी सी एक किताब है वहाँ"
hin[42]="वहाँ है एक बड़ी सी किताब"
hin[43]="वहाँ है बड़ी सी एक किताब"
hin[44]="है वहाँ एक बड़ी सी किताब"
hin[45]="है वहाँ बड़ी सी एक किताब"
function shuffleArray ( array ) {
    var counter = array.length, temp, index;
    // While there are elements in the array
    while ( counter > 0 ) {
        // Pick a random index
        index = Math.floor( Math.random() * counter );

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[ counter ];
        array[ counter ] = array[ index ];
        array[ index ] = temp;
    }
    return array;
}
function emni() {
document.getElementById("demo").innerHTML ="Form a sentence(Declarative or Interrogative or any other type)from the given words.<br>(select the buttons in proper order)"
var c1 = Math.floor((Math.random() *33) + 1);
var str = eng[c1]
var a1= str.split(" ")
var l1=a1.length
a1= shuffleArray (a1)
for(var i=0;i<l1;i++)
{
  if(i<l1){
  document.getElementById(i).innerHTML =a1[i] ;
  }
  else {
       
  document.getElementById(i).innerHTML = "XXXXXX";
  }
}
}
function emni1() {
document.getElementById("demo").innerHTML ="Form a sentence(Declarative or Interrogative or any other type)from the given words.<br>(select the buttons in proper order)"
var c1 = Math.floor((Math.random() *45) + 1);
var str = hin[c1]
var a1= str.split(" ")
var l1=a1.length
a1= shuffleArray (a1)
for(var i=0;i<9;i++)
{ if(i<l1){
  document.getElementById(i).innerHTML =a1[i] ;
  }
  else {
       
  document.getElementById(i).innerHTML = "XXXXXX";
  }
}
}

function cal(){
var x = document.getElementById("name3").value;
var f=0,i;
for(i=0;i<=79;i++)
{
  if (x==eng[i])
  {
    f=1
    break
  }
}
if(f==1){
  document.write("RIGHT ANSWER!!!")
}
else{
  document.write("WRONG ANSWER!!!")
} 
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
