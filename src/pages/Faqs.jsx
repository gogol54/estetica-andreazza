import React from 'react'
import Topbar from '../components/topbar/Topbar'
import Footer from '../components/footer/Footer'
import styled from 'styled-components'
import { faq } from '../data'

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
const Spn = styled.span`
  color: #966D39;
  font-family: 'Reenie Beanie', cursive;
  font-weight: 400px;
  font-size: 26px;
`
const FaqTittle = styled.h6`
  font-family: 'Montserrat Regular';
  font-weight: 400;
  font-size: 20px;
  color: #444444;
`

const Faqs = () => {
  console.log(faq)
  return (
    <>
    <Topbar />
      <Container className='container-sm' >
      <br />
        <div class="faq_area section_padding_130" id="faq">
          <div class="container">
            
            <div class="row justify-content-center">
              <div class="col-12 col-sm-8 col-lg-6">
                <div class="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style={{/*visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;*/}}>
                  <Title>Saiba Mais Aqui</Title>
                  <Spn>Perguntas Respondidas, descubra o que você precisa saber através desta jornada para o conhecimento.</Spn>
                  <div class="line"></div>
                </div>
              </div>
            </div>
            <br />
            <div class="row justify-content-center">
              <div class="col-12 col-sm-10 col-lg-8">
                <div class="accordion faq-accordian" id="faqAccordion">
                {
                  faq.map((item, index) => (
                    <>
                    <div class="card border-0 wow fadeInUp" data-wow-delay="0.2s">                   
                      <div class="card-header" id={index}>
                        <FaqTittle 
                          class="mb-0 collapsed" 
                          data-toggle="collapse" 
                          data-target={item.target} 
                          aria-expanded="true" 
                          aria-controls="1"
                        > 
                          {item.question} <i class="fas fa-xs fa-chevron-down" fa-xs style={{color:'#966d39'}}></i>


                        </FaqTittle>
                      </div>

                      <div class="collapse" id={item.id} aria-labelledby={index} data-parent="#faqAccordion">
                        <div class="card-body">
                          <p>
                            {item.reply}
                          </p>
                        </div>
                      </div>
                    </div>
                    <br />
                    </>
                  ))
                }
                  <div class="support-button text-center d-flex align-items-center justify-content-center mt-4 wow fadeInUp" data-wow-delay="0.5s" style={{/*visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;*/}}>
                    <i class="lni-emoji-sad"></i>
                    <p class="mb-0 px-2">Ainda com dúvidas?</p>
                    <a href="/agendamentos"> Entre em contato agora mesmo</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <br /><br />
      </ Container>
    <Footer />
    </>
  )
}

export default Faqs