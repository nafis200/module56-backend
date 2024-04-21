const AddCoffee = () => {
  return (
    <div>
      <h2 className="text-2xl">Add coffee</h2>

      <form>
        <div className="flex gap-5">
        <div className="form-control">
          <label className="input-group input-group-vertical">
            <span>Coffee Name</span>
            <input
              type="text"
              placeholder="coffee Name"
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group input-group-vertical">
            <span>Available Quantity</span>
            <input
              type="text"
              placeholder="Available quantity"
              className="input input-bordered"
            />
          </label>
        </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
