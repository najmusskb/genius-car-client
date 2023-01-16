import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'

const Signup = () => {
    const handleSignup = event => {
        event.preventDefault();
    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content gap-20 grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img className='w-3/4' src={img} alt="" />

                </div>
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">signup</h1>
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="sign up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account <Link to='/Login' className='text-orange-600 font-blod' >signup </Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;