import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../../firebase.config";
import { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";



const Register = () => {

    // state 
    const [registerError, setRegisterError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [showPassword, setShowPassword] = useState(false)



    // handle event
    const handleRegister = (e) => {

        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
        const accepted = e.target.terms.checked

        console.log(email, password, accepted)

        // password validation

        if (password.length < 6) {

            setRegisterError('Please provide password more than six character')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should contain at least one UpperCase')
            return
        }
        else if(!accepted){
            setRegisterError('Please accept our terms and conditions')
            return
        }


        // reset success and registerError state

        setRegisterError('')

        setSuccess('')

        // create user in firebase

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)

                // send verification email

                sendEmailVerification(result.user)
                .then(()=> {
                    alert('please check your email and verify your email')

                    // if(result.user.emailVerified){
                    //     setSuccess('User register  successfully')
                    // }
                })
                .catch(error => {
                    setRegisterError(error.message)
                })

                if(result.user.emailVerified){
                    setSuccess('User register  successfully')
                }

                
            })
            .catch(error => {
                console.log(error)

                setRegisterError(error.message)
            })

    }






    return (
        <div className="mt-16">

            <div className="max-w-3xl mx-auto">
                <form onSubmit={handleRegister} >

                    <input required className="border w-1/2 py-2 px-4 mb-4" type="email" name="email" id="email" placeholder="Email" /> <br />

                  <div className="relative">
                  <input required
                        className="border w-1/2 py-2 px-4  "
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        id="password"
                        placeholder="Password" />
                        <span className="absolute mt-3 -ml-6 " onClick={()=> setShowPassword(!showPassword)} >
                            {
                                showPassword ? <FaEyeSlash /> : <FaEye />
                            }
                        </span>
                  </div>
                    <br />

                   <div className="mb-3">
                   <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms"> Accept out <a className="underline font-bold" href="">terms and condition </a></label>
                   </div>

                    <input className="border w-1/2 py-2 px-4 font-bold" type="submit" value="Submit" />

                </form>

                <div className="mt-16">
                <p>Already have an account ? </p>
                
                <Link to={'/login'}> Login </Link>
                </div>

                {
                    registerError && <p className="text-red-600 mt-16" > {registerError} </p>
                }

                {
                    success && <p className="mt-16 text-green-500"> {success} </p>
                }
            </div>



        </div>
    );
};

export default Register;