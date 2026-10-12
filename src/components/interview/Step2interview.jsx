import React, { useRef, useState } from 'react'
import maleVideo from "../../assets/male-ai.mp4"
import femaleVideo from "../../assets/female-ai.mp4"
import { motion } from "motion/react";


function Step2interview(}interviewData, user) {
  
 // --- State ---
const [question, setQuestion] = useState(interviewData.question);
const [currentIndex, setCurrentIndex] = useState(
    interviewData.currentQuestion || 0
);
const [answer, setAnswer] = useState("");
const [feedback, setFeedback] = useState(null);
const [loading, setLoading] = useState(false);
const [timeLeft, setTimeLeft] = useState(
    interviewData.question.timer || 60
);
const [timerActive, setTimerActive] = useState(true); // paused once the answer is submitted


 // UI toggles
const [micOn, setMicOn] = useState(true); // user's manual preference — only changed by the mic button
const [cameraOn, setCameraOn] = useState(false);
const [codeOpen, setCodeOpen] = useState(false);

// Speech
const [isAIPlaying, setIsAIPlaying] = useState(false);
const [subtitle, setSubtitle] = useState("");
const [selectedVoice, setSelectedVoice] = useState(null);
const [voiceGender, setVoiceGender] = useState("female");
const [introSpoken, setIntroSpoken] = useState(false);

// Refs
const aiVideoRef = useRef(null);
const userVideoRef = useRef(null);
const recognitionRef = useRef(null);
const streamRef = useRef(null);


const videoSource = voiceGender === "female" ? femaleVideo : maleVideo

  return (
   
  <div className="min-h-screen bg-white flex items-center justify-center p-3 sm:p-5">

    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-5xl bg-[#0E1016] border border-white/10 rounded-2xl sm:rounded-[24px] overflow-hidden shadow-[0_0_60px_rgba(255,255,255,.03)] grid lg:grid-cols-[36%_64%]"
    >

      
{/* Left */}
        <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-white/8 p-4 sm:p-5 gap-3">

            {/* AI Video */}
            <div className="relative rounded-xl overflow-hidden bg-black aspect-video">
             
              <video
                  src={videoSource}
                  ref={aiVideoRef}
                  muted
                  playsInline
                  preload="auto"
                  loop
                  className="w-full h-full object-cover"
              />

              {isAIPlaying && (
                  <div className="absolute bottom-2 left-2 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1">
                    
                    <div className="flex gap-0.5 items-end h-3">
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                className="w-0.5 bg-white rounded-full"
                                animate={{ height: ["4px", "12px", "4px"] }}
                                transition={{
                                    duration: 0.6,
                                    repeat: Infinity,
                                    delay: i * 0.15
                                }}
                            />
                        ))}
                </div>

                  </div>
              )}



            </div>

        </div>


    </motion.div>

  </div>

  )
}

export default Step2interview
