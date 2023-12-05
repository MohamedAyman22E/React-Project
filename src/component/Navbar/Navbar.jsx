import React ,{useState} from 'react'
import { FaBars,FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
  const [navToggler,setNavToggler]=useState(false)
  const closeToggler = ()=>setNavToggler(false)
  return (
    <>
      <nav className='container'>
      <div className="logo">
        <h2 className='text-uppercase text_white ls'>alex</h2>
      </div>
      <div className={navToggler?"navBar navBarX" :"navBar"}>
     <button type='button' className='text_white fs-24' onClick={closeToggler}><FaTimes/></button>
        <ul className="navList-nav">
          <li className="nav-item">
            <Link to="/" className='text-uppercase  fw-500 fs-18 text_white ls'>home</Link>
          </li>
          <li>
            <Link to="/" className='text-uppercase  fw-500 fs-18 text_white ls'>service</Link>
          </li>
          <li>
          <Link to="/" className='text-uppercase  fw-500 fs-18 text_white ls'>works</Link>
          </li>
          <li>
            <Link to="/" className='text-uppercase  fw-500 fs-18 text_white  ls'>about me</Link>
          </li>
          <li>
            <Link to="/" className='text-uppercase  fw-500 fs-18 text_white  ls'>contact</Link>
          </li>
          </ul>
      </div>
      <div className="navMenu">
  <button type='button' className='text_white fs-24'onClick={()=>setNavToggler(!navToggler)}  ><FaBars/></button>

      </div>
      </nav>
    </>

  )
}

export default Navbar