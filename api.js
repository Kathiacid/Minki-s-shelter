const apiKey = 'live_SUz5SKlMmNnMMnSLKMZXIPKwJiK5P4Cl6CYYKSetcYir73uF648V4BDkTSRGiQSq';  // Sustituye con tu propia API key
const apiUrl = `https://api.thecatapi.com/v1/breeds`;

async function fetchCatBreeds() {
    const breedContainer = document.getElementById('breed-container'); // Asegúrate de tener este contenedor
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'x-api-key': apiKey
            }
        });
        
        if (!response.ok) {  // Verificamos si la respuesta es válida
            throw new Error('Network response was not ok');
        }

        const breeds = await response.json();

        if (breeds.length === 0) {
            breedContainer.innerHTML = '<p>No cat breeds found.</p>';
            return;
        }

        breeds.forEach(breed => {
            const breedDiv = document.createElement('div');
            breedDiv.classList.add('breed-item');

            breedDiv.innerHTML = `
                <h3>${breed.name}</h3>
                <img src="${breed.image ? breed.image.url : 'https://via.placeholder.com/200'}" alt="${breed.name}">
                <p>${breed.description}</p>
            `;
            breedContainer.appendChild(breedDiv);
        });
    } catch (error) {
        console.error('Error fetching cat breeds:', error);
        breedContainer.innerHTML = `<p>Sorry, we couldn't load the cat breeds at this time.</p>`;
    }
}

window.onload = fetchCatBreeds;
