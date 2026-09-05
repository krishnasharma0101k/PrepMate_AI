import React from 'react'

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
}

export default ResumeForm
