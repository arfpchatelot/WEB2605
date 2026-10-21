const people = ['Mike Brant', 'John Makenzie', 'Ariana Grande'];
people.push("Dua Lipa");
people.unshift("Miley Cirrus");
people.push("Mark Ronson");

people.push( "Mary J.blige");

people.splice(people.length-1,1,"Mark Ronson");
people.pop();
const mylist= document.querySelector("ul");
mylist.style.listStyle="none";
mylist.style.marginLeft="0";
mylist.style.paddingLeft="0";

for (let i = 0; i < people.length; i++) {
    //console.log(people[i]+",");
const myItem= document.createElement("li");
myItem.className=" deco";
myItem.textContent=people[i];
mylist.appendChild(myItem);    
}

let chaine = "nom,prenom,mail";
let tabchaine= chaine.split(",");
// let mychaine= [...chaine];
 console.log(tabchaine);
const myTable= document.getElementById("singer");

const myThead= myTable.createTHead();
const myTitleRow=myThead.insertRow();

function insertTitleCell(_value, _hook )
{
    const myTitleCell= document.createElement("th");
    myTitleCell.style.fontWeight="bold";
    myTitleCell.textContent=_value;
    _hook.appendChild(myTitleCell);
}

for (let i = 0; i < tabchaine.length; i++) {
    insertTitleCell(tabchaine[i],myTitleRow)
}

function remplirTableau( _montab)
{
     const myBody= myTable.createTBody();
    myTable.appendChild(myBody);
    for (let i = 0; i < _montab.length; i++) {

        const myRow=myBody.insertRow();
        let tabData= _montab[i].split(" ");

        let nom =tabData[1];
        let prenom= tabData[0];
        let email= prenom+"."+ nom +"@example.com";
        let croix = '&#10005;';

        let cellNom= myRow.insertCell(); 
         cellNom.textContent=nom;
        let cellPrenom= myRow.insertCell(); 
        cellPrenom.textContent= prenom;
        let cellMail= myRow.insertCell();
        cellMail.textContent= email;
        let cellSuppr= myRow.insertCell();
        cellSuppr.innerHTML="<a href=# id='"+ i+"'>" +croix +"</a>";
        cellSuppr.style.textAlign="center";
        const btn= document.getElementById(i);
        btn.addEventListener("click", function (event) {event.preventDefault(); 
        people.splice(i,1);
        myBody.remove();
            remplirTableau(people);
        })
    }
}
remplirTableau(people);


