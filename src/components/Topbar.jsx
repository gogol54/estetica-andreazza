import './topbar.css'
import React from 'react'

const Topbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-scroll shadow-0" style={{backgroundColor: '#EADFDB', color:'#966D39'}}>
      <div className="container">
        <a className="navbar-brand" href="#"> 
          <span style={{color:'#966D39', fontSize:'22px'}}>Antonia Andreazza</span>  
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-82750.appspot.com/o/AF%20-%20MARCA%20REDONDA.png?alt=media&token=bea327c1-0073-4b66-837a-53c3a6b82ba1"
            width='120px'
            height='100px'
            alt="" 
          />
          
        </a>
        <button className="navbar-toggler ps-0" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="d-flex justify-content-start align-items-center">
            <i className="fas fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarExample01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link px-3" href="#">Página Inicial</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#">Quem Somos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#">Tratamentos</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link px-3" href="#">FAQs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#">Agende</a>
            </li>
          </ul>
          <ul className="navbar-nav flex-row">
            <li className="nav-item">
              <a className="nav-link pe-3" href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ps-3" href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Topbar