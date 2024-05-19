import { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { SearchBar } from "./components/SearchBar";
import { fetchCars } from "./utils";
import { CarItem } from "./components/CarItem";
import { Routes, Route } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { fuels, yearsOfProduction } from "./constans";
import { CustomFilter } from "./components/CustomFilter";

function App() {
  const [allCars, setAllCars] = useState([]);
  const [searchParams, setSearchparams] = useSearchParams();
  useEffect(() => {
    async function fetchData() {
      const cars = await fetchCars({
        manufacturer: searchParams.get("manufacturer") || "",
        year: Number(searchParams.get("year")) || 2024,
        fuel: searchParams.get("fuel") || "",
        limit: Number(searchParams.get("limit")) || 10,
        model: searchParams.get("model") || "",
      });
      setAllCars(cars);
    }
    fetchData();
  }, [searchParams]);
  
  return (
    <main className="max-w-[1440px] mx-auto overflow-hidden">
      <Navbar />
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore te cars you might like</p>
        </div>
        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <Routes>
            <Route path="/" element={<SearchBar />} />
          </Routes>
          <div className="flex justify-start flex-wrap items-center gap-2">
            <CustomFilter title="fuels" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
      </div>

      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14 padding-x">
        {allCars?.map((car , i) => (
          <CarItem key={i} car={car} />
        ))}
      </div>

      <Footer />
    </main>
  );
}

export default App;
