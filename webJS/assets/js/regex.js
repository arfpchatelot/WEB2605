
const mybtnSubmit= document.getElementById("valider");
const txtName=document.querySelector("#myName");
const chaine1 = document.querySelector("#myPassword1");
 const chaine2= document.querySelector("#myPassword2");
 const txtPhone= document.querySelector("#myPhone");
 const txtdate=document.getElementById("myBirthDate");

mybtnSubmit.addEventListener("click",
    function(event){
        event.preventDefault();

        const myForm=document.querySelector("form");

        if (
            validateBirthDate(txtdate.value)&&
            validateName(txtName.value)==true  
        && validatePhoneNumber(txtPhone.value)==true 
      //  && validatePassword(chaine1,chaine2)==true
     
    ) {
        
    
            myForm.submit();   
        }else{

            alert("saisie du nom incorrect! numero faux, ou date anniv fausse ");
        }

    }
)
/**
 * documentation d'une fonction
 * @param {*} chaine 
 */

function validateName(chaine)
{ 
    let regexName=/^[A-Z][a-z]{3,}$/;
    
    return regexName.test(chaine);
}
/**
 * Valider que les 2 mots de passe sont identiques 
 * ET
 * longueur de 12 caractères minimum
 * au moins 1 majuscule 
 * au moins 1 minuscule 
 * au moins 1 chiffre 
 * @param {*} chaine1  
 * @param {*} chaine2 
 * @returns 
 */
function validatePassword(chaine1,chaine2)
{
if (chaine1===chaine2) {
    
    return true;
}
return false;
}
/**
 * validation conformité du numero de téléphone * Remplacer les points et les espaces par une chaine vide.
 * 0607080910
 * +33607080910
 * 01 / 02 / 03 / 04 / 05 / 06 / 07 / 09
 * @param {} inputchaine 
 * @returns
 */
function validatePhoneNumber(_inputchaine)
{ let chaine=""+_inputchaine;
    const regexDotSpace=/\.|\s/g; 
 chaine =chaine.replaceAll(regexDotSpace,"");
   const regexPhone= /^0[1-79][0-9]{8}$/g;

     console.log("test");
    if (regexPhone.test(chaine)) {
 console.log(chaine);
      
        return true ;
    }
    return false;
}

/**
 * Contrôle la validité d'une date
 * @param {String} _birthDate la date à vérifier
 * @returns {Boolean} 
 */
function validateBirthDate(_birthDate) {
   // console.log(_birthDate);
    try {
        const dateTest = new Date(_birthDate);
        console.log(dateTest);
        if(isNaN(dateTest)) {
            throw new Error();
        } 

        return true;

    } catch(error) {
        console.log('Date non valide');
        return false;
    }   
}