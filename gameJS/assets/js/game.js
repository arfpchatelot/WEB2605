const myTable = document.querySelector("#cards");

function insertTitleCell(_value, _hook) {
  const myTitleCell = document.createElement("th");
  myTitleCell.style.fontWeight = "bold";
  myTitleCell.textContent = _value;
  _hook.appendChild(myTitleCell);
}

function displayTable(_data) {
  const myThead = myTable.createTHead();
  const MyTitleRow = myThead.insertRow();
  for (const key in _data[0]) {
    insertTitleCell(key, MyTitleRow);
  }
  const myTbody = myTable.createTBody();
  for (let i = 0; i < _data.length; i++) {
    const myRow = myTbody.insertRow();
    for (const key in _data[0]) {
      const myCell = myRow.insertCell();
      if (key === "description" && _data[i][key] == undefined) {
        myCell.textContent = "non renseigné";
      } else {
        myCell.textContent = _data[i][key];
      }
    }
  }
}

fetch("https://arfp.github.io/tp/web/javascript/03-cardgame/cardgame.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    displayTable(data);
  //  let carteMax = rechercheMaxAttack(data);
    let carteMax=searchMaxAttackTri(data);
    const affichageCarte = document.querySelector("#card");
    const joueurH2= document.querySelector("h2");
    joueurH2.innerText+= " "+ carteMax.name;
    const txtPlayed= document.querySelector("#played");
    const txtVictory=document.querySelector("#victory");
    txtPlayed.innerText+=" "+carteMax.played+ " ";
    txtVictory.innerText+=" "+carteMax.victory+" ";

    const txtPower =document.getElementById("p");
     const txtAttaque =document.getElementById("a");
     const txtDefense= document.getElementById("d");
     txtPower.innerText+= carteMax.power;
     txtAttaque.innerText+=carteMax.attack;
     txtDefense.innerText+=carteMax.armor;
    txtPower.style.color="violet";
    txtAttaque.style.color="red";
    txtDefense.style.color="blue";
      // for (const key in carteMax) {
    //   const myItem = document.createElement("p");
    //   myItem.innerText = key + ":" + carteMax[key];
    //   affichageCarte.appendChild(myItem);
    // }
    console.log(data);
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération ou du parsing :", error);
  });

function rechercheMaxAttack(_data) {
  let carteMaxAttack = _data[0];
  let valueMaxAttack = _data[0].attack;
  for (let i = 1; i < _data.length; i++) {
    if (_data[i].attack > valueMaxAttack) {
      valueMaxAttack = _data[i].attack;
      carteMaxAttack = _data[i];
    }
  }
  return carteMaxAttack;
}
function searchMaxAttackTri(_data) {
  const tabDecroissant = _data.sort((a, b) =>b.attack-a.attack);
  return tabDecroissant[0];
}
