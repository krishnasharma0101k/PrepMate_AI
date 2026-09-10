import React from 'react'
import { FiDownload } from 'react-icons/fi'
import { useReactToPrint } from 'react-to-print'

function DownloadBtn({docRef, user, setUser}) {

    const  handlePdf = useReactToPrint({
        contentRef: docRef,
        documentTitle: "PrepMateAIPDF"
    })

    const handleDownload = async () => {
        handlePdf()
    }
  return (
    <button  onClick={handleDownload} className='flex items-center gap-2 rounded-lg bg-black px-2 py-3 text-xs text-white '>
      <FiDownload/>
      Download PDF
    </button>
  )
}

export default DownloadBtn
