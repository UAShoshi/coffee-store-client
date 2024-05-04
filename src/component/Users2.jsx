import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const Users2 = () => {

  const {isPending, isError, error, data: users} = useQuery({
    queryKey: ['users'],
    queryFn: async () =>{
      const res = await fetch('http://localhost:5173/users');
      return res.json();
    }
  })
  
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:5000/user')
  //   .then(res => res.json())
  //   .then(data => {
  //     setUsers(data)
  //   })
  // }, [])

  const handleDelete = id =>{
    console.log(id);
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
  
        fetch(`http://localhost:5000/user/${id}`, {
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
        // const remaining = users.filter(user => user._id !== id);
        // setUsers(remaining);        
          }
        })
      }
    });
  }

  if (isPending) {
    return <span className="loading loading-spinnar"></span>
  }

  if (isError) {
    return <p>{error.message}</p>
  }

  return (
    <div>
    {/* <h1 className="text-4xl font-bold">Users: {loadedUsers.length}</h1> */}
    <div className="overflow-x-auto">
<table className="table">
  {/* head */}
  <thead>
    <tr>
      <th></th>
      <th>Email</th>
      <th>Created At</th>
      <th>Last Logged in</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {/* row 1 */}
    
      {
        users?.map(user => <tr key={user._id}>
        <th>1</th>
        <td>{user.email}</td>
        <td>{user.createdAt}</td>
        <td>{user.lastLoginAt}</td>
        <td><button onClick={ () => handleDelete(user._id)} className="btn">Delete</button></td>
        </tr> )
      }
    
  </tbody>
</table>
</div>
  </div>
  );
};

export default Users2;