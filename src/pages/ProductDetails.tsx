import { useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";

type productProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

const ProductDetails = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products/1"
  );

  const [product, setProduct] = useState<productProps | null>(null);

  useEffect(() => {
    if (data) {
      setProduct(data);
      console.log(product)
    }
  }, [data]);

  return (
    <main>
      {loading && <Loader />}
      {!loading && error ? (
        <ErrorMessage />
      ) : (
        <>
          {product && (
            <>
              <div>
                <img src={product.image} alt={product.title} />
              </div>
              <div>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
              </div>
            </>
          )}
        </>
      )}
    </main>
  );
};

export default ProductDetails;
