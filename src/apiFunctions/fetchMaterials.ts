export async function fetchMaterials() {
    return await fetch(`${process.env.NEXT_PUBLIC_FENCIER_API_URL}/material`)
        .then((response) => response.json());
}
