import React from 'react'
import Topbar from '../components/topbar/Topbar'
import Footer from '../components/footer/Footer'
import styled from 'styled-components'

const BoxShad = styled.div`
  flex: 2;
  width: auto;
  height: auto;
  border-radius: 100px 0px 100px 0px;
  margin-top: 160px;
  margin-bottom: 20px;
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
  border-radius: 20px;
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
const Info = () => {
  return (
    <>
      <Topbar />
        <div className='container-sm' style={{marginTop:'130px'}}>
          <GridTop>
            <BoxShad>
              <TextBox><br /> <br />
                <p>
                  <h4><center>Quem somos</center></h4>
                  Bem-vindo(a) à Clínica de Estética Antonia Andreazza! Completando três anos de excelência em cuidados estéticos, nos 
                  orgulhamos de ser uma referência no setor de beleza e bem-estar. Fundada por uma empreendedora apaixonada e altamente 
                  qualificada, que possui uma pós-graduação em Estética Clínica, nossa clínica se destaca por oferecer serviços que vão além 
                  da superfície, promovendo a harmonia entre corpo, mente e alma.
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
        </div>
      <Footer />
  </>
  )
}

export default Info