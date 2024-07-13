document.addEventListener("DOMContentLoaded", () => {
const notes = document.querySelector("#notes");
const textAreaZone = document.querySelector("#note");

textAreaZone.setAttribute("readonly", true);

//variables 
const createBtn = document.querySelector("#create_btn");
const deleteBtn = document.querySelector("#delete_btn");
const searchContainer = document.querySelector("#searcher__container");
const searchInput = document.querySelector("#searcher__box");
const acceptBtn = document.querySelector("#accept__btn")

let newUlElement = null;


//creatind a hiden ul inside textAreaZone 
createBtn.addEventListener("click", () => {

    newUlElement = document.createElement("ul");

    textAreaZone.appendChild(newUlElement);
    console.log(newUlElement);

    searchContainer.style.display = 'block';
})

//created a function to toggle a search input 
createBtn.addEventListener("click", (event) => {
 event.preventDefault();
 const searchContainer = document.querySelector("#searcher__container");
 searchContainer.classList.toggle("show");

})


///created a text in a TextAreaZone
acceptBtn.addEventListener("click", (event) => {
    console.log("penis")
    event.preventDefault()

    const searchValue = searchInput.value;

        let li = document.createElement("li");
        li.textContent = searchValue;
        newUlElement.appendChild(li);
        console.log(searchValue);
        console.log("Added:", searchValue);

        li.className = "visibleText";

        searchInput.value = '';

    })

    ///delete all text and hide a searcher
    deleteBtn.addEventListener("click", () => {
        if (newUlElement) {
            newUlElement.remove();
            newUlElement = null;


            searchContainer.style.display = 'none';
        }
    })
})
