

import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.config";



const HeroRegister = () => {

        const handleLogin = (event) => {
            event.preventDefault()

            const email = event.target.email.value
            const password = event.target.password.value

            console.log(email, password)

            createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
        }

    return (
        <div className="hero  bg-base-200 max-w-3xl mx-auto mt-16 p-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                         
                            <input type="submit" value='Submit' className="input input-bordered" required />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HeroRegister;