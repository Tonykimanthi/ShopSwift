import { useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";

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
    <main className="mt-5 px-10 flex flex-col items-center">
      {loading && <Loader />}
      {!loading && error ? (
        <ErrorMessage />
      ) : (
        <>
          {product && (
            <article className="grid grid-cols-[40%_auto] bg-slate-50">
              <div className="place-self-center">
                <img
                  className="object-cover w-full h-full"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="px-5 py-2">
                <h2 className="text-3xl font-medium leading-tight">
                  {product.title}
                </h2>
                <p className="mt-2 text-2xl leading-tight">
                  {product.description}
                </p>
                <div>
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
            </article>
          )}
        </>
      )}
    </main>
  );
};

export default ProductDetails;
