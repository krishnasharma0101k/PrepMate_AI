import React from 'react'

function ATSTemplate({data}) {

const  {
  name,
  email,
  phone,
  location,
  linkedin,
  github,
  summary,
  skills,
  experience,
  projects,
  education,
} = data;  

  return (
    <div className='box-border w-[210mm] min-h-[297mm] bg-white px-[18mm] py-[15mm] text-black' style={{
        fontFamily: "'Times New Roman' Times, serif"
    }}>
        <div className='mb-[10px] border-b-2 border-black pb-[1-px] text-center'>
            <h2 className='m-0 mb-[7px] text-[28px] font-bold uppercase tracking-[0.08em]'>
                {name || "YOUR NAME"}
            </h2>
            <div className='flex flex-wrap justify-center text-[10.5px] text-black'>
                {[
                    email,
                    phone,
                    location,
                    linkedin ? `linkedin.com/in/${linkedin}` : null,
                    github ? `github.com/${github}` : null,
                ].filter(Boolean).map((v, i, arr) => (
                    <span key={i} className='whitespace-nowrap'>
                        {v}
                        {i < arr.length - 1 && (
                            <span className='mx-[7px] text-black'>|</span>
                        )}
                    </span>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default ATSTemplate()