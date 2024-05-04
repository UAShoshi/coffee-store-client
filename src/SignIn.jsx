import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";
import axios from "axios";


const SignIn = () => {

  const { signInUser } = useContext(AuthContext)

  const handleSignIn = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
    .then(result => {
      console.log(result.user);
      // sign In user has been created

      const user = { 
        email,
        lastLoginAt: result.user?.metadata?.lastSignInTime
      };

      axios.patch('http://localhost:5000/user', user)
      .then(data => {
        console.log(data.data);
      })

      // update last login a database
      // fetch('http://localhost:5000/user',{
      //   method: 'PATCH',
      //   headers: {
      //     'content-type' : 'application/json'
      //   },
      //   body: JSON.stringify(user)
      // })
      // .then(res => res.json())
      // .then(data => {
      //   console.log(data);
      // })
     })
     .catch(error => {
      console.error(error);
     })

  }

  return (
    <div>
    <h1 className="text-3xl font-semibold text-center mb-5">SignIn your account</h1>
  <div className="shadow-2xl bg-base-100">
    <form onSubmit={handleSignIn} className="card-body md:w-2/3 lg: w-2/3 mx-auto">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">Email address</span>
        </label>
        <input type="email" name="email" placeholder="Enter your email address" className="input bg-base-200" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">Password</span>
        </label>
        <input type="password" name="password" placeholder="Enter your email password" className="input bg-base-200" required />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn bg-black text-white">SignIn</button>
      </div>
    </form>
  </div>
    </div>
  );
};

export default SignIn;