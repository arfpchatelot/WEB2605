

async function chargerEtGenererDiapo() {
  try {
    const response = await fetch("./assets/js/listeobjets.json");

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
   generer_diapo(data);
  } catch (error) {
    console.error("Impossible de charger les objets :", error);
  }
}  
chargerEtGenererDiapo();


const Wrap= document.querySelector(".carousel-inner");


function generer_diapo(_data){

for (let i = 0; i < _data.length; i++) {
   
const myObj= _data[i];

const mySlide= document.createElement("div");
mySlide.className="carousel-item"; 
if (i==0) {
mySlide.classList.add("active");}
const myImg= document.createElement("img");
myImg.setAttribute("src", `./assets/img/${myObj.id}.jpg`);
myImg.className="d-block w-100";
myImg.setAttribute("alt", myObj.alt);
mySlide.appendChild(myImg);
Wrap.appendChild(mySlide);
const divInner= document.createElement("div");
divInner.className="carousel-caption d-none d-md-block";
mySlide.appendChild(divInner);
const myTitle= document.createElement("h5");
myTitle.textContent=myObj.titre;
divInner.appendChild(myTitle);

}




}