/* JS FOR TCF COMPONENTS */
console.log("Cargado tcf.js (creado por Joel Campos)");

let fields = {};

function TogglePassword(btn, field) {
    const btndoc = document.getElementById(btn);
    const fielddoc = document.getElementById(field);
    fields[field] = !(fields[field] || false); //Reverse value

    btndoc.classList.remove("btn-primary");
    btndoc.classList.remove("btn-danger");
    
    if(fields[field]) {
        btndoc.innerHTML = "visibility";
        btndoc.classList.add("btn-danger");
        fielddoc.setAttribute("type","text");
    } else {
        btndoc.innerHTML = "visibility_off";
        btndoc.classList.add("btn-primary");
        fielddoc.setAttribute("type","password");
    }
}

let navs = {};

function NavToggle(id) {
    if(!(id in navs)) navs[id] = true;
    const navList = document.getElementById(id);
    
}

function getContrastYIQ(hexcolor){ // Esta función es copiada de Internet :(
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? 'black' : 'white';
} 

document.documentElement.style.setProperty('--color-primary', sessionStorage.getItem("theme")); // Aplicar tema
document.documentElement.style.setProperty('--color-contrast-primary', getContrastYIQ(sessionStorage.getItem("theme")));
//document.body.style.backgroundColor = getContrastYIQ(sessionStorage.getItem("theme"));