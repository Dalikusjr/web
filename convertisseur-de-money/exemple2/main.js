
function tndconv(){
    let x=parseFloat(document.getElementById("tnd").value);
    const choix1=document.getElementsByName("choix")[0];
    const choix2=document.getElementsByName("choix")[1];
    if(isNaN(x)){
        alert("Entrer un montant valide.");
        return;
    }
    let res;
    if(choix1.checked){
        res=(x*0.29).toFixed(2);
    }else if(choix2.checked){
        res=(x*0.33).toFixed(2);
    }else{
        alert("faire un choix");
        return;
    } 
    document.getElementById("res").value=`${res} euros`;
}