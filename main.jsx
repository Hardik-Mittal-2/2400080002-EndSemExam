import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fortawesome/fontawesome-free/css/all.min.css";

import './index.css'
import App from './App.jsx'
import First from './components/First.jsx'
import Hoook from './components/Hoook.jsx'
import Inline from './components/Inline.jsx'
import Calc from './components/Calc.jsx'
import Parent from './components/Parent.jsx'
import Login from './components/login.jsx'
import ToDo from './components/ToDo.jsx'
import { BrowserRouter } from 'react-router-dom'
import Master from './components/Master.jsx'
import ProductPopup from './components/ProductPopup.jsx'
import StudentFeedbackForm from './components/StudentFeedbackForm.jsx'
import Kids from './components/Kids.jsx'
import DoctorAppointmentUI from './components/DoctorAppointmentUI.jsx'
import AttendancePortal from "./components/AttendancePortal.jsx";
import Branching from './components/Branching.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Branching/>
    </BrowserRouter>
  </StrictMode>,
)


