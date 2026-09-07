import React from 'react'
import { FiPlus, FiTrash2 } from 'react-icons/fi'
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
            <button 
            onClick={onRemove}
            className='absolute top-2.5 right-2.5 z-10 text-black/35 hover:text-red-500 transition-colors'>
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
        const addExp = () => {
            setData({
                ...data, experience: [...data.experience, {company:"", role:"", duration:"", description:"" } ]
            })
        }

        const removeExp = (index)=> {
            setData({
                ...data, experience: data.experience.filter((_,i)=> i!== index)
            })
        }

        const updateExp = (index, feild, value)=>{
            const updated = data.experience.map((exp, i ) => i === index ? {...exp, [feild]: value} : exp)
            setData({...data, experience: updated})
        }

        return(
            <div className='flex flex-col gap-3'>
                {data.experience.length === 0 && (
                <p className='text-xs text-black/40 text-center py-3'>
                    No experience added yet. Click below to add.
                </p>)}

                 {data.experience.map((exp, index) => (
                    <EntryCard key={index} onRemove={()=> removeExp(index)}>
                        <Input label="company" placeholder="ABC Tecg=hnologies"
                        onChange={(v)=>updateExp(index, "company", v)}
                        value={exp.company}
                        />

                        <Input label="Role" placeholder="Backend Developer" 
                        onChange={(v)=>updateExp(index, "role", v)} 
                        value={exp.role}
                        />

                        <Input label="Duration" placeholder="Jan 2023 - 2024"
                        onChange={(v)=>updateExp(index, "duration", v)} 
                        
                        />

                        <TextArea label="Description" placeholder="• Built REST APIs\n• Improved performance by 40%"
                        onChange={(v)=>updateExp(index, "description", v)} 
                        />

                    </EntryCard>
                 ))}   

                 <button onClick={addExp} className='flex items-center justify-center gap-1.5 w-full py-2.5 border border-dashed border-black/20 rounded-xl text-xs text-black/45 hover:border-black/40 hover:text-[#0A0A0A] transition-all'>
                 <FiPlus size={13}/>Add Experience
                 </button>

            </div>
        )
    }

     if (step === 5) {
        const addPro = () => {
            setData({
                ...data,  projects: [...data.projects, {name:"", techStack:"", github:"", description:"" } ]
            })
        }

        const removePro = (index)=> {
            setData({
                ...data, projects: data.projects.filter((_,i)=> i!== index)
            })
        }

        const updatePro = (index, feild, value)=>{
            const updated = data.projects.map((pro, i ) => i === index ? {...pro, [feild]: value} : pro)
            setData({...data, projects: updated})
        }

        return(
            <div className='flex flex-col gap-3'>
                {data.projects.length === 0 && (
                <p className='text-xs text-black/40 text-center py-3'>
                    No project added yet. Click below to add.
                </p>)}

                 {data.projects.map((pro, index) => (
                    <EntryCard key={index} onRemove={()=> removePro(index)}>
                        <Input label="project Name" placeholder="InterviewIQ"
                        onChange={(v)=>updatePro(index, "name", v)}
                        value={pro.name}
                        />

                        <Input label="Tech Stack" placeholder="React, Node.js, MongoDB" 
                        onChange={(v)=>updatePro(index, "techStack", v)} 
                        />

                        <Input label="GitHub Link" placeholder="github.com/krishna/interviewiq"
                        onChange={(v)=>updatePro(index, "github", v)} 
                        
                        />

                        <TextArea label="Description" 
                        value={pro.description}
                        placeholder="AI-powered interview preparation platform with mock interviewa and resume builder"
                        onChange={(v)=>updatePro(index, "description", v)} 
                        />

                    </EntryCard>
                 ))}   

                 <button onClick={addPro} className='flex items-center justify-center gap-1.5 w-full py-2.5 border border-dashed border-black/20 rounded-xl text-xs text-black/45 hover:border-black/40 hover:text-[#0A0A0A] transition-all'>
                 <FiPlus size={13}/>Add projects
                 </button>

            </div>
        )
    }

     if (step === 6) {
        const addEdu = () => {
            setData({
                ...data,  education: [...data.education, {collage:"", degree:"", branch:"", cgpa:"", year: "" } ]
            })
        }

        const removeEdu = (index)=> {
            setData({
                ...data, education: data.education.filter((_,i)=> i!== index)
            })
        }

        const updateEdu = (index, feild, value)=>{
            const updated = data.education.map((edu, i ) => i === index ? {...edu, [feild]: value} : edu)
            setData({...data, education: updated})
        }

        return(
            <div className='flex flex-col gap-3'>
                {data.education.length === 0 && (
                <p className='text-xs text-black/40 text-center py-3'>
                    No education added yet. Click below to add.
                </p>)}

                 {data.education.map((edu, index) => (
                    <EntryCard key={index} onRemove={()=> removeEdu(index)}>
                        <Input label="collage / University" placeholder="Dr. MPS collage"
                        onChange={(v)=>updateEdu(index, "collage", v)}
                        value={edu.collage}
                        />

                        <Input label="Degree" placeholder="BCA" 
                        onChange={(v)=>updateEdu(index, "degree", v)} 
                        value={edu.degree}
                        />

                        <Input label="Branch" placeholder="computer Science"
                        onChange={(v)=>updateEdu(index, "branch", v)} 
                        value={edu.branch}
                        />

                        <Input label="CGPA" placeholder="8.5"
                        onChange={(v)=>updateEdu(index, "cgpa", v)} 
                        value={edu.cgpa}
                        />

                        <Input label="Year" placeholder="2019 - 2021"
                        onChange={(v)=>updateEdu(index, "year", v)} 
                        value={edu.year}
                        />

                    </EntryCard>
                 ))}   

                 <button onClick={addEdu} className='flex items-center justify-center gap-1.5 w-full py-2.5 border border-dashed border-black/20 rounded-xl text-xs text-black/45 hover:border-black/40 hover:text-[#0A0A0A] transition-all'>
                 <FiPlus size={13}/>Add education
                 </button>

            </div>
        )
    }

}



export default ResumeForm
