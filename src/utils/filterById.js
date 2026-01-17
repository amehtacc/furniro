export default function filterById(sku, products) {
    if(!sku) return console.error("Product id doesn't match");
    
    return products.filter((product) => product.sku === sku)
}