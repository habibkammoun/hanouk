function calculFacture(){
    document.getElementById("erreurProd").innerHTML="";
    document.getElementById("erreurPrix").innerHTML="";
    document.getElementById("erreurQte").innerHTML="";
let x =document.getElementById("prixHT").value;
let y =document.getElementById("qte").value;
document.getElementById("MontatnHT").innerHTML= x*y;
document.getElementById("TotTTC").innerHTML= x*y*1.18;
if( document.getElementById("prod").value==""){
    document.getElementById("erreurProd").className="incorrect";
    document.getElementById("erreurProd").innerHTML="Veuillez sélectionner un produit";
    document.getElementById("MontatnHT").innerHTML="";
    document.getElementById("TotTTC").innerHTML="";
}

if(x<0 || isNaN(x) || x==""){
    console.log(typeof (x));
    document.getElementById("erreurPrix").className="incorrect";
    document.getElementById("erreurPrix").innerHTML="Veuillez saisir une valeur numérique positive";
    document.getElementById("MontatnHT").innerHTML="";
    document.getElementById("TotTTC").innerHTML="";

}
if(y<0 || isNaN(y) || y==""){
    console.log(typeof (y));
    document.getElementById("erreurQte").className="incorrect";
    document.getElementById("erreurQte").innerHTML="Veuillez saisir une valeur numérique positive";
    document.getElementById("MontatnHT").innerHTML="";
    document.getElementById("TotTTC").innerHTML="";

}
}
console.log("mmmmmmmmmmmmmmmmmmmmmm")