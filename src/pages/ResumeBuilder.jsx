import React, { useState } from 'react'
import ResumeForm from '../components/resume/ResumeForm'
import initialData from '../components/resume/initialData'

function ResumeBuilder({user, setUser}) {
    const [currentStep, setCurrentStep] = useState(1)
    const [data, setData] = useState(initialData)

  return (
    <div>
      <ResumeForm setp={currentStep} data={data} setData={setData}/>
    </div>
  )
}

export default ResumeBuilder
