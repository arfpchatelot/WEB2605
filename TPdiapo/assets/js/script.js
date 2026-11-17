function generer_diapo(mesData) 
{
  let divWrapp = document.createElement("div");
  divWrapp.id = "carouselExampleCaptions";
  divWrapp.className = "carousel";
  divWrapp.classList.add("slide");

  let divBtn = document.createElement("div");
  divBtn.className = "carousel-indicators";

  for (let i = 0; i < mesData.length; i++) {
    let obj = mesData[i];
    let btnCarousel = document.createElement("button");
    btnCarousel.setAttribute("type", "button");
    btnCarousel.setAttribute("data-bs-target", "#carouselExampleCaptions");
    btnCarousel.setAttribute("data-bs-slide-to", i);
    if (i == 0) {
      btnCarousel.className = "active";
      btnCarousel.setAttribute("aria-current", "true");
    }
    btnCarousel.setAttribute("aria-label", "Slide " + obj.id);
    divBtn.appendChild(btnCarousel);
  }
  divWrapp.appendChild(divBtn);

  let divInner = document.createElement("div");
  divInner.className = "carousel-inner";
 
  for (let i = 0; i < mesData.length; i++) {
    let obj = mesData[i];
    if (i == 0) {
      console.log("./assets/img/" + obj.id + ".jpg");
      let monDiv = document.createElement("div");
      monDiv.className = "carousel-item active";
      let monImg = document.createElement("img");
      monImg.setAttribute("src", "./assets/img/" + obj.id + ".jpg");
      monImg.setAttribute("alt", obj.alt);
      monImg.className = "d-block";
      monImg.classList.add("w-100");
      monDiv.appendChild(monImg);
      let legend = document.createElement("div");
      legend.setAttribute("class", "carousel-caption d-none d-md-block");
      monDiv.appendChild(legend);

      let titreLegend = document.createElement("h5");
      titreLegend.textContent = obj.titre;
      legend.appendChild(titreLegend);
      let textLegend = document.createElement("p");
      textLegend.innerText = obj.alt;
      legend.appendChild(textLegend);
      divInner.appendChild(monDiv);
    } else {
      let monDiv = document.createElement("div");
      monDiv.className = "carousel-item";
      let monImg = document.createElement("img");
      monImg.setAttribute("src", "assets/img/" + obj.id + ".jpg");
      monImg.setAttribute("alt", obj.alt);
      monImg.className = "d-block";
      monImg.classList.add("w-100");
      monDiv.appendChild(monImg);
      let legend = document.createElement("div");
      legend.setAttribute("class", "carousel-caption d-none d-md-block");
      monDiv.appendChild(legend);

      let titreLegend = document.createElement("h5");
      titreLegend.textContent = obj.titre;
      legend.appendChild(titreLegend);
      let textLegend = document.createElement("p");
      textLegend.innerText = obj.alt;
      legend.appendChild(textLegend);
      divInner.appendChild(monDiv);
    }
     divWrapp.appendChild(divInner);
  }

let btnLeft= document.createElement("button");
btnLeft.className="carousel-control-prev";
btnLeft.setAttribute("type", "button");
btnLeft.setAttribute("data-bs-target" , "#carouselExampleCaptions");
btnLeft.setAttribute("data-bs-slide","prev");

let arowLeft= document.createElement("span");
arowLeft.className="carousel-control-prev-icon";
arowLeft.setAttribute("aria-hidden","true");
btnLeft.appendChild(arowLeft);
let arowText=document.createElement("span");
arowText.className="visually-hidden";
arowText.textContent="precedente";
btnLeft.appendChild(arowText);
divWrapp.appendChild(btnLeft);


let btnRight= document.createElement("button");
btnRight.className="carousel-control-next";
btnRight.setAttribute("type", "button");
btnRight.setAttribute("data-bs-target" , "#carouselExampleCaptions");
btnRight.setAttribute("data-bs-slide","next");


let arowRight= document.createElement("span");
arowRight.className="carousel-control-next-icon";
arowRight.setAttribute("aria-hidden","true");
btnRight.appendChild(arowRight);
let arowTextR=document.createElement("span");
arowTextR.className="visually-hidden";
arowTextR.textContent="prochain";
btnRight.appendChild(arowTextR);
divWrapp.appendChild(btnRight);



    // divWrapp.innerHTML= '</div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div>';

document.querySelector("#diapo").appendChild(divWrapp);
}

fetch("./assets/js/listeobjets.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    generer_diapo(data);
  });
