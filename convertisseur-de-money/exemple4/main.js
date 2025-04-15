
function tndconv(){
    let aff=document.getElementById("res");
    let x=parseFloat(document.getElementById("tnd").value);
    const choix1=document.getElementById("eur");
    const choix2=document.getElementById("usd");
    if(isNaN(x)){
        alert("Entrer un montant valide.");
        return;
    }
    let res1,res2;
    if(choix1.checked && choix2.checked){
        res1=(x*0.29).toFixed(2);
        res2=(x*0.33).toFixed(2);
        aff.textContent=`${res1} Euros\n${res2} Usd`;
    }else if(choix1.checked){
        res1=(x*0.29).toFixed(2);
        aff.textContent=`${res1} euros`;
    }else if(choix2.checked){
        res2=(x*0.33).toFixed(2);
        aff.textContent=`${res2} Usd`;
    }else{
        alert("faire un choix");
        return;
    } 
}