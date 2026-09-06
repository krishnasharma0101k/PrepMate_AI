import React from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { data } from 'react-router-dom'


function Input ({label, value, onChange, placeholder, type = "text" }){
    return (
        <div className='flex flex-col gap-1'>
            <label className='text-[10px] font-semibold text-black/70 uppercase tracking-wider'>
                {label}
            </label>
            <input 
            type={type}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            value={value}
            className='bg-white border-2 border-black/25 text-[#0A0A0A] twxt-xs rounded-lg px-2.5 py-2 outline-none focus:border-black/60 transition-colors placeholder-black/30 shadow-[0_2px_8px_rgba(0,0,0,0.04)]'
            />
        </div>
    )
}

function TextArea({label, value, onChange, placeholder, rows = 3}) {
    return(
       <div className='flex flex-col gap-1'>
            <label className='text-[10px] font-semibold text-black/70 uppercase tracking-wider'>
                {label}
            </label>
            <textarea 
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            value={value}
            rows={rows}
            className='bg-white border-2 border-black/25 text-[#0A0A0A] twxt-xs rounded-lg px-2.5 py-2 outline-none focus:border-black/60 transition-colors placeholder-black/30 resize-none shadow-[0_2px_8px_rgba(0,0,0,0.04)]'
            />
        </div>
    )
}

function EntryCard({ children, onRemove }) {
    return(
        <div className='relative overflow-hidden bg-[#F8F9FA] border-2 border-black/15 rounded-xl p-3 shadow-[0_2px_10px_ragba(0,0,0,0.05)]'>
            <button className='absolute top-2.5 right-2.5 z-10 text-black/35 hover:text-red-500 transition-colors'>
            <FiTrash2 size={13}/>
            </button>
            <div className='relative flex flex-col gap-2.5 pr-6'>
                {children}
            </div>
        </div>
    )
}

function ResumeForm({setp, data, setData}) {
  if (setp === 1) {
    return(
        <div className='flex flex-col gap-3'>
           <Input
            label="Full Name"
            placeholder="Krishna Sharma"
            onChange={(v) => setData({ ...data, name: v })}
            value={data.name}
            />

            <Input
            label="Email"
            placeholder="Krishna@gmail.com"
            onChange={(v) => setData({ ...data, email: v })}
            value={data.email}
            />

            <Input
            label="Phone"
            placeholder="918433231572"
            onChange={(v) => setData({ ...data, phone: v })}
            value={data.phone}
            />

            <Input
            label="Location"
            placeholder="Agra, UP"
            onChange={(v) => setData({ ...data, location: v })}
            value={data.location}
            />

            <Input
            label="LinkedIn URL"
            placeholder="linkedin.com/in/krishna"
            onChange={(v) => setData({ ...data, linkedin: v })}
            value={data.linkedin}
            />

            <Input
            label="GitHub URL"
            placeholder="github.com/krishna"
            onChange={(v) => setData({ ...data, github: v })}
            value={data.github}
            />
        </div>
    )
  }

    if (step === 2) {
    return(
        <div className='flex flex-col gap-3'>
            <TextArea 
            label="Professional Summary"
            placeholder="Backend developer with 2+ years of experience building scalable Node.js and MongoDB applications... "
            rows={5}
            onChange={(v) => setData({...data, summary:v})}
            value={data.summary}
            />

                <p className='text-[10px] text-black/40'>
                   Leave empty to skip this section. 
                </p>

        </div>
    )
    }

     if (step === 3) {
    return(
        <div className='flex flex-col gap-3'>
            <TextArea 
            label="Skills (comma separated)"
            placeholder="JavaScript, typeScript, React, Node.js, Express, MongoDB, Redis, Docker, Aws, Git "
            rows={4}
            onChange={(v) => setData({...data, skills:v})}
            value={data.skills}
            />

                <p className='text-[10px] text-black/40'>
                   Separate each skill with a comma. 
                </p>

        </div>
    )
    }

    if (step === 4) {
        return(
            <div className='flex flex-col gap-3'>
                {data.experience.length === 0 && (
                <p className='text-xs text-black/40 text-center py-3'>
                    No experience added yet. Click below to add.
                </p>)}

                 {data.experience.map((exp, index) => (
                    <EntryCard key={index}>
                        <Input label="company" placeholder="ABC Tecg=hnologies"/>

                        <Input label="Role" placeholder="Backend Developer"/>

                        <Input label="Duration" placeholder="Jan 2023 - 2024"/>

                        <TextArea/>

                    </EntryCard>
                 ))}   

            </div>
        )
    }

}



export default ResumeForm
