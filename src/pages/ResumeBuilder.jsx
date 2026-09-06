import React, { useState } from 'react'
import ResumeForm from '../components/resume/ResumeForm'
import initialData from '../components/resume/initialData'

function ResumeBuilder({user, setUser}) {
    const [currentStep, setCurrentStep] = useState(3)
    const [data, setData] = useState(initialData)

  return (
    <div className='min-h-screen max-w-2xl w-full max-auto mt-5'>
      <ResumeForm setp={currentStep} data={data} setData={setData}/>
    </div>
  )
}

export default ResumeBuilder
