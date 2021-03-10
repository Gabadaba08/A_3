//Set up variables for the different elements
var mainContainer = document.getElementById("mainContainer");
var inputForm = document.getElementById("inputForm");
inputForm.addEventListener("submit", addItem);

function addItem() {
    //More elements, and buttons
    var input = document.getElementById('inputBox');
    var div = document.createElement("div");
    div.style.margin = "1vh";
    // div.style.fontSize = "3vh";
    var spanEl = document.createElement("span");


    var deleteBtn = div.appendChild(document.createElement("button"));
    deleteBtn.addEventListener("click", remove);    //calls upon the remove() function
    deleteBtn.innerHTML = "☓";
    deleteBtn.style.margin = ".2vh";
    deleteBtn.style.fontSize = "2vh";

    var checkBtn = div.appendChild(document.createElement("button"));
    checkBtn.addEventListener("click",check);   //calls upon the check() function
    checkBtn.innerHTML = "✓";
    checkBtn.style.margin = ".2vh";
    checkBtn.style.fontSize = "2vh";

    div.appendChild(spanEl);    //adds all the buttons and the parent div
    div.appendChild(checkBtn);
    div.appendChild(deleteBtn);
    spanEl.innerText = input.value; //sets the added "item" as the string value fetched from the text box
    spanEl.style.fontSize = "3vh";
    mainContainer.appendChild(div); //adds the "item" to the list

    input.value = "";   //Empties the text box
}

function remove() {
    mainContainer.removeChild(this.parentElement);
}
function check() {
    if(this.parentElement.style.textDecoration !== "line-through") {
        this.parentElement.style.textDecoration = "line-through";
        this.parentElement.style.color = "gray";
    } else {
        this.parentElement.style.textDecoration = "none";
        this.parentElement.style.color = "black";
    }


}