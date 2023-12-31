import useFetch from "../hooks/useFetch";
import Search from "../components/Search";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

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

  console.log(data)

  return (
    <div className="mt-4 px-5 flex flex-col items-center">
      {loading && (
        <Loader />
      )}
      {!loading && error ? (
        <ErrorMessage />
      ) : (
        <div className="flex flex-col items-center">
          {/* Search */}
          {!loading && (
            <Search />
          )}
          <main className="mt-3 grid grid-cols-3 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {(data as product[]).map((item) => (
              <article className="bg-white flex flex-col p-4 rounded cursor-pointer overflow-hidden group">
                <div className="flex justify-center h-40 overflow-hidden">
                  <img
                    className="h-full object-cover group-hover:scale-125 transition-all duration-500"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <h3 className="mt-2 text-primary-dark-blue font-medium leading-tight line-clamp-1">{item.title}</h3>

                <div className="flex flex-col mt-auto gap-y-1">
                  <span className="text-lg font-bold">{`$${item.price}`}</span>
                  <button className="py-2.5 font-medium bg-primary-yellow hover:bg-secondary-yellow transition">
                    Add to cart
                  </button>
                </div>
              </article>
            ))}
          </main>
        </div>
      )}
    </div>
  );
};

export default Home;
