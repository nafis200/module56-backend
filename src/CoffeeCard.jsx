
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const CoffeeCard = ({coffee,coffees, setCoffees}) => {

    const  {_id,name,quantity,supplier,test,category,details,photo} = coffee

    const handleDelete = id =>{
      
    
      
        
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
        fetch(`http://localhost:5005/coffee/${id}`,{
          method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                  Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          
          const reamining = coffees.filter(cof => cof._id !== id)
          console.log(reamining);
          setCoffees(reamining);
            }
        });

        }
      });

            
    }

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={photo}
          alt="Movie"
        />
      </figure>
      <div className="flex justify-between w-full">
        <h2 className="card-title">Name:{name}</h2>
        <p>{quantity}</p>
        <p>{supplier}</p>
        <p>{test}</p>
        <div className="card-actions justify-end">
        <div className="join join-vertical">
  <button className="btn join-item">view</button>
  <Link to ={`/updateCoffee/${_id}`}><button className="btn join-item">edit</button></Link>
  <button onClick={()=>handleDelete(_id)} className="btn join-item">delete</button>
</div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
