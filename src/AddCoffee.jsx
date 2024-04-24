import Swal from 'sweetalert2'

const AddCoffee = () => {

  const handlePrevent = event =>{
    event.preventDefault();
    const form = event.target
    const quantity = form.quantity.value;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const details = form.details.value;
    console.log(quantity,name,supplier,test,category,photo,details);
    const newCoffee = {name,quantity,supplier,test,category,details,photo}

    fetch('https://module-56-2-27osuso4q-nafis2000s-projects-efe39630.vercel.app/coffee',{
      method: 'POST',
      headers:{
         'content-type' : 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
       
    })

  }

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-2xl font-bold mb-5">Add coffee</h2>

      <form onSubmit={handlePrevent}>
        <div className="flex gap-5">
        <div className="form-control">
          <label className="input-group input-group-vertical">
            <span>Coffee Name</span>
            <input
              type="text"
              placeholder="coffee Name"
              className="input input-bordered w-full"
              name = "name"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group input-group-vertical">
            <span>Available Quantity</span>
            <input
              type="text"
              placeholder="Available quantity"
              className="input input-bordered w-full"
              name = "quantity"
            />
          </label>
        </div>
        </div>
        <div className="flex gap-5">
        <div className="form-control">
          <label className="input-group input-group-vertical">
            <span>Supplier</span>
            <input
              type="text"
              placeholder="supplier name"
              className="input input-bordered w-full"
              name = "supplier"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group input-group-vertical">
            <span>test</span>
            <input
              type="text"
              placeholder="test"
              className="input input-bordered w-full"
              name = "test"
            />
          </label>
        </div>
        </div>
        <div className="flex gap-5">
        <div className="form-control">
          <label className="input-group input-group-vertical">
            <span>category</span>
            <input
              type="text"
              placeholder="category"
              className="input input-bordered w-full"
              name = "category"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group input-group-vertical">
            <span>details</span>
            <input
              type="text"
              placeholder="details"
              className="input input-bordered w-full"
              name = "details"
            />
          </label>
        </div>
        </div>
        <div className="">
        <div className="form-control">
          <label className="input-group input-group-vertical mt-5">
            <span className="">photo</span>
            <input
              type="text"
              placeholder="photo url"
              className="input input-bordered w-full mt-2"
              name = "photo"
            />
           
          </label>
        </div>
        </div>
        <input type="submit" value="Add coffee" className="btn btn-primary w-full mb-5 mt-5"/>
      </form>
    </div>
  );
};

export default AddCoffee;
