import React, { useState } from 'react'
import Topbar from '../components/topbar/Topbar'
import Footer from '../components/footer/Footer'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
}
from 'mdb-react-ui-kit';
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 120px;
  margin-bottom: 40px;
  @media (max-width: 540px) {
    margin-top: 70px;
  }
`
const BGwhats = styled.div`
  background-color: #265c54;
  width: 100%;
  padding: 10px;
`
const BTNwpp = styled.div`
  align-content: center;
  justify-content: center;
  align-items: center;
  background-color: #53a451;
  color: white;
  border: none;
  padding: 10px;
  margin-top: 15px !important;
  margin-bottom: 10px !important;
  border-radius: 5px;
  width: 90%;
  margin: auto;
  
`
const Title = styled.h3`
  color: #966D39;
  font-weight: 400px;
  font-family: 'Reenie Beanie', cursive;
  font-size: 30px;
`
//
function Agendamento() {
  const [name, setName] = useState('indefinido')
  const [mail, setMail] = useState('indefinido')
  const [number, setNumber] = useState('indefinido')

  let message = 'Oi!%20sou%20a(o)%20'+name+',%0A'+mail+',%0A(55)%20'+number+'.%0AGostaria%20de%20saber%20mais%20informações.%20'
  return (
    <>
    <Topbar />
    <Container>
      <center><br /><Title>Solicite uma avaliação</Title></center>
     
      <MDBContainer fluid className='mt-5'>
      <section className='text-center'>
        <div
          className='p-5 bg-image'
          style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/facilitastorage.appspot.com/o/caapa.png?alt=media&token=1ed36a0e-c12c-4934-9345-c7f30eb0ab04')", height: '300px', objectFit:'cover' }}
        ></div>

        <div
          className='card mx-4 mx-md-5 shadow-5-strong'
          style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}
        >
          <div className='card-body py-5 px-md-5'>
            <MDBRow className='mb-5'>
              <MDBCol lg='3' md='2' className='mb-5 mb-lg-0 position-relative'>
                <MDBIcon icon='user-alt' size='3x' className='mb-4' style={{color: '#966d39'}} />
                <div className='vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0'></div>
              </MDBCol>

              <MDBCol lg='3' md='6' className='mb-5 mb-lg-0 position-relative'>
                <MDBIcon icon='heart' size='3x' className='mb-4'  style={{color: '#966d39'}}/>
                <div className='vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0'></div>
              </MDBCol>

              <MDBCol lg='3' md='6' className='mb-4 mb-lg-0 position-relative'>
                <MDBIcon icon='leaf' size='3x' className=' mb-4' style={{color: '#966d39'}}/>
                <div className='vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0'></div>
              </MDBCol>

              <MDBCol lg='3' md='6' className='mb-4 mb-lg-0 position-relative'>
                <MDBIcon icon='eye-dropper' size='3x' className='mb-4' style={{color: '#966d39'}}/>
              </MDBCol>
            </MDBRow>

            <MDBRow class='d-flex justify-content-center' style={{display: 'flex'}}>
             
              <MDBCol lg='5' class='col-lg-5'>
                <Title>Via WhatsApp</Title>
                <form style={{backgroundColor:'#ece5dd'}}>
                  <BGwhats>
                    <label className='mb-4' id='password2' label='Nome' style={{color: 'white'}}>
                      Olá, sejam bem vindos(as), como posso ajudar?
                    </label>
                  </BGwhats>
                  <input  
                    placeholder='Nome' 
                    type='text'
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      backgroundColor:'white', 
                      width:'90%', 
                      marginTop:'20px', 
                      borderRadius:'5px', 
                      padding:'5px', 
                      border:'1px solid #dadada'}} 
                  />
                  <input  
                    placeholder='Email' 
                    onChange={(e) => setMail(e.target.value)}
                    style={{
                      backgroundColor:'white', 
                      width:'90%', 
                      marginTop:'20px', 
                      borderRadius:'5px', 
                      padding:'5px', 
                      border:'1px solid #dadada'}} 
                  />
                  <input  
                    placeholder='Telefone' 
                    onChange={(e) => setNumber(e.target.value)}
                    style={{
                      backgroundColor:'white', 
                      width:'90%', 
                      marginTop:'20px', 
                      borderRadius:'5px',
                      padding:'5px', 
                      border:'1px solid #dadada'}} 
                  />
                  <a href={"https://api.whatsapp.com/send?phone=555596817475&text="+message} style={{textDecoration: 'none'}}>                    
                    <BTNwpp className=" mb-4" >
                      Iniciar conversa
                    </BTNwpp>
                  </a>
                  <br />
                </form>
              </MDBCol>
            </MDBRow>
          </div>
        </div>
      </section>
    </MDBContainer>
      </Container>
    <Footer />
    </>
    
  );
}

export default Agendamento;