import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../utils/axios'
import toast, { Toaster } from 'react-hot-toast';
import {loginPost } from '../../utils/constants'
const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        axios.post(loginPost, { email, password }, {
            headers: { "Content-Type": "application/json" },
        }).then((userData) => {
            console.log(userData?.data?.user);
            localStorage.setItem("user",userData.data.user)
            navigate('/')
        }).catch((err) => {
            ((error) => {
                toast.error(error.response.data.msg, {
                    position: "top-center",
                });
            })(err);
        })
    }


    return (
        <div className="flex flex-col min-h-screen bg-[#f6f6f6] items-center py-32 px-4 sm:px-6 lg:px-8">
            <p className='text-xl font-extrabold'>Login</p>
            <div className="w-full max-w-md space-y-8 rounded p-2  ">
                <form className="mt-8 space-y-6" onSubmit={(e) => handleLogin(e)}>

                    <div className="-space-y-px rounded-md shadow-sm">    
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} id="email" name="email" type="text" required className=" pl-3 relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-0 sm:text-sm " placeholder="Enter email" />
                        </div>
                        <div className='pt-5'>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" required className="pl-3 relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-0 sm:text-sm sm:leading-6" placeholder="Password" />
                        </div>
                    </div>

                    <div>
                        <div className="text-sm justify-between flex ">
                            <Link to='/register' className='w-1/2'>
                                <p className="text-sm px-4 hover:font-bold">Create new Account ?</p>
                            </Link>
                            <p onClick={() => navigate('/forgottPassword')} className="w-1/2  cursor-pointer text-gray-500 hover:font-bold">Forgot your password?</p>
                        </div>
                    </div>
                    <div>
                        <button type='submit' className="group relative flex w-full justify-center rounded-md bg-slate-800 py-2 px-3 text-sm font-semibold text-white hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Sign in
                        </button>
                        <Toaster />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login