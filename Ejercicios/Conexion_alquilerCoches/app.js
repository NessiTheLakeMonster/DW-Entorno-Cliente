

/* const options =  {
    method : "POST",
    body: JSON.stringify(jsonData)
};

fetch(url, options) 
    .then(response => response.text())
    .then(data => console.log(data))

 */

    getCoches();

async function getCoches() {
    let headersList = {
        "Accept": "*/*"
    }

    let response = await fetch("http://127.0.0.1:8000/api/coches/listarCoches", {
        method: "GET",
        headers: headersList
    });

    let data = await response.text();
    console.log(data);
}