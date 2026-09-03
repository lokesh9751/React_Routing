import { Routes,Route } from "react-router-dom"
import Contact from "./Pages/Contact"
import Documentation from "./Pages/Documentation"
import { Link } from "react-router-dom";


function App() {
  return (
    <div>
      <nav className="flex justify-around text-3xl">
        <h1>Suka</h1>
        <div className="flex gap-10">
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/documentation'>Documentation</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/documentation' element={<Documentation/>} />
      </Routes>
    </div>
  )
}

export default App