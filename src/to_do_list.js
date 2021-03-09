var mainContainer = document.getElementById("mainContainer");
var inputForm = document.getElementById("inputForm");
inputForm.addEventListener("submit", addItem);

function addItem() {
    var input = document.getElementById('inputBox');
    console.log(input.value);
    var div = document.createElement("div");
    div.classList.add("itemContainer");
    var spanEl = document.createElement("span");

    var deleteBtn = div.appendChild(document.createElement("button"));
    deleteBtn.addEventListener("click", remove);
    deleteBtn.innerHTML = "x";
    var checkBtn = div.appendChild(document.createElement("button"));
    checkBtn.addEventListener("click",check);
    checkBtn.innerHTML = "v";

    div.appendChild(spanEl);
    div.appendChild(deleteBtn);
    spanEl.innerText = input.value;
    mainContainer.appendChild(div);
}

function remove() {
    mainContainer.removeChild(this.parentElement);
}
function check() {
    if(this.parentElement.style.textDecoration !== "line-through") {
        this.parentElement.style.textDecoration = "line-through";
    } else {
        this.parentElement.style.textDecoration = "none";
    }


}