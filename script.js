function fun1(){
var n = document.querySelector("#Name").value;
var p = document.querySelector("#prenom").value;
var Dn = document.querySelector("#daten").value;

var d = new Date();
var nee = d.getFullYear();
Dn = new Date(Dn);
var dN = Dn.getFullYear();
var b = nee - dN
var ph = document.querySelector("#phone").value;
var prof = document.getElementById("profi");
                var result = prof.options[prof.selectedIndex].value;

                var checked = 0;
var tbl= document.getElementById("table");
var chks = tbl.getElementsByTagName("INPUT");
for (var i = 0; i < chks.length; i++) {
    if (chks[i].checked) {
        checked++;
    }
}
checked = checked - 1; 
var mot = document.querySelector("#mdp").value;
var mot2 = document.querySelector("#mdp2").value;
var msg = "Bonjour " + n +" " +p;
regexp = /^[A-Z]/;

  if (!regexp.test(n)&&!regexp.test(p)){

 //document.getElementById("error").innerHTML="Nom et Prenom Doit Commencent Par Une letter Majuscule !!";
 document.getElementById("ErNOM").innerHTML="*Nom et Prenom Doit Commencent Par Une letter Majuscule !!";
  }else if(b<18){
    document.getElementById("ErDate").innerHTML="*Vous etes Un mineur !!";
   
}else if(ph.length != 8){
    document.getElementById("error").innerHTML="Phone Number Must Contain 8 Numbers !!";

}else if(result == 0){
          
    document.getElementById("error").innerHTML="What do You work !!";

            }else if(checked < 2)
{
    document.getElementById("error").innerHTML="You have to choose 2 or more Types of Music !!";
  
}else if (mot != mot2 )
{
    document.getElementById("error").innerHTML="Passwords Should be similar !!";

}else if ((mot == "")||(mot2 ==""))
{
    document.getElementById("error").innerHTML="Password Should not be empty !!";
  
}else {

document.getElementById("error").innerHTML=msg;
}


}