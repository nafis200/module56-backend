const CoffeeCard = ({coffee}) => {

    const  {name,quantity,supplier,test,category,details,photo} = coffee

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
  <button className="btn join-item">edit</button>
  <button className="btn join-item">delete</button>
</div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
