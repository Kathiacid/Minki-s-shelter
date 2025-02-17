async function getPet() {
    const apiKey = 'live_SUz5SKlMmNnMMnSLKMZXIPKwJiK5P4Cl6CYYKSetcYir73uF648V4BDkTSRGiQSq';
    const url = `https://api.thecatapi.com/v1/breeds`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'x-api-key': apiKey
            }
        });
        return response.json();
    } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
    }
}

async function desgloce() {
    const contenedor = document.querySelector("#breed-list");
    const datos = await getPet();
    
    console.log("Datos recibidos:", datos);

    for (let pet of datos) {
        // Verificar si la raza tiene imagen
        const imageUrl = pet.image?.url || "https://via.placeholder.com/300"; // Imagen por defecto si no hay

        contenedor.insertAdjacentHTML("beforeend", `
            <div class="breed-card">
                <h2>${pet.name}</h2>
                <span>${pet.origin}</span>
                <img src="${imageUrl}" alt="${pet.name}">
                <p>${pet.description}</p>
            </div>
        `);
    }
}

document.addEventListener("DOMContentLoaded", desgloce);
