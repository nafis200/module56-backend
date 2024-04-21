import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";



const Apps = () => {
  const coffees = useLoaderData()
  return (
    <div>
      <h2 className="text-2xl">Hot cold coffee:{coffees.length}</h2>
       {
         coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard> )
       }
    </div>
  );
};

export default Apps;