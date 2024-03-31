


const Register = () => {


    // handle event
    const handleRegister = (e) => {

        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        console.log(email, password)
    }

    // handle submit

    


    return (
        <div  className="mt-16">

            <div className="max-w-3xl mx-auto">
                <form onSubmit={handleRegister} >

                    <input  className="border w-1/2 py-2 px-4 mb-4" type="email" name="email" id="email" placeholder="Email" /> <br />

                    <input  className="border w-1/2 py-2 px-4 mb-4 " type="password" name="password" id="password" placeholder="Password" /> <br />

                    <input  className="border w-1/2 py-2 px-4 font-bold" type="submit" value="Submit" />

                </form>
            </div>



        </div>
    );
};

export default Register;