import { Link } from "react-router-dom";
import { homePageList } from "../data/homepageList";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [sectionKey, setSectionKey] = useState<number>(0);
  const [asideKey, setAsideKey] = useState<number>(1);

  console.log("current", currentIndex);
  useEffect(() => {
    const currentIndex = setInterval(handleCurrentCategory, 5000);

    return () => {
      clearInterval(currentIndex);
    };
  }, []);

  const handleCurrentCategory = () => {
    setCurrentIndex(prev => (prev + 1) % homePageList.length);
    setSectionKey(prev => prev + 1)
    setAsideKey(prev => prev + 1)
  };


  return (
    <main className="bg-primary-lightblue h-96 text-black px-32 flex justify-between items-center overflow-hidden">
      <motion.section key={sectionKey} initial={{opacity: 0, y: 100 + "%"}} animate={{opacity: 1, y: 0}} transition={{duration: .5, delay: .6}}>
        <h2 className="text-6xl font-bold">{homePageList[currentIndex].title}</h2>
        <p className="mt-1 font-medium">{homePageList[currentIndex].description}</p>
        <button className="mt-5 px-6 py-2 text-white rounded bg-primary-darkblue hover:bg-black transition">
          <Link to="shop">Shop now</Link>
        </button>
      </motion.section>
      <motion.aside key={asideKey} className="w-96" initial={{x: 100 + "%", opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 1}}>
        <img
          className="object-cover"
          src={homePageList[currentIndex].image}
          alt={homePageList[currentIndex].title}
        />
      </motion.aside>
    </main>
  );
};

export default Home;
