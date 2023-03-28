const h = document.createElement("h1")
h.textContent = "Hello World"
h.className =  "header"
console.log(h)
// return html element
// <h1 class="header">

// use parenthesis for multiple lines
const nav = (
    <nav>
    <h1>My Brand Name</h1>
    <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    </nav>
)
console.log(nav)
// returns json object
/*
{$$typeof: Symbol(react.element), type: 'nav', key: null, ref: null, props: {…}, …}
*/

ReactDOM.render(nav, document.getElementById("root"))