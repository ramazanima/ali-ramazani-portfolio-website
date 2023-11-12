import React from 'react'

export const LocationLight = () => {
    return (
        <div className='text-center'>
            <p className='text-lg text-[#f4f4f4] opacity-50'>Current Location:</p>
            <p className='text-2xl'>76<sup className='text-xs'>°F</sup> Baltimore, MD 02:08 PM EDT</p>
            <p className='text-lg text-[#f4f4f4] opacity-50'>(in office Mon-Fri)</p>
        </div>
    )
}

export const LocationDark = () => {
    return (
        <div className='text-right'>
            <p className='text-lg text-tertiary opacity-100 font-bold'>Current Location:</p>
            <p className='text-xl font-bold text-primary'>76<sup className='text-xs'>°F</sup> Berea, 02:08 PM EDT</p>
            <p className='text-lg text-tertiary opacity-100 font-bold'>(Sat - Sun)</p>
        </div>
    )
}
