function Check() {
    const auth = document.getElementsByName("auth");
    const noauth = document.getElementsByName("noauth");

    const isAuth = (sessionStorage.getItem("auth") || "noauth") == "auth";
    for(el of noauth) el.removeAttribute("hidden");
    for(el of auth) el.removeAttribute("hidden");
    if(isAuth) {
        //console.log("Auth");
        for(el of noauth) el.setAttribute("hidden","");
    } else {
        //console.log("No auth");
        for(el of auth) el.setAttribute("hidden","");
    }
}

Check();

function Login() {
    sessionStorage.setItem("auth","auth");
    sessionStorage.setItem("email",document.getElementById("email").value); // <--- Almacenamiento de información en sesión
    Check();
}
function Logout() {
    sessionStorage.setItem("auth","noauth");
    Check();
}