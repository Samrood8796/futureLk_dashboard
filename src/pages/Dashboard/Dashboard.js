import React from 'react'
import Sidebar from '../../Componants/Sidebar/Sidebar'
import Navbar from '../../Componants/Navbar/Navbar'
import Table from '../../Componants/Mainbar/Table'
import Mainbar from '../../Componants/Mainbar/Mainbar'

const Dashboard = () => {
    return (
        <React.Fragment>
            <div className='flex flex-row'>
                <Sidebar />
                <div className='w-full bg-[#f6f6f6]'>
                    <Navbar />
                    <p className='p-6 text-lg font-semibold'>Project</p>
                    <div className='px-8 overflow-x-scroll'>
                        <Table />
                    </div>
                  <div className='md:px-8 mx-2'>
                    <Mainbar/>
                  </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dashboard