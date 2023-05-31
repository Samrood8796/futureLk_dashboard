import React from 'react'
import FirstSection from '../Sections/FirstSection'

const Mainbar = () => {
    return (
        <div className='grid grid-cols-3 gap-4 py-5'>
            <div className='col-span-2'>
                <FirstSection />
                <FirstSection />
                {/* <FirstSection />
                <FirstSection /> */}
            </div>
            <div className='col-span-1'>
                <FirstSection />
            </div>
        </div>
    )
}

export default Mainbar