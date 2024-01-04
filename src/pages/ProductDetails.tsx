import { useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

type productProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};

const ProductDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  const [product, setProduct] = useState<productProps | null>(null);

  useEffect(() => {
    if (data) {
      setProduct(data);
      console.log(product);
    }
  }, [data]);

  return (
    <div className="mt-5 px-8 flex flex-col items-center">
      {loading && <Loader />}
      {!loading && error ? (
        <ErrorMessage />
      ) : (
        <>
          {product && (
            <div className="px-5 bg-slate-50">
              <main className="flex bg-slate-50">
                <div className="w-1/3 max-w-72 overflow-hidden">
                  <img
                    className="object-cover w-full h-full"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="px-5 py-2">
                  {/* Title */}
                  <div className="flex">
                    <h2 className="text-3xl font-medium leading-tight">
                      {product.title}
                    </h2>
                    <button className="self-start mt-3">
                      <FaRegHeart />
                    </button>
                  </div>

                  <div className="mt-2">
                    <span className="block text-3xl font-bold">${product.price}</span>
                    <span className="mt-2 block text-lg italic font-medium">
                      Category:{" "}
                      <Link
                        to={`/${product.category}`}
                        className="not-italic text-primary-blue hover:underline underline-offset-2 capitalize"
                      >
                        {product.category}
                      </Link>
                    </span>
                    <span className="text-lg italic font-medium">
                      Rating:{" "}
                      <small className="text-lg text-primary-green font-medium">
                        {product.rating.rate}
                      </small>
                    </span>
                  </div>
                </div>

                <aside>
                  <button>Order now</button>
                </aside>
              </main>

              {/* Descriptions */}
              <section className="mt-5">
                <h3>Product Description</h3>
              </section>

            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductDetails;
