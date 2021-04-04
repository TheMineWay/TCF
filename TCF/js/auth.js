function Check() {
    const auth = document.getElementsByName("auth");
    const noauth = document.getElementsByName("noauth");

    const isAuth = (sessionStorage.getItem("auth") || "noauth") == "auth";
    if(isAuth) {
        console.log("Auth");
        for(el of noauth) el.setAttribute("hidden","");
    } else {
        console.log("No auth");
        for(el of auth) el.setAttribute("hidden","");
    }
}

Check();

function Login() {
    sessionStorage.setItem("auth","auth");
}
function Logout() {
    sessionStorage.setItem("auth","noauth");
}