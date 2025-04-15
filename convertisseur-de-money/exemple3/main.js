
function tndconv(){
    let x=parseFloat(document.getElementById("tnd").value);
    const choix=document.getElementById("choix").value;
    if(isNaN(x)){
        alert("Entrer un montant valide.");
        return;
    }
    let res;
    if(choix=="eur"){
        res=(x*0.29).toFixed(2);
    }else if(choix=="usd"){
        res=(x*0.33).toFixed(2);
    }else{
        alert("faire un choix");
        return;
    } 
    document.getElementById("res").value=`${res} euros`;
}