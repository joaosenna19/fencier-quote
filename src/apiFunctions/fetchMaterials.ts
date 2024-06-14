export async function fetchMaterials() {
    return await fetch("https://fencier-api.onrender.com/material")
        .then((response) => response.json());
}