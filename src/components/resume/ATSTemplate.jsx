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

const skillsList = skills ? skills.split(",")
    .map((s) => s.trim())
    .filter(Boolean) : []

    const hlafList = Math.ceil(skillsList.length/2)
    const skillsCol1 = skillsList.slice(0,hlafList)
    const skillsCol2 = skillsList.slice(hlafList)

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

        {summary && <section className='mb-[13px]'>
            <h2 className='mt-0 mb-[9px] border-b-[1.5px] border-black pb-[3px] text-[10.5px] font-bold uppercase tracking-[0.14em] text-black'>
                Professional Summary
            </h2>
            <p className='m-0 text-[11px] leading-[1.65] text-black'>
                {summary}
            </p>
            </section>}

            {skillsList.length > 0   && 
            <section className='mb-[13px]'>
            <h2 className='mt-0 mb-[9px] border-b-[1.5px] border-black pb-[3px] text-[10.5px] font-bold uppercase tracking-[0.14em] text-black'>
                Technical Skills
            </h2>

            <div className='grid grid-cols-2 gap-y-[2px] gap-x-[20px]'>

                <ul className='m-0 list-disc pl-4'>
                    {skillsCol1.map((skill, i) =>(
                        <li key={i} className='text-[11px] leading-[1.7] text-black capitalize'>
                            {skill}
                        </li>
                    ))}
                </ul>
                <ul className='m-0 list-disc pl-4'>
                     {skillsCol2.map((skill, i) =>(
                        <li key={i} className='text-[11px] leading-[1.7] text-black capitalize'>
                            {skill}
                        </li>
                    ))}
                </ul>

            </div>
            
            </section>}

            {experience.length > 0   && 
            <section className='mb-[13px]'>
            <h2 className='mt-0 mb-[9px] border-b-[1.5px] border-black pb-[3px] text-[10.5px] font-bold uppercase tracking-[0.14em] text-black'>
                Work Experience
            </h2>

            {experience.map((exp, i) => (
                <div key={i} className='mb-[11px] break-inside-avoid print:break-inside-avoid'>
                    <div className='flex items-baseline justify-between'>
                        <span className='text-[12px] font-bold text-black'>
                            {exp.role}
                        </span>
                        <span className='ml-2 whitespace-nowrow text-[10.5px] text-black'>
                            {exp.duration}
                        </span>
                    </div>
                </div>
            ))}
            
            </section>}
      
    </div>
  )
}

export default ATSTemplate