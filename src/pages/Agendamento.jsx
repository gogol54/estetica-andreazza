import React from 'react'
import Topbar from '../components/topbar/Topbar'
import Footer from '../components/footer/Footer'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCheckbox,
  MDBInput,
  MDBTextArea,
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
const ButtonDiv = styled.div`
  width: 100%;
  align-content: center;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
`
const Alink = styled.a`
  display: block;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-family: sans-serif;
  text-decoration: none;
  color: #926e45;
  border: 0.5px solid #926e45;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  transition: all .35s;
  span{
    position: relative;
    z-index: 2;
  }
  :after{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #eadfdb;
    transition: all .35s;
  }
  :hover{
    color: #fff;
    text-decoration: none;
  }
  :hover::after{
    width: 100%;
  }
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
function Agendamento() {
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
                  <input  placeholder='Nome' style={{backgroundColor:'white', width:'90%', marginTop:'20px', borderRadius:'5px', padding:'5px', border:'1px solid #dadada'}} />
                  <input  placeholder='Email' style={{backgroundColor:'white', width:'90%', marginTop:'20px', borderRadius:'5px', padding:'5px', border:'1px solid #dadada'}} />
                  <input  placeholder='Telefone' style={{backgroundColor:'white', width:'90%', marginTop:'20px', borderRadius:'5px',padding:'5px', border:'1px solid #dadada'}} />
                  <a href="https://api.whatsapp.com/send?phone=5555996817475&text=" style={{textDecoration: 'none'}}>
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