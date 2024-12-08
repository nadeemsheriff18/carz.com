import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home({searchParams}:any) {
  const allCars=await fetchCars({
    
    model:searchParams.model || '',
    manufacturer:searchParams.manufacturer || '',
    year:searchParams.year || 2023,
    fuel: searchParams.fuel||'',
    limit:searchParams.limit|| 10,
  });
  console.log(allCars);
  const isDataEmpty= !Array.isArray(allCars) || allCars.length<1 ||!allCars;
  return (
    <main className="overflow-hidden">
      
      <div className="mt-28 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1> 
          <p className="text-3xl font-extrabold font-mono">Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter  title='fuel' options={fuels}/>
            <CustomFilter title='year' options={yearsOfProduction} />

          </div>
        </div>
        {!isDataEmpty ?(
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car)=>(
                <CarCard car={car} />
              ))}
            </div>
            
          </section>
        ):( 
          <div className="home_error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results!</h2>
            </div>
        )}
      </div>
    </main>
  );
}
