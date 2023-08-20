import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './styles.css';

export default function App() {
  return (
    <MDBFooter style={{backgroundColor: '#966D39', color: 'white'}} className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{backgroundColor: '#966D39', color: 'white'}}>

      </section>

      <section className=''>
        <div class="text-box">
          <a href="https://api.whatsapp.com/send?phone=5555996817475&text=" class="btn btn-white btn-animate">
            <i className="fab fa-whatsapp fa-2x"></i>
          </a>
        </div>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='4' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color: 'white'}}>
                <MDBIcon color='ligth' icon='gem' className='me-3' />
                Antonia Andreazza 
              </h6>
              <p style={{color: '#dadada'}}>
                Tratamentos personalizados para resultados reais. 
                Estética Avançada Facial e Corporal.
                Pós-grad. em Estética Clínica.
              </p>
            </MDBCol>

            <MDBCol md='3' lg='1' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color: 'white'}}>Atendimentos</h6>
              <p style={{color: '#dadada'}}>
                Seg a Sex 08:00 - 18:00
              </p>
             
            </MDBCol>

            <MDBCol md='3' lg='4' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color: 'white'}}>Serviços</h6>
              <p style={{color: '#dadada'}}>
                <a href='#!' className='text-reset'>
                  Peeling Químico
                </a>
              </p>
              <p style={{color: '#dadada'}}>
                <a href='#!' className='text-reset'>
                  Hidratação Facial
                </a>
              </p>
              <p style={{color: '#dadada'}}>
                <a href='#!' className='text-reset'>
                  Detox Facial
                </a>
              </p>
              <p style={{color: '#dadada'}}>
                <a href='#!' className='text-reset'>
                  Estimulação de Colágeno
                </a>
              </p>
              <p style={{color: '#dadada'}}>
                <a href='#!' className='text-reset'>
                  Lipomodelagem Corporal
                </a>
              </p>
              <p style={{color: '#dadada'}}>
                <a href='#!' className='text-reset'>
                  Depilação a Laser
                </a>
              </p>
              <p style={{color: '#dadada'}}>
                <a href='#!' className='text-reset'>
                  Microagulhamento
                </a>
              </p>
              <p style={{color: '#dadada'}}>
                <a href='#!' className='text-reset'>
                  Ultrassom: focalizado, microfocalizado e tradicional
                </a>
              </p>
              <p style={{color: '#dadada'}}>
                <a href='#!' className='text-reset'>
                  Corrente Russa
                </a>
              </p>
              <p style={{color: '#dadada'}}>
                <a href='#!' className='text-reset'>
                  Fototerapia
                </a>
              </p>
             
            </MDBCol>

            <MDBCol md='3' lg='4' xl='4' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color: 'white'}}>Endereço</h6>
              <p style={{color: '#dadada'}}>
                <MDBIcon color='dark' icon='home' className='me-2' />
                R. Gen. Canabarro, 885 - Centro, Rosário do Sul - RS, 97590-000
              </p>
              <p style={{color: '#dadada'}}>
                <MDBIcon color='dark' icon='envelope' className='me-3' />
                estetica.antoniaandreazza@gmail.com
              </p>
              <p style={{color: '#dadada'}}>
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