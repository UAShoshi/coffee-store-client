import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const {_id, name, chef, supplier, taste, category, details, photo} = coffee;

  const handleUpdateCoffee = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {name, chef, supplier, taste, category, details, photo}
    console.log(newCoffee);

    // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: 'Good Luck !!!',
          text: 'Coffee updated successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      }
    })
  }


  return (
    <div className="bg-[#F4F3F0] p-24">
    <h1 className="text-6xl font-extrabold">Update a Coffee</h1>
    <form onSubmit={handleUpdateCoffee}>
      <div className="md:flex gap-3 mb-8">
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text font-bold">Name</span>
          </div>
          <input type="text" name="name" defaultValue={name} placeholder="Americano Coffee" className="input w-full" />
        </label>
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text font-bold">Chef</span>
          </div>
          <input type="text" name="chef" defaultValue={chef} placeholder="Mr. Matin Paul" className="input w-full" />
        </label>
      </div>
      <div className="md:flex gap-3 mb-8">
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text font-bold">Supplier</span>
          </div>
          <input type="text" name="supplier" defaultValue={supplier} placeholder="Cappu Authorizer" className="input w-full" />
        </label>
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text font-bold">Taste</span>
          </div>
          <input type="text" name="taste" defaultValue={taste} placeholder="Sweet and hot" className="input w-full" />
        </label>
      </div>
      <div className="md:flex gap-3 mb-8">
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text font-bold">Category</span>
          </div>
          <input type="text" name="category" placeholder="Americano" defaultValue={category} className="input w-full" />
        </label>
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text font-bold">Details</span>
          </div>
          <input type="text" name="details" defaultValue={details} placeholder="Espresso with hot water" className="input w-full" />
        </label>
      </div>
      <div className="md:flex gap-3 mb-8">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-bold">Photo</span>
          </div>
          <input type="text" name="photo" defaultValue={photo} placeholder="https://i.ibb.co/PGqMPr9/11.png" className="input w-full" />
        </label>
      </div>
      <input type="submit" value="Update Coffee Details" className="btn btn-block bg-[#D2B48C] font-bold " />
    </form>
  </div>
  );
};

export default UpdateCoffee;