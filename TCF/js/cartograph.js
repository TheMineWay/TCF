/* Script diseñado para generar selectores de ubicaciones del mapa */

let getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};
let world = {};

/* HTML IMPLEMENTATION */
async function ImplementFullLocationForm(countrySelectId, regionSelectId) {
    await getJSON('https://raw.githubusercontent.com/country-regions/country-region-data/master/data.json',async (error, data) => {
        world = data;
        
        // Data is on the device!
        const countrySelect = document.getElementById(countrySelectId);
        countrySelect.innerHTML = "<option hidden selected>Selecciona un país</option>";
        for(let country of world) {
            //console.log(country.countryName);
            countrySelect.innerHTML += `<option>${country.countryName}</option>`;
        }
        const regionSelect = document.getElementById(regionSelectId);
        countrySelect.addEventListener('input',() => {
            regionSelect.innerHTML = "<option hidden selected>Selecciona una región</option>";
            for(let region of FindCountry(countrySelect.value).regions) {
                regionSelect.innerHTML += `<option>${region.name} (${region.shortCode})</option>`;
            }
        });
    });

    function FindCountry(name) {
        for(let country of world) {
            if(name == country.countryName) return country;
        }
    }
}

/* Diseñado por Joel Campos */