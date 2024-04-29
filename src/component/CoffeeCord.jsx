import { IoMdEye } from "react-icons/io";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const CoffeeCord = ({coffee, coffees, setCoffees}) => {
  const {_id, name, chef, supplier, taste, category, details, photo} = coffee;

  const handleDelete = _id =>{
    console.log(_id);
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
  
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
          title: "Deleted!",
          text: "Your coffee has been deleted.",
          icon: "success"
        }); 
        const remaining = coffees.filter(cof => cof._id !== _id);
        setCoffees(remaining);        
          }
        })
      }
    });
  }

  return (
    <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={photo} alt=""/></figure>
  <div className="flex justify-around w-full">
  <div>
  <h2 className="card-title pt-8">Name: {name}</h2>
    <p>Chef: {chef}</p>
    <p>Supplier: {supplier}</p>
    <p>Taste: {taste}</p>
  </div>
    <div className="card-actions justify-end">
    <div className="join join-vertical space-y-3 pt-2 pb-2">
  <button className="btn bg-[#D2B48C]"><IoMdEye className="text-white"></IoMdEye> </button>
  <Link to={`updateCoffee/${_id}`}><button className="btn bg-[#3C393B]"><HiPencil className="text-white"></HiPencil> </button></Link>
  <button onClick={() => handleDelete(_id)} className="btn bg-[#EA4744]"><MdDelete className="text-white"></MdDelete> </button>
</div>
    </div>
  </div>
</div>
  );
};

export default CoffeeCord;