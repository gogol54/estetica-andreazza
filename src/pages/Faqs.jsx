import React from 'react'
import Topbar from '../components/topbar/Topbar'
import Footer from '../components/footer/Footer'
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
const Spn = styled.span`
  color: #966D39;
  font-family: 'Reenie Beanie', cursive;
  font-weight: 400px;
  font-size: 26px;
`
const Faqs = () => {
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
                <div class="row justify-content-center">
                    
                    <div class="col-12 col-sm-10 col-lg-8">
                        <div class="accordion faq-accordian" id="faqAccordion">
                            <div class="card border-0 wow fadeInUp" data-wow-delay="0.2s" style={{/*visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;*/}}>
                                <div class="card-header" id="headingOne">
                                    <h6 
                                      class="mb-0 collapsed" 
                                      data-toggle="collapse" 
                                      data-target="#collapseOne" 
                                      aria-expanded="true" 
                                      aria-controls="collapseOne"
                                    > <strong>Como chegar até este endereço?</strong>
                                      
                                    </h6>
                                </div>
                                <div class="collapse" id="collapseOne" aria-labelledby="headingOne" data-parent="#faqAccordion">
                                    <div class="card-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                                        <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div class="card border-0 wow fadeInUp" data-wow-delay="0.3s" style={{/*visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;*/}}>
                                <div class="card-header" id="headingTwo">
                                    <h6 
                                      class="mb-0 collapsed" 
                                      data-toggle="collapse" 
                                      data-target="#collapseTwo" 
                                      aria-expanded="true" 
                                      aria-controls="collapseTwo"
                                    > 
                                      <strong>Quanto tempo dura o procedimento de preencimento?</strong>
                                    </h6>
                                </div>
                                <div class="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#faqAccordion">
                                    <div class="card-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                                        <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div class="card border-0 wow fadeInUp" data-wow-delay="0.4s" style={{/*visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;*/}}>
                                <div class="card-header" id="headingThree">
                                    <h6 
                                      class="mb-0 collapsed" 
                                      data-toggle="collapse" 
                                      data-target="#collapseThree" 
                                      aria-expanded="true" 
                                      aria-controls="collapseThree"
                                    > 
                                      <strong>Após fazer Peeling, posso pegar sol?</strong>
                                    </h6>
                                </div>
                                <div class="collapse" id="collapseThree" aria-labelledby="headingThree" data-parent="#faqAccordion">
                                    <div class="card-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                                        <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div class="support-button text-center d-flex align-items-center justify-content-center mt-4 wow fadeInUp" data-wow-delay="0.5s" style={{/*visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;*/}}>
                            <i class="lni-emoji-sad"></i>
                            <p class="mb-0 px-2">Ainda com dúvidas?</p>
                            <a href="/agendamentos"> Entre em contato agora mesmo</a>
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