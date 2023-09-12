import './topbar.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ImageBar = styled.img`
  width: 120px;
  height: 100px;
  padding: 10px;
  @media (max-width: 540px) {
    width: 0px;
    height: 0px;
  }
`
const Topbar = () => {
  const history = useNavigate()
  const verify = (info) => {
    history("/treatments",{ state: { data: info } })
  }
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-scroll shadow-0" style={{backgroundColor: '#EADFDB', color:'#966D39', marginBottom: '30px'}}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <p className="titulo" style={{color:'#966D39'}}>  
            <span>Antonia Andreazza</span> Clínica Estética
          </p>  
        </a>
        <a className="navbar-brand" href="/">
          <ImageBar 
            src="https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-82750.appspot.com/o/AF%20-%20MARCA%20REDONDA.png?alt=media&token=bea327c1-0073-4b66-837a-53c3a6b82ba1"
            alt="logo de clinica estética Antonia Andreazza" 
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
              <a className="nav-link px-3" href="/">Página Inicial</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Tratamentos
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" onClick={() => verify(0)} style={{cursor:'pointer'}}>Peeling químico</a>
                <a class="dropdown-item" onClick={() => verify(1)} style={{cursor:'pointer'}}>Hidratação facial</a>
                <a class="dropdown-item" onClick={() => verify(2)} style={{cursor:'pointer'}}>Detox facial </a>
                <a class="dropdown-item" onClick={() => verify(3)} style={{cursor:'pointer'}}>Estimulação de colágeno</a>
                <a class="dropdown-item" onClick={() => verify(4)} style={{cursor:'pointer'}}>Lipomodelagem corporal</a>
                <div class="dropdown-divider"></div>
                  <a class="dropdown-item" onClick={() => verify(5)} style={{cursor:'pointer'}}>Depilação a laser</a>
                  <a class="dropdown-item" onClick={() => verify(6)} style={{cursor:'pointer'}}>Microagulhamento</a>
                  <a class="dropdown-item" onClick={() => verify(7)} style={{cursor:'pointer'}}>Ultrassom focalizado</a>
                  <a class="dropdown-item" onClick={() => verify(8)} style={{cursor:'pointer'}}>Ultrassom microfocalizado</a>
                  <a class="dropdown-item" onClick={() => verify(9)} style={{cursor:'pointer'}}>Ultrassom tradicional</a>
                  <a class="dropdown-item" onClick={() => verify(10)} style={{cursor:'pointer'}}>Corrente russa</a>
                  <a class="dropdown-item" onClick={() => verify(11)} style={{cursor:'pointer'}}>Radiofrequência</a>
                  <a class="dropdown-item" onClick={() => verify(12)} style={{cursor:'pointer'}}>Fototerapia</a>
                </div>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="/info">Quem Somos</a>
            </li>
            
            <li className="nav-item active">
              <a className="nav-link px-3" href="/faqs">FAQs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="/agendamentos">Agende</a>
            </li>
          </ul>
          <ul className="navbar-nav flex-row">
            {/*<li className="nav-item">
                <a className="nav-link pe-3" href="#">
                  <i className="fa-brands fa-tiktok"></i> 
                </a>
              </li> */}
            <li className="nav-item">
              <a className="nav-link px-3" href="https://www.facebook.com/antonia.andreazza?mibextid=2JQ9oc">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ps-3" href="https://www.instagram.com/esteticantoniandreazza/">
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