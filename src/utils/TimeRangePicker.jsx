import React from 'react'

const TimeRangePicker = () => {
  return (
    <div className='flex flex-row'>
        <input type='time' className='border-gray-300 border-2 rounded-lg p-2' />
        <span className='mx-2'>to</span>
        <input type='time' className='border-gray-300 border-2 rounded-lg p-2' />

    </div>
  )
}

export default TimeRangePicker