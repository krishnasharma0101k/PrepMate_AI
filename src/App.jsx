import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Scorer from "./pages/Scorer";
import { getCurrentUser } from "./api/user.api";
import { getResume } from "./api/resume.api";
import { useDispatch } from "react-redux";
import { setResume } from "./redux/resumeSlice";
import ResumeBuilder from "./pages/ResumeBuilder";
import InterviewStart from "./pages/InterviewStart";
import InterviewPage from "./pages/InterviewPage";
import InterviewReport from "./pages/InterviewReport";
import { wakeServices } from "./utils/wakeServices";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
  wakeServices();
}, []);

  useEffect(() => {
    const getUser = async () => {
  try {
    const response = await getCurrentUser();

    if (response?.success) {
      setUser(response.user ?? response.data)
    } else {
      setUser(null);
    }
  } catch (error) {
    console.error("Failed to get current user:", error);
    setUser(null);
  } finally {
    setLoading(false);
  }
};

    getUser();
  }, []);

 useEffect(() => {
  if (!user) return;            // wait until logged in

  let cancelled = false;

  const getResumeData = async () => {
    try {
      const result = await getResume();
      if (!cancelled && result?.data) {
        dispatch(setResume(result.data));
      }
    } catch (error) {
      console.error("Failed to get resume:", error);
    }
  };

  getResumeData();

  return () => { cancelled = true; };
}, [user, dispatch]);

  if (loading) {
    return <div className="fixed top-0 left-0 w-full z-[9999]">
      <div className="h-1 bg-black animate-pulse w-full"/>
      </div>;
  }

  

  return (
    <Routes>
      <Route path="/" element={
        user? <Navigate to="/dashboard" replace/>:
        <Home setUser={setUser} />} />
      <Route path="/dashboard" element={
        user? <Dashboard user={user}  setUser={setUser}/>: <Navigate to="/" replace/>} />

        <Route path="/scorer" element={
        user? <Scorer user={user}  setUser={setUser}/>: <Navigate to="/" replace/>} />
       
        <Route path="/resume" element={
        user? <ResumeBuilder user={user}  setUser={setUser}/>: <Navigate to="/" replace/>} />

         <Route path="/interview" element={
        user? <InterviewStart user={user}  setUser={setUser}/>: <Navigate to="/" replace/>} />

         <Route path="/interview/:id" element={
        user? <InterviewPage user={user}  setUser={setUser}/>: <Navigate to="/" replace/>} />

         <Route path="/interview/:id/report" element={
        user? <InterviewReport user={user}  setUser={setUser}/>: <Navigate to="/" replace/>} />
    </Routes>
  );
}

export default App;