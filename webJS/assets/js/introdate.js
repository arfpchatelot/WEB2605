const txtBirthday = document.getElementById("birthday");
const btnCalculate = document.querySelector("#calculate");
// on va chercher la section dans la page
const mySection = document.querySelector("section");
// on va chercher la section2 dans la page
const mySection2 = document.querySelector("#signe");


//gestion du tableau de chaines indicés
const zodiaque = "Bélier,Taureau,Gémeaux,Cancer,Lion,Vierge,Balance,Scorpion,Sagittaire,Capricorne,Verseau,Poissons";
let tabzodiaque = zodiaque.split(",");

//creation de l'element ul de liste à puce 
const listeZodiaque = document.createElement("ul");
listeZodiaque.id = "signes";
listeZodiaque.classList.add("zodiaque");
//listeZodiaque.className="zodiaque";
mySection2.appendChild(listeZodiaque);
 
//pour créer un elément li
function createLi(_signeAstro) {
    let myliSigne = document.createElement("li");
    myliSigne.className = "zodiaque";
    myliSigne.textContent = _signeAstro;
    listeZodiaque.appendChild(myliSigne);
  }
//pour créer une image
function createImg(_urlimg, _nameImg,_hook){
    const myImg=document.createElement("img");
     // myImg.src=_urlimg;
      myImg.setAttribute("src",_urlimg);
      myImg.id=_nameImg;
      myImg.setAttribute("alt",_nameImg);
      myImg.setAttribute("style","width:200px;height:auto");
       _hook.appendChild(myImg); 
  }


function calculateAge() {

  let chaineBirthday = txtBirthday.value;
  console.log(chaineBirthday);
  //récupératon et gestion de la date
  let delay = Date.parse(chaineBirthday); // durée en milliseconde depuis 1er janvier 1970 à minuit
  const birthDate = new Date(delay); //creation de l'objet date
  let birthDay = birthDate.getDate();
  let birthMonth = birthDate.getMonth() + 1;
  
  console.log("mois : " + birthMonth + " jour" + birthDay);

 const today = new Date(); // creation de l'objet date du jour
 //creation de l'element paragraphe
//supression des éléments enfant de la section.
 for (let i= mySection.childNodes.length-1; i >=0; i--) {
   mySection.removeChild(mySection.childNodes[i]);
 }; 
  const validationSummarize = document.createElement("p"); //creation d'un paragraphe HTML
  validationSummarize.id = "test"; //ajout d'un id pour utile pour JS
  validationSummarize.className = "summarize"; // ajout d'une classe pour mise en forme
  mySection.appendChild(validationSummarize);

if (birthDate > today) {
    // on rajoute le paragraphe dans la section
    validationSummarize.textContent =
      "Erreur la date doit être dans le passé !"; // on rajoute du texte dans le paragraphe
    /*alert("Erreur la date doit être dans le passé");
        Affichage d'une fenêtre modale dans le navigateur avec bouton ok   
       */
    /* console.error("Erreur la date doit être dans le passé"); 
        Affichage de l'erreur dans la console du navigateur F12*/
  } else {
    let userDate = birthDate.toLocaleDateString("fr-FR");
    let userTime = birthDate.toLocaleTimeString();
    validationSummarize.innerHTML = `Vous êtes né le<span class="bleu"> ${userDate}</span> à <span class="bleu"> ${userTime} </span>`;
   let dateDiff = today - birthDate;
    //v1
    let nbyear = today.getFullYear() - birthDate.getFullYear();
    //v2
    let nbYearV2 = Math.floor(dateDiff / 1000 / 60 / 60 / 24 / 365.25);
   validationSummarize.innerHTML += ` <br> Il s'est écoulé <span class="bleu"> ${nbyear}</span> années depuis votre naissance.`;
  }
// gestion du signe du Zodiaque avec un switch case 
  switch (birthMonth) {
    case 1:  
    listeZodiaque.childNodes.forEach((el) => {el.remove();});
      if (birthDay > 19) {
        //verseau
        console.log("verseau");
        createLi(tabzodiaque[10]);
        createImg("./assets/img/verseau.png","Verseau", mySection);

      } else {
        //capricorne
        console.log("capricorne");
        createLi(tabzodiaque[9]);
        createImg("./assets/img/capricorne.png","capricorne", mySection);
      }
      break;

    case 2:
    listeZodiaque.childNodes.forEach((el) => {
        el.remove();
      });
  
      if (birthDay > 18) {
        console.log("poisson");

        createLi(tabzodiaque[11]);
      
      } else {
        //verseau
        console.log("verseau");

        createLi(tabzodiaque[10]);
        createImg("./assets/img/verseau.png","Verseau", mySection);

       
      }

      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      break;
    case 7:
      break;
    case 8:
      break;
    case 9:
      break;
    case 10:
      break;
    case 11:
      break;
    case 12:
      break;

    default:
      console.error("error sur la valeur du mois");
      break;
  }

 
  
}

btnCalculate.addEventListener("click", function () {
  calculateAge();
});
