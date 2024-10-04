//fait par Lenny

//fonction qui me permet d'éditer le texte
function editAll() { 
    const text = document.querySelectorAll(".editText");
    const name = document.querySelectorAll(".editName");
    const profession = document.querySelectorAll(".editProf");
    const edit_button = document.getElementById("edit-button");
    const end_button = document.getElementById("end-editing");

    edit_button.addEventListener("click", function () {
        name.forEach(function (name){
            name.classList.add("editClass");
            name.contentEditable = true;
        });
        profession.forEach(function (profession){
            profession.classList.add("editClass");
            profession.contentEditable = true;
        });
        text.forEach(function (text){
            text.classList.add("editClass");
            text.contentEditable = true;
        });
    });

    end_button.addEventListener("click", function () {
        name.forEach(function (name){
            name.classList.remove("editClass");
            name.contentEditable = false;
        });
        profession.forEach(function (profession){
            profession.classList.remove("editClass");
            profession.contentEditable = false;
        });
        text.forEach(function (text){
            text.classList.remove("editClass");
            text.contentEditable = false;
        });
    });
}
// fonction qui crée un clone d'une div et crée un nouveau child
function duplicate() { 
    let i = 0;
    let original = document.getElementById('exemple');
    let target = document.getElementById('teamMember');

    let clone = original.cloneNode(true);
    clone.id = "";
    target.appendChild(clone);
    editAll();
}
//fonction qui me permet de remove le dernier child de la div
function remove() { 
    let target = document.getElementById('teamMember');
    target.removeChild(target.lastChild);
}
//Permet execution après le chargement de la page
window.onload = function() {
    editAll();
};
