import React from 'react'
import { AiOutlineLoading } from "react-icons/ai";

const Loader = () => {
  return (
    <div className="text-slate-100/40 w-full grid place-items-center h-full text-lg">
      <div className="flex flex-col items-center space-y-2">
        <span className='animate-spin'>
          <AiOutlineLoading />
        </span>
        <span>Fetching your songs</span>
      </div>
    </div>
  );
}

export default Loader