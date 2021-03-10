/* JS FOR TCF COMPONENTS */

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