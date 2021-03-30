/*
    Simulador de conexión con base de datos no SQL (firebase.com).
*/

const BBDD = {
    money: 12891,
    entries: [
        {
            title: "Vodafone",
            money: -39,
            details: "Cobro mensual del WiFi de casa",
            date: "30/3/2021"
        },
        {
            title: "Alquiler",
            money: -3200,
            details: "Cobro mensual del alquiler en Barcelona",
            date: "29/3/2021"
        },
        {
            title: "Endesa",
            money: -250,
            details: "Cobro mensual de la luz",
            date: "29/3/2021"
        },
        {
            title: "Hacienda",
            money: -352,
            details: "Sabes que, mejor nos lo quedamos. Hacienda somos todos (unos más que otros)",
            date: "29/3/2021"
        },
        {
            title: "Hacienda",
            money: 352,
            details: "Esto... que te debemos dinero",
            date: "28/3/2021"
        },
        {
            title: "Google AdSense",
            money: 5329,
            details: "Beneficios mensuales de <i>passwords.themineway.com</i>",
            date: "27/3/2021"
        },
        {
            title: "Chess.com",
            money: -25,
            details: "Cobro anual de tu suscripción premium",
            date: "22/3/2021"
        },
        {
            title: "The elephant language",
            money: -499,
            details: "Curso de PHP avanzado",
            date: "21/3/2021"
        },
        {
            title: "Firebase Blaze Plan",
            money: -22,
            details: "Cobro mensual por los servicios de Firebase utilizados",
            date: "29/3/2021"
        }
    ]
}

function DisplayData() {
    const entries = document.getElementById("entries");
    entries.innerHTML = "";
    for(const entry of BBDD.entries) {
        let good = entry.money > 0 ? "good" : "bad";
        if(entry.money == 0) good = "";
        entries.innerHTML += `
        <div class="entry">
            <input type="checkbox" class="checkbox">
            <p class="title">${entry.title}</p>
            <p class="value ${good}">${entry.money}€</p>
            <p class="subject">${entry.details}</p>
            <p class="title">${entry.date}</p>
        </div>`;
    }
}