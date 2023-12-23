import useFetch from "../hooks/useFetch";

interface product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Home = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  return (
    <div className="mt-5 px-5">
      {loading && (
        <span className="mt-10 text-2xl text-primary-green block text-center">
          Loading...
        </span>
      )}
      {!loading && error ? (
        <span className="mt-10 text-2xl text-primary-red block text-center">
          Oops! Something went wrong.
        </span>
      ) : (
        <main className="grid grid-cols-3 gap-4">
          {(data as product[]).map((item) => (
            <article className="bg-slate-50 flex flex-col p-4 rounded cursor-pointer overflow-hidden">
              <div className="flex justify-center">
                <img
                  className="h-40 object-cover"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <h3 className="mt-2 text-primary-dark-blue font-medium leading-tight">
                {item.title}
              </h3>

              <div className="flex flex-col mt-auto gap-y-1">
                <span className="text-lg font-bold">{`$${item.price}`}</span>
                <button className="py-2.5 font-medium bg-primary-yellow hover:bg-secondary-yellow transition">
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </main>
      )}
    </div>
  );
};

export default Home;
