export default function filterBySearch(searchValue, products) {
    if(!searchValue.trim()) return [];

    const query = searchValue.toLowerCase();

    return products.filter((product) => product.name.toLowerCase().includes(query))
}