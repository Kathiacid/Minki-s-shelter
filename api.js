async function getpet(){
    const apiKey='live_SUz5SKlMmNnMMnSLKMZXIPKwJiK5P4Cl6CYYKSetcYir73uF648V4BDkTSRGiQSq';
    const url=`https://api.thecatapi.com/v1/breeds`;

    const response= await fetch(url,{
        method:'GET',
        headers: {
            'x-api-key': apiKey
        }
    })
    return response.json()
}

async function desgloce(){
    const contenedor=document.querySelector("#breed-list")
    const datos= await getpet()
    console.log(datos)
    for(let pet of datos){
        console.log(pet['image']['url']);
        contenedor.insertAdjacentHTML("beforebegin",`
            <h2>${pet.name}</h2>
            <span>${pet.origin}</span>
            <img src="${pet['image']['url']}">
            <p>${pet.description}</p>
            `)
    }
}

desgloce();
