
/*const zoneDate= document.getElementById("txtDate");*/
const zoneDate=document.querySelector("#txtDate");
const zoneheure=document.getElementById("txtHour");
function afficherDate () {

    let dateJour= new Date();
    let jour= (dateJour.getDate()<10)?"0"+dateJour.getDate():dateJour.getDate();
    let mois= (dateJour.getMonth()+1<10)?"0"+(dateJour.getMonth()+1): dateJour.getMonth()+1;
    let annee= dateJour.getFullYear();

    let chaineDate= annee +"-" +mois+"-"+jour;
    console.log(chaineDate);
   zoneDate.value=chaineDate;
}
function afficherHeure(){

    let maDate = new Date();
    let heure = (maDate.getHours()<10) ? "0"+maDate.getHours() : maDate.getHours();
    let minute = (maDate.getMinutes()<10) ? "0"+maDate.getMinutes() : maDate.getMinutes();
    let second = (maDate.getSeconds()<10) ? "0"+maDate.getSeconds() :maDate.getSeconds();

    let chaineHeure = heure + ":" + minute+":"+second ;
            console.log(chaineHeure);
            zoneheure.value=chaineHeure;
   setInterval(afficherHeure, 1000);
    //return chaineHeure;
}


const mybtnDate=document.getElementById("btnDate");
mybtnDate.addEventListener("click", function() {
afficherDate();
//console.log("test");
})


const mybtnHour= document.getElementById("btnHour");
mybtnHour.addEventListener("click", afficherHeure);