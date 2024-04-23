import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";



const Apps = () => {
  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)
  return (
    <div>
      <h2 className="text-2xl">Hot cold coffee:{coffees.length}</h2>
       {
         coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}
          coffees = {coffees}
         setCoffees = {setCoffees}
         ></CoffeeCard> )
       }
    </div>
  );
};

export default Apps;