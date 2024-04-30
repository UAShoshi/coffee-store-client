import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";


const SignUp = () => {

  const { createUser } = useContext(AuthContext)

  const handleSignUp = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    createUser(email, password)
    .then(result => {
      console.log(result.user);

      // new user has been created
      const createdAt = result.user?.metadata?.creationTime
      const user = { email, createdAt };
      fetch('https://coffee-store-server-pink-alpha.vercel.app/user', {
        method: 'POST',
        headers: {
          "content-type": 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          console.log('user added to the database');
        }
      })      
    })
    .catch(error => {
      console.error(error);
    })
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mb-5">SignUp your account</h1>
    <div className="shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body md:w-2/3 lg: w-2/3 mx-auto">
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
          <button className="btn bg-black text-white">SignUp</button>
        </div>
      </form>
    </div>
      </div>
  );
};

export default SignUp;