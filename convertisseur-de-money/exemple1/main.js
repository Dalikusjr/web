
function tndeuro(){
    let x=parseFloat(document.getElementById("tnd").value);
    if(isNaN(x)){
        alert("Entrer un montant valide.");
        return;
    }
    let res=(x*0.29).toFixed(2);
    document.getElementById("res").value=`${res} euros`;
}
function tndusd(){
    let x=parseFloat(document.getElementById("tnd").value);
    if(isNaN(x)){
        alert("Entrer un montant valide.");
        return;
    }
    let res=(x*0.33).toFixed(2);
    document.getElementById("res").value=`${res} usd`;
}