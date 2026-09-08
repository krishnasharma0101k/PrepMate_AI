import React, { useState } from 'react'
import { motion } from "motion/react";
import ResumeForm from '../components/resume/ResumeForm'
import initialData from '../components/resume/initialData'
import { FiArrowLeft, FiEye } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const STEPS = [
  { step: 1, title: "Personal Information", subtitle: "Your basic contact details" },
  { step: 2, title: "Professional Summary", subtitle: "A quick intro about yourself" },
  { step: 3, title: "Skills", subtitle: "Your technical skills" },
  { step: 4, title: "Work Experience", subtitle: "Your past jobs & internships" },
  { step: 5, title: "Projects", subtitle: "Projects you have built" },
  { step: 6, title: "Education", subtitle: "Your academic background" },
];

const TOTAL_STEPS = STEPS.length

function ResumeBuilder({user, setUser}) {
    const [currentStep, setCurrentStep] = useState(1)
    const [data, setData] = useState(initialData)
    const navigate = useNavigate()
    const progressPct = ((currentStep) / (TOTAL_STEPS)) * 100 
    const activeStep = STEPS.find((s) => s.step === currentStep)

  return (
    <div className='min-h-screen bg-white text-[#0A0A0A] flex flex-col'>

       <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-20 border-b border-black/10 bg-white/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-3 sm:px-5">
        <div
          onClick={() => navigate("/dashboard")}
          className="flex cursor-pointer items-center gap-1.5"
        >
          <span className="text-sm font-extrabold sm:text-base text-[#0A0A0A]">
            PrepMate AI
          </span>

          <span className="hidden rounded bg-black/5 px-1.5 py-0.5 text-[10px] text-black/50 sm:block">
            Resume builder
          </span>
        </div>

        <button className='flex h-8 items-center justify-center gap-2 rouded-lg border border-black/15 text-black/60 transition px-2 hover:border-[#0A0A0A] hover:text-[#0A0A0A]'><FiEye size={13}/></button>

      </div>
    </motion.nav>

    {/* main container */}

    <div className='flex-1 px-3 py-4 sm:py-8'>
      <div className='mx-auto w-full max-w-2xl'>
        <div className='mb-4'>
          <div className='flex items-center justify-between mb-1.5'>
            <p className='text-[10px] text-black/40 font-medium'>
              STEP {currentStep} OF {TOTAL_STEPS} 
            </p>

              <p className='hidden text-[10px] text-black/40 sm:block'>
                {Math.round(progressPct)} % complete
              </p>

          </div>

            <div className='w-full h-1 bg-black/8 rounded-full overflow-hidden'>
              <div className='h-full bg-[#0A0A0A] rounded-full transition-all duration-300' style={{width: `${progressPct}%`}}/>
            </div>

              <div className='mt-3'>
                <h2 className='text-xl font-bold sm:text-2xl '>
                  {activeStep.title}
                </h2>
                <p className='mt-1 text-xs text-black/45 sm:text-sm '>
                  {activeStep.subtitle}
                </p>
              </div>
        </div>

        <div className='border-t border-black/8 mb-4'/>
        <ResumeForm setp={currentStep} data={data} setData={setData}/>

        <div className='border-t border-black/8 mt-6 mb-4'/>

          {/* Navigation button */}

        <div className='flex items-center justify-between'>
          <button
          disabled={currentStep === 1}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium border transition-all 
          ${currentStep === 1
          ? "border-black/8 text-black/25       c ursor-not-allowed"
          : "border-black/20 text-black/60 hover:border-black/40 hover:text-[#0A0A0A]"
          }`}>
            <FiArrowLeft size={15}/>
            <span className='hidden sm:block'>
              Previous
            </span>
          </button>
        </div>
      </div>
    </div>

      
    </div>
  )
}

export default ResumeBuilder
