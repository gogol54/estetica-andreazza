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
const BoxShad = styled.div`
  flex: 2;
  width: auto;
  height: auto;
  border-radius: 100px 0px 100px 0px;
  margin-top: 130px;
  margin-bottom: 20px;
  -webkit-box-shadow: 2px 10px 29px -4px rgba(150,110,57,0.67);
  -moz-box-shadow: 2px 10px 29px -4px rgba(150,110,57,0.67);
  box-shadow: 2px 10px 29px -4px rgba(150,110,57,0.67);
  @media (max-width: 540px) {
    margin-top: 10px;
  }
`
const BoxShadDown = styled.div`
  flex: 2;
  width: auto;
  height: auto;
  border-radius: 20px;
  margin-bottom: 20px;
  margin: 20px;
  -webkit-box-shadow: 2px 10px 29px -4px rgba(150,110,57,0.67);
  -moz-box-shadow: 2px 10px 29px -4px rgba(150,110,57,0.67);
  box-shadow: 2px 10px 29px -4px rgba(150,110,57,0.67);
`
const TextBox = styled.div`
  color: #4d4d4d;
  font-weight: 300;
  margin: 20px;
`
const ImageTop = styled.img`
  margin-left: 20px;
  flex: 2;
  padding: 10px;
  border-radius: 500px 120px 500px 120px;
  width: 250px;
  height: 600px;
  object-fit: cover;
`

const ImageFooter = styled.img`
  margin-left: 20px;
  flex: 2;
  padding: 10px;
  border-radius: 20px 120px 0px 10px;
  width: 250px;
  height: 600px;
  object-fit: cover;
`

const GridTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: initial;
  margin: 20px;
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
const Info = () => {
  return (
    <>
      <Topbar />
        <Container className='container-sm' >
          <center><br />
            <div >
              <Title>Antonia Andreazza Clínica Estética: </Title><Spn>Renovando sua beleza a cada dia.</Spn>
            </div>
          </center>
          <GridTop>
            <TextBox>
              <h4><center>Nossa História</center></h4>
              <p>
                Nossa jornada começou há 3 anos, quando a fundadora e proprietária, Antonia Andreazza, reconhecendo a necessidade de um espaço 
                que oferecesse tratamentos estéticos inovadores e personalizados, decidiu transformar sua paixão em uma realidade palpável. 
                Sua formação acadêmica sólida, aliada à sua visão empreendedora, possibilitou a criação da Clínica. Somando-se a isto determinada
                experiência, a mente por trás da Clínica é uma profissional altamente qualificada, possuindo uma pós-graduação em Estética 
                Clínica. 
                Com um compromisso inabalável diate as atualizações constantes das práticas e tendências mais recentes,
                ofertando a todos os clientes tratamentos de última geração, com resultados visíveis e
                duradouros.
                
              </p>
            </TextBox>
          </GridTop>
          <GridTop>
            <BoxShad>
              <TextBox><br /> <br />
                <p>
                  <h4><center>Explore Nossa Jornada e Dedicação: Bem-Vindo(a) à Clínica de Estética Antonia Andreazza</center></h4>
                  Completando três anos de excelência em cuidados estéticos, nos 
                  orgulhamos de ser uma referência no setor de beleza e bem-estar de Rosário do Sul. A clínica se destaca por oferecer 
                  serviços que vão além da superfície, promovendo a harmonia entre corpo, mente e alma.
                </p>
              </TextBox>
            </BoxShad>
            <ImageTop 
              src='https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-82750.appspot.com/o/Screenshot%202023-08-16%20at%2018-47-24%20Cl%C3%ADnica%20Est%C3%A9tica%20Ros%C3%A1rio%20do%20Sul%20(%40esteticantoniandreazza)%20%E2%80%A2%20Instagram%20photos%20and%20videos.png?alt=media&token=db24955c-14f7-4fce-bf06-b36eaeb62757'
              alt='img founder'
              width=''
              height=''
            />
          </GridTop>


          <GridTop>
            <BoxShadDown>
              <TextBox><br /> <br />
                <p><h4><center>Missão e Valores</center></h4>
                  Nossa missão é elevar a autoestima e o bem-estar de cada cliente, proporcionando experiências estéticas que vão além da superfície. 
                  Acreditamos que a verdadeira beleza emana de dentro para fora, e é por isso que oferecemos
                  um ambiente acolhedor e profissional, onde os clientes podem relaxar e confiar em nossos serviços para atingir seus objetivos estéticos.
                </p>
              </TextBox>
            </BoxShadDown>
        
            <BoxShadDown>
              <TextBox><br /> <br />
                <p><h4><center> Serviços para Você</center></h4>
                  Os atendimentos são projetados para abranger uma ampla gama de necessidades estéticas, desde tratamentos
                  faciais avançados até procedimentos corporais especializados. Utilizamos tecnologias de ponta e produtos de qualidade,
                  para garantir que cada cliente receba cuidados personalizados e resultados excepcionais.
                </p>
              </TextBox>
            </BoxShadDown>
          </GridTop>      
          <GridTop>
            <TextBox>
              <h4><center>Compromisso e comprometimento. </center></h4>
              <p>
                Reafirmo o compromisso em fornecer serviços de estética da mais alta qualidade, promovendo a autoconfiança e o empoderamento 
                de cada indivíduo que escolhe a Clínica Antonia Andreazza. Agradeço a todos os clientes que confiaram em mim ao longo desses 
                anos e aguardo ansiosamente a oportunidade de continuar a ser parte de suas jornadas de beleza e autoaperfeiçoamento.
              </p> 
              <p>
                Venha nos visitar e descubra como podemos ajudá-lo(a) a revelar sua verdadeira essência e irradiar confiança através da beleza!
              </p> 
               <p>Atenciosamente,</p>
               <p>Antonia Andreazza;</p>
                <p>
                  Fundadora e Proprietária da Clínica de Estética Antonia Andreazza.                  
              </p>
            </TextBox>
          </GridTop>  
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215.3959645328967!2d-54.920282952961585!3d-30.256022509545236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9500e7da9df3b2b9%3A0x7697bfe551f17945!2sAntonia%20Andreazza%20Cl%C3%ADnica%20Est%C3%A9tica!5e0!3m2!1spt-BR!2sbr!4v1692508038626!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="450" 
            style={{border:'2px solid transparent', borderRadius: '10px', marginBottom: '15px'}}
            allowfullscreen="true" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">  
          </iframe>
        </Container>
        
      <Footer />
  </>
  )
}

export default Info