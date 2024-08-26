import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App'
import './global.css';
import Executive from './pages/Executive/Executive';
import History from './pages/Aboutus/History/History';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/executive" element={<Executive />} />
        <Route path="/history" element={<History />} />
        {/* <Route path="/about" element={<About />} />
        
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/student-services" element={<StudentServices />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/student-activities" element={<StudentActivities />} />
        <Route path="/student-discipline" element={<StudentDiscipline />} />
        <Route path="/counseling" element={<Counseling />} />
        <Route path="/student-health-welfare" element={<StudentHealthWelfare />} />
        <Route path="/entaneer-upskill" element={<EntaneerUpskill />} />
        <Route path="/book-place" element={<BookPlace />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/job-search" element={<JobSearch />} />
        <Route path="/career-day" element={<CareerDay />} />
        <Route path="/external-jobs" element={<ExternalJobs />} />
        <Route path="/apply-jobs" element={<ApplyJobs />} />
        <Route path="/announcements" element={<Announcements />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
)
