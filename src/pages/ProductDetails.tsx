import useFetch from "../hooks/useFetch"

interface productProps {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
  }

const ProductDetails = () => {

    const {data, loading, error} = useFetch("https://fakestoreapi.com/products/1");

  return (
    <>
    {(data as productProps[]).map((item)=>(
        <main>
            <div>
                <img src={item.image} alt={item.title} />
            </div>
            <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>
        </main>
    ))}
    </>
  )
}

export default ProductDetails