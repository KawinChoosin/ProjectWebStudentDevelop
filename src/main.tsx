import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App'
import './global.css';
import Executive from './pages/Executive/Executive';
import Aboutus from './pages/Aboutus/Aboutus';
import Scholarship from './pages/student-service/scholarship/Scholarship';
import StudentActivities from './pages/student-service/Activity';
import StudentDiscipline from './pages/student-service/Discipline';
import StudentHealthWelfare from './pages/student-service/EntaneerMind'
import Welfare from './pages/student-service/Welfare';
import EntaneerUpskill from './pages/student-service/EntaneerUpskill';
import Reserve from './pages/student-service/ReservePlace';
import Certification from './pages/student-service/Certification';
import CareerDay from './pages/EJS/Careerday';
import JobSearch from './pages/EJS/FindJob';
import ExternalJobs from './pages/EJS/GetJob';
import Announcements from './pages/Announcements/Announcement';
import AppForm from './pages/Formpage/UploadFile';
import Form from './pages/Formpage/UploadPage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/executive" element={<Executive />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/activities" element={<StudentActivities />} />
        <Route path="/discipline" element={<StudentDiscipline />} />
        <Route path="/entaneermind" element={<StudentHealthWelfare />} />
        <Route path="/welfare" element={<Welfare />} />
        <Route path="/entaneer-upskill" element={<EntaneerUpskill />} />
        <Route path="/reserve-place" element={<Reserve />} />
        <Route path="/certificate" element={<Certification />} />
        <Route path="/career-day" element={<CareerDay />} />
        <Route path="/apply-job" element={<JobSearch />} />
        <Route path="/external-jobs" element={<ExternalJobs />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/admin" element={<AppForm />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
