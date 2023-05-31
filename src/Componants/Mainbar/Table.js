import React from 'react'

const Table = () => {
    return (
        <div className='overflow-x-scroll'>
        <table className="table-auto w-full bg-white  text-sm text-left  ">
            <thead className="text-xs font-bold">
                <tr className='text-gray-300'>
                    <th scope="col" className="text-black px-6 py-3">
                        Adidas mobile
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Campains
                    </th>
                    <th scope="col" className="px-6 py-3">
                        channels
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Last edited By
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Last edited on
                    </th>
                </tr>
            </thead>
            <tbody >
                <tr className='overflow-x-auto'>
                    <td className="px-6 py-4">
                    </td>
                    <td className="px-6 py-4">
                        8
                    </td>
                    <td className="px-6 py-4">
                        9/10
                    </td>
                    <td className="px-6 py-4">
                        Varun
                    </td>
                    <td className="px-6 py-4">
                       5 hours ago
                    </td>
                </tr>
            </tbody>
        </table >
        </div>
    )
}

export default Table