import React from 'react'
import {HiStatusOffline,HiSupport} from 'react-icons/hi'

const Error = ({error}) => {

  return (
    <div className="text-slate-100/40 w-full grid place-items-center h-full text-lg">
      <div className='flex flex-col items-center space-y-2'>
        <HiStatusOffline />
        <span>{error.error}</span>
      </div>
    </div>
  );
}

export default Error