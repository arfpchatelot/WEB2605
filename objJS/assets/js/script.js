fetch('./assets/json/employes.json')
.then(response => response.json())
.then(data =>console.log(data)


)
.catch(error => console.error("Erreur : " + error));