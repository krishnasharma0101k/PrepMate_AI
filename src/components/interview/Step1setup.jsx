import React, { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiBriefcase, FiCheck } from "react-icons/fi";

function Step1setup({ user, setUser }) {
  const navigate = useNavigate();
  const [role, setRole] = useState("")
  const [type, setType] = useState("technical")

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-3 sm:p-5">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-4xl bg-[#0E1016] border border-white/10 rounded-2xl sm:rounded-[24px] overflow-hidden grid lg:grid-cols-[40%_60%] shadow-[0_0_60px_rgba(255,255,255,0.03)]"
      >
        {/* left */}

        <div className="p-5 sm:p-7 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-start gap-4">
          <div>
            <div
              onClick={() => navigate("/dashboard")}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 cursor-pointer"
            >
              <FiArrowLeft size={12} />
              <span className="text-xs text-zinc-300">Back</span>
            </div>

            <h2 className="mt-4 text-xl sm:text-2xl font-bold text-white leading-snug">
              Welcome back,
              <br />
              {user?.name}
            </h2>

            <p className="mt-2 text-xs sm:text-sm leading-6 text-zinc-400">
              Practice realistic AI interviews, recive instant feedback, and
              improve before your next job interview.
            </p>
          </div>

          <div className="space-y-2 sm:space-y-3">
            {[
              "Personalized AI Questions",
              "Resume Based Interview",
              "Detailed Performance Report",
              "Real Interview Experience",
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3"
              >
                <div className="w-7 h-7 shrink-0 rounded-lg bg-white flex items-center justify-center">
                  <FiCheck className="text-black" size={13} />
                </div>

                <span className="text-xs sm:text-sm text-zinc-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* right */}

        <div className="p-5 sm:p-7 flex flex-col">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-white">
              Start Interview
            </h2>

            <p className="mt-1 text-xs text-zinc-500">
              Configure your interview preferences.
            </p>
          </div>

          <div className="mt-5 flex-1 space-y-4 overflow-y-auto">

            {/* role */}
            <div>
              <label className="text-xs font-medium text-zinc-400">
                Target Role
              </label>

              <div className="mt-1.5 relative">
                <FiBriefcase
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  size={14}
                />

                <input
                  type="text"
                  onChange={(e)=>setRole(e.target.value)}
                  value={role}
                  placeholder=" Backend Developer"
                  className="w-full h-11 rounded-xl bg-[#17181E] border border-white/10 bg-white/5 pl-10  pr-4 text-sm text-white outline-none focus:border-white/30 transition"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Step1setup;
