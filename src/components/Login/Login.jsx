import { useRef, useState } from "react";
import auth from "../../firebase.config";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";



const Login = () => {
    // state 
    const [registerError, setRegisterError] = useState(null)
    const [success, setSuccess] = useState(null)

    const emailRef = useRef(null)



    const handleLogin = (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)

        // reset success and registerError state

        setRegisterError('')

        setSuccess('')

        // password validation

        if (password.length < 6) {

            setRegisterError('Please provide password more than six character')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should contain at least one UpperCase')
            return
        }

        // signUp

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)

                if(result.user.emailVerified){
                    setSuccess('User logged successfully')

                }
                else{
                    alert('please verify your at first')
                }

                

            })
            .catch(error => {
                setRegisterError(error.message)
            })


    }


    const handleForgetPassword = () => {
        console.log('send email')
        const email = emailRef.current.value
        console.log(emailRef.current.value)

        if(!email){

            console.log('please provide an email')
            setRegisterError('please provide an email to reset the password')
            return

        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            setRegisterError('please provide a valid email')
            return
        }

        // to reset password

        sendPasswordResetEmail(auth, email)
        .then(() => {
        
            alert('please check your email')
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
                            <input ref={emailRef} type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" value='Submit' className="input input-bordered" />
                        </div>

                        {
                            registerError && <p className="text-red-600 mt-16" > {registerError} </p>
                        }

                        {
                            success && <p className="mt-16 text-green-500"> {success} </p>
                        }


                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;