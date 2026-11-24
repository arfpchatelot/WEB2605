function creerCelluleTitre(accroche, contenu) {
let cellule = document.createElement("th");
cellule.textContent = contenu;
accroche.appendChild(cellule);
}




function creerTableau(_data) {
let crochet = document.getElementById("employes");
let entete = crochet.createTHead();
let lignetitre = entete.insertRow();
tabTitre =["EID", "full name", "email", "montly salary","years of birth", "actions"];
for (let i = 0; i < tabTitre.length; i++) {
   creerCelluleTitre(lignetitre,tabTitre[i]);
    
}

let corpstableau = crochet.createTBody();
// corpstableau.setAttribute("id", "mytable");
// for (let i = 0; i < _data.data.length; i++) {
// let row = corpstableau.insertRow();
// monObjet = _data.data[i];
// for (var key in monObjet) {
// let cell = row.insertCell();
// cell.textContent = monObjet[key];
// }

//  }
}

// fetch("./assets/employes.json")
// .then(response => { return response.json()})
// .then((response) => {

// tabledata = response.data;
// creerTableau(tabledata);
// console.log(tabledata);

// })

async function loadEmployee()
{

try {

const response= await fetch("./assets/employes.json");
if(response.status!=200 ) 
{
throw new Error(`erreur http : ${response.status}`);
}
 const mydata= await response.json();
tabledata=[];
tabledata= mydata.data;
 creerTableau(tabledata);
console.log(mydata);

} catch (error) {
    console.error("impossible de charger les objets",error);
}
}

loadEmployee();