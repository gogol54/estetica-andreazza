import React from 'react'
import Topbar from '../components/topbar/Topbar'
import Footer from '../components/footer/Footer'
import {
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardHeader,
  MDBCol,
  MDBCardBody,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
  MDBTabsContent,
  MDBIcon,
  MDBCheckbox,
  MDBInput,
  MDBBtn,
  MDBTextArea,
}
from 'mdb-react-ui-kit';
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 120px;
  @media (max-width: 540px) {
    margin-top: 70px;
  }
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
              <MDBCol lg='3' md='6' className='mb-5 mb-lg-0 position-relative'>
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

            <MDBRow class='d-flex justify-content-center'>
              <MDBCol lg='6' class='col-lg-6'>
                <form>
                  <MDBInput className='mb-4' id='password2' label='Nome' />
                  <MDBInput className='mb-4' type='email' id='email2' label='Seu email' />
                  <MDBTextArea label='O que você gostaria de melhorar em relação à estética do seu corpo ou rosto?' rows={4} className='mb-4' />

                  <MDBRow className='mb-4 justify-content-center'>
                    <MDBCol md='6' className='d-flex justify-content-center'>
                      <MDBCheckbox className=' mb-3 mb-md-0' defaultChecked label='Confirmar ' />
                    </MDBCol>
                  </MDBRow>

                  <MDBBtn 
                    type='submit' 
                    block
                    className='btn btn-success mb-4'  
                    color="indigo"
                    style={{
                      backgroundColor: '#966d39', 
                      borderColor: '#966d39',

                    }}>
                    Enviar
                  </MDBBtn>
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