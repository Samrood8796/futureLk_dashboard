import React from 'react'

const Mainbar = () => {
    return (

        <div class="grid grid-cols-3 gap-2 py-5">
            <div class="col-span-2">
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-blue-500 text-white p-4">1</div>
                    <div class="bg-green-500 text-white p-4">2</div>
                    <div class="bg-green-500 text-white p-4">2</div>
                    <div class="bg-green-500 text-white p-4">2</div>
                </div>
            </div>
            <div className='col-span-1'>
                <div class="bg-red-500 text-white p-4">3</div>
                <div class="bg-red-500 text-white my-4 p-4">3</div>
            </div>
        </div>
    )
}

export default Mainbar