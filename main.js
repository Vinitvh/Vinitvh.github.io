let css = document.querySelector("h3");
let color1 = document.querySelector("#type1");
let color2 = document.querySelector("#type2");
let body = document.getElementById("gradient");

let setGradient = () => {
    body.style.background = "linear-gradient(to right," + color1.value + ", " 
    + color2.value + ")";

    css.textContent = body.style.background + ","
} 

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);