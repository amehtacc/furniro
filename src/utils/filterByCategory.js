function filterByCategory(products, category) {
  if (!category) return products;

  if (category === "dining") {
    return products.filter(
      (product) =>
        product.category === "kitchen" || product.category === "table"
    );
  } else if (category === "living") {
    return products.filter(
      (product) =>
        product.category === "sofa" ||
        product.category === "tv table" ||
        product.category === "lamp" ||
        product.category === "mirror"
    );
  } else if (category === "bedroom") {
    return products.filter(
      (product) =>
        product.category === "wardrove" ||
        product.category === "matress" ||
        product.category === "mirror" ||
        product.category === "desk"
    );
  } else {
    return products.filter((product) => product.category === category);
  }
}
export default filterByCategory;
