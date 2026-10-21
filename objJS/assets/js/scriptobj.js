const myEmployee = {
  lastname: "Doe",
  firstname: "John",
  birthday: "1981-11-12",
  salary: 2150,
};

const myTable = document.querySelector("#tabobj");
const myHead = myTable.createTHead();
const myTitleRow = myHead.insertRow();

for (const key in myEmployee) {
  const myTitleCell = document.createElement("th");
  myTitleRow.appendChild(myTitleCell);
  myTitleCell.textContent = key;
}

const myBody = myTable.createTBody();
const myRow = myBody.insertRow();
for (const key in myEmployee) {
  const myCell = myRow.insertCell();
  if (key == "salary") {
    myCell.textContent = myEmployee[key] + " €";
  } else if (key == "birthday") {
    const tabDate = myEmployee[key].split("-");
    myCell.textContent = tabDate[2] + "-" + tabDate[1] + "-" + tabDate[0];
  } else {
    myCell.textContent = myEmployee[key];
  }
}
