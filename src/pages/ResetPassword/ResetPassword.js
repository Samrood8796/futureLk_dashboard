import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { resetPassword } from '../../utils/constants'
import toast, { Toaster } from 'react-hot-toast'
import axios from '../../utils/axios'
const ResetPassword = () => {
    const location = useLocation()
    const code = location.search.split('?')[1]
    const [password, setPassword] = useState(null)
    const navigate = useNavigate()
    const handlePassword = (e) => {
        e.preventDefault()
        if(password){

            axios.put(`${resetPassword}?${code}`, { password: password, }).then((response) => {
                toast.success(response.data.msg)
                setTimeout(() => {
                    navigate('/login')
                }, 1000);
            }).catch((err) => {
                toast.error(err.response.data.msg)
            })
        }
    }
        
    return (
        <div className="flex min-h-full items-center justify-center py-32 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 ">
                <div>
                    <img className="mx-auto h-12 w-auto" src="https://st2.depositphotos.com/4398873/9839/i/600/depositphotos_98397934-stock-photo-triangle-geometric-knot-outline-logo.jpg" alt="Your Company" />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"> enter new password</h2>

                </div>
                <form className="mt-8 space-y-6" >

                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label htmlFor="password" className="sr-only">Enter your new password</label>
                            <input onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" required className=" pl-3 relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-0 sm:text-sm " placeholder="Enter new password" />
                        </div>
                    </div>
                    <div>
                        <button onClick={handlePassword} type='submit' className="group relative flex w-full justify-center rounded-md bg-slate-800 py-2 px-3 text-sm font-semibold text-white hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg className="h-5 w-5 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Submit
                        </button>
                    </div>
                </form>
                <Toaster />
            </div>
        </div>
    )
}

export default ResetPassword