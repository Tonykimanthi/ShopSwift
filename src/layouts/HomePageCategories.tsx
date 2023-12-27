const HomePageCategories = () => {
  const categories = [
    {
      title: "Electronics",
      image: "/images/electronics2.jpg",
      customStyles: "h-56",
    },
    {
      title: "Women's clothing",
      image: "/images/women-clothing2.jpg",
      customStyles: "h-56",
    },
    {
      title: "Jewelleries",
      image: "/images/jewellery2.jpg",
      customStyles: "h-56 col-span-2",
    },
    {
      title: "Men's clothing",
      image: "/images/men-clothing2.jpg",
      customStyles: "row-start-1 col-start-3 row-span-2",
    },
  ];

  return (
    <section className="mt-5 px-10 grid grid-cols-3 grid-rows-2 gap-2">
      {categories.map((category, index) => (
        <article key={index} style={{backgroundImage: `url(${category.image})`}} className={`bg-center relative ${category.customStyles}`}>
          <div className="absolute top-28 left-8 text-white">
            <h4 className="text-3xl font-bold">{category.title}</h4>
            <button className="mt-2 px-4 py-1 font-medium rounded border border-primary-darkblue hover:bg-primary-darkblue transition">
              Shop now
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default HomePageCategories;
