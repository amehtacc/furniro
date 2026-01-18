import React from "react";
import { useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import useProduct from "../contexts/ProductContext";
import filterById from "../utils/filterById";
import LoadingSpinner from "../components/LoadingSpinner";
import RelatedProducts from "../components/RelatedProducts";
import Usp from "../components/Usp";
import Button from "../components/Button";
import useCart from "../contexts/CartContext";

function ProductDetail() {
  const { products, loading } = useProduct();
  const { cart, setCart } = useCart();

  const { skuId } = useParams();

  const product = filterById(skuId, products);
  const productDetail = product[0];

  const cartItems = cart;

  function handleAddToCart() {
    const hasProduct = cartItems.find((item) => item.id === productDetail.id);

    if (hasProduct) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === productDetail.id
            ? { ...item, product_count: item.product_count + 1, total_price: (item.product_count + 1) * (item.discount_price) }
            : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...productDetail, product_count: 1, total_price: 1 * productDetail.discount_price }]);
    }
  }

  return (
    <div className="w-full h-full">
      <div className="w-full bg-[#F9F1E7] pt-20">
        <div className="w-full h-full flex items-center gap-5 px-20  py-7">
          <span className="text-[#9F9F9F]">Home</span>
          <ChevronRight className="w-5 h-5" />
          <span className="text-[#9F9F9F]">Shop</span>
          <ChevronRight className="w-5 h-5" />
          <div className="w-0.5 h-6 bg-[#9F9F9F]"></div>
          <span>{productDetail?.name}</span>
        </div>
      </div>

      <section className="w-full h-full px-10 md:px-20 xl:px-30 pt-20">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="flex flex-col md:flex-row items-start justify-center gap-28">
            <div className="w-full md:w-1/2 flex items-center justify-end">
              <div className="max-w-125 max-h-125 aspect-square rounded-xl overflow-hidden">
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                  src={productDetail?.image_path}
                  alt={productDetail?.name}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-full">
                <h2 className="text-4xl mb-4">{productDetail?.name}</h2>
                <div className="font-medium text-2xl text-[#636363] flex flex-col items-start gap-1 leading-none mb-3">
                  ${productDetail?.discount_price}
                  <span className="text-sm text-[#747474] font-normal leading-none flex items-center">
                    List Price:
                    <span className="line-through pl-1">
                      ${productDetail?.price}
                    </span>
                  </span>
                </div>

                <p className="text-[#747474] mb-5">
                  <span
                    className={`${
                      productDetail?.stock > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    In Stock:
                  </span>
                  <span className="pl-3 pr-1 text-black">
                    {productDetail?.stock > 0
                      ? productDetail?.stock
                      : "Out of stock"}
                  </span>
                </p>

                <p className="mb-5">{productDetail?.description}</p>

                <p className="text-[#747474] mb-3">
                  Dimensions:
                  <span className="pl-3 pr-1 text-black">
                    {productDetail?.dimensions?.width}W
                    <span className="mx-2">X</span>
                    {productDetail?.dimensions?.height}H
                    <span className="mx-2">X</span>
                    {productDetail?.dimensions?.depth}D
                  </span>
                  inches
                </p>

                <p className="text-[#747474] mb-3">
                  Wood Type:
                  <span className="pl-3 pr-1 text-black">
                    {`${productDetail?.wood_type
                      .charAt(0)
                      .toUpperCase()}${productDetail?.wood_type.slice(1)}`}
                  </span>
                </p>

                <p className="text-[#747474] mb-3">
                  Finish:
                  <span className="pl-3 pr-1 text-black">
                    {`${productDetail?.finish
                      .charAt(0)
                      .toUpperCase()}${productDetail?.finish.slice(1)}`}
                  </span>
                </p>

                <div className="w-full my-10">
                  <Button
                    variant="outline"
                    size="md"
                    className="font-semibold w-full"
                    onClick={handleAddToCart}
                  >
                    Add To Cart
                  </Button>
                </div>

                <hr className="text-[#D9D9D9] mt-10 mb-8" />

                <div className="text-[#747474] text-sm ">
                  <table className="table-auto border-separate border-spacing-y-3">
                    <tbody>
                      <tr>
                        <td>Category</td>
                        <td className="px-3">:</td>
                        <td>
                          <span className="text-black">
                            {`${productDetail?.category
                              .charAt(0)
                              .toUpperCase()}${productDetail?.category.slice(
                              1
                            )}`}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>SKU</td>
                        <td className="px-3">:</td>
                        <td>
                          <span className="text-black">
                            {productDetail?.sku}
                          </span>
                        </td>
                      </tr>
                      {productDetail?.tags && (
                        <tr>
                          <td>Tags</td>
                          <td className="px-3">:</td>
                          <td>
                            <span className="text-black">
                              {productDetail?.tags}
                            </span>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="w-full h-full px-10 md:px-20 xl:px-30 py-20">
        <div className="w-full flex flex-col items-start justify-center gap-10">
          <h3 className="text-3xl text-left font-medium">Related Products</h3>
          <div className="w-full">
            {loading ? (
              <LoadingSpinner />
            ) : (
              <RelatedProducts category={productDetail?.category} />
            )}
          </div>
        </div>
      </section>

      <section className="w-full">
        <Usp />
      </section>
    </div>
  );
}

export default ProductDetail;
