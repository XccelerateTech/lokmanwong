// Write a function that takes an id as a parameter, it should look for an element with that id and remove all it’s child elements.


// function removeElement (id){
//    var getId = document.getElementById(id);
   
//    getId.innerHTML = "";
//    console.log(getId);

// }

removeElement("info-field")

function removeElement (id) {
    var getId = document.getElementById(id);
    getId.innerHTML = "";
    console.log(getId);

}

removeElement("info-field")