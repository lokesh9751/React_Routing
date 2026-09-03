import { Routes,Route, useParams } from "react-router-dom"
import Contact from "./Pages/Contact"
import Documentation from "./Pages/Documentation"
import { Link } from "react-router-dom";
import About from "./Pages/About";
import Course from "./Pages/Course";
import JamesKid from "./Pages/JamesKid";
import NotfoundPage from "./Pages/NotfoundPage";


function App() {

  const courseid = useParams()
  console.log(courseid)
  return (
    <div>
      <nav className="flex justify-around text-3xl">
        <h1>Suka</h1>
        <div className="flex gap-10">
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/documentation'>Documentation</Link>
          <Link to='/about' >About</Link>
        </div>
      </nav>

      <Routes>
        {/* Routes */}
        <Route path='/contact' element={<Contact/>} />
        <Route path='/documentation' element={<Documentation/>} />
        <Route path='/about' element={<About/>}/>

        {/* Nested Route */}
        <Route path="/contact/jameskidd" element={<JamesKid/>}/>

        {/* Dynamic and Nested Route */}
        <Route path="/about/:courseId/course"  element={<Course/>}/>
        
        {/* Page not found */}
        <Route path="/*" element={<NotfoundPage/>}/>
        </Routes>
    </div>
  )
}

export default App