import api from "./api.js"

export function getProducts(LIMIT, offset) {
    return api.get(`/products?limit=${LIMIT}&offset=${offset}`)
}

export function getProductDetail(skuId) {
    return api.get(`/products/${skuId}`)
}