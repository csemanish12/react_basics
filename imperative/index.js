// fetch existing element
const div = document.getElementById("root")

// create new element
const h1 = document.createElement("h1")

// add some text
h1.textContent = "This is an imperative way to program"

// assign an attribute
h1.className = "header"

// append child node
div.appendChild(h1)