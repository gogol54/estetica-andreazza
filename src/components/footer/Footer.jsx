import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter style={{backgroundColor: '#966D39', color: 'white'}} className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{backgroundColor: '#966D39', color: 'white'}}>

      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color: 'white'}}>
                <MDBIcon color='ligth' icon='gem' className='me-3' />
                Antonia Andreazza 
              </h6>
              <p style={{color: '#bebebe'}}>
                Tratamentos personalizados para resultados reais. 
                Estética Avançada Facial e Corporal.
                Pós-grad. em Estética Clínica.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color: 'white'}}>Atendimentos</h6>
              <p style={{color: '#bebebe'}}>
                Seg a Sex 08:00 - 18:00
              </p>
             
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color: 'white'}}>Serviços</h6>
              <p style={{color: '#bebebe'}}>
                <a href='#!' className='text-reset'>
                  Lipomodelagem
                </a>
              </p>
              <p style={{color: '#bebebe'}}>
                <a href='#!' className='text-reset'>
                  Peeling Quimico
                </a>
              </p>
              <p style={{color: '#bebebe'}}>
                <a href='#!' className='text-reset'>
                  Skincare
                </a>
              </p>
              <p style={{color: '#bebebe'}}>
                <a href='#!' className='text-reset'>
                  Hidratação profunda
                </a>
              </p>
              <p style={{color: '#bebebe'}}>
                <a href='#!' className='text-reset'>
                  Depilação a Laser
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color: 'white'}}>Endereço</h6>
              <p style={{color: '#bebebe'}}>
                <MDBIcon color='dark' icon='home' className='me-2' />
                R. Gen. Canabarro, 885 - Centro, Rosário do Sul - RS, 97590-000
              </p>
              <p style={{color: '#bebebe'}}>
                <MDBIcon color='dark' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p style={{color: '#bebebe'}}>
                <MDBIcon color='dark' icon='phone' className='me-3' /> +55 55 99681-7475 
              </p>
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{backgroundColor: '#966D39', color: 'white'}}>
        © 2023 Antonia Andreazza Clínica Estética -
        <a className='text-reset' href='https://jardeleko.github.io/portfolio/'>
        Todos os direitos reservados.
        </a>
      </div>
    </MDBFooter>
  );
}