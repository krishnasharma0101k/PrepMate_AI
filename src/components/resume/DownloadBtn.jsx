import React from 'react'
import { FiDownload } from 'react-icons/fi'
import { useReactToPrint } from 'react-to-print'
import { useCoins } from '../../api/user.api'

function DownloadBtn({docRef, user, setUser}) {

    const  handlePdf = useReactToPrint({
        contentRef: docRef,
        documentTitle: "PrepMateAIPDF"
    })

    const handleDownload = async () => {
       try {
         try {
                 const coinsResponse = await useCoins({
                   coins: 10,
                   action: "download-pdf",
                 });
         
                 setUser((prev) => ({
                   ...prev,
                   interviewCoin: coinsResponse.interviewCoin,
                 }));
               } catch (error) {
                 
                 alert("Failed to use coins.");
                 return
               }

              handlePdf()
       } catch (error) {
        if (error.response?.status === 403) {
          return alert("Not enough Interview Coins.")
        }

        alert(
          error.response?.data?.message || 
          "Something went worng"
        )
       }
    }
  return (
    <button  onClick={handleDownload} className='flex items-center gap-2 rounded-lg bg-black px-2 py-3 text-xs text-white '>
      <FiDownload/>
      Download PDF
    </button>
  )
}

export default DownloadBtn
