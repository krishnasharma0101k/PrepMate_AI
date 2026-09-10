import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import DownloadBtn from './DownloadBtn'

function PreviewResume({ data, onBack, user, setUser }) {
  return (
    <div className='min-h-screen bg-white text-[#0A0A0A]'>
      {/* header */}
     <div className='sticky top-0 z-20 border-b border-black/8 bg-white/80 backdrop-blur-xl'>
       <div className='max-auto flex max-w-7xl flex-col gap-3 px-3  py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5'>

        <div>
          <h2 className='text-base font-bold sm:text-lg'>
            Resume Preview
            </h2>
          <p className='mt-0.5 text[10px] text-gray-400 sm:text-xs'>
            Review your resume before downloading
          </p>
        </div>

        <div className='flex items-center justify-between lg:justify-end gap-2.5'>
          <button onClick={onBack} className='flex  h-8 items-center justify-center gap-1.5 rounded-lg border border-black/15 px-2.5 sm:px-3 text-black/35 hover:text-[#0A0A0A]'>
            <FiArrowLeft size={15}/>
            <span className='hidden sm:block'>Back to Edit</span>
          </button>
           <DownloadBtn/>
        </div>

        </div>
      </div>

    </div>
  )
}

export default PreviewResume
