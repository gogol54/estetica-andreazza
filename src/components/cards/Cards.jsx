import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`

const BoxImage = styled.div`
  :hover{
    cursor: pointer;
    background: #e0e0e0;
    opacity: 0.7;
  }
  
`
const Title = styled.h3`
  color: #966D39;
  font-weight: 400px;
  font-family: 'Reenie Beanie', cursive;
  font-size: 30px;
  margin: 10px;
`
const Spn = styled.span`
  color: #966D39;
  font-family: 'Reenie Beanie', cursive;
  font-weight: 400px;
  font-size: 26px;
`

export default function App() {
  return (
    <Container className='container'>
      <center>
        <Title>Conheça outros tratamentos</Title>
      </center>
      <MDBRow className='row-cols-3 row-cols-md-3 g-4'>
        <MDBCol>
          <BoxImage>
            <MDBCard>
              <MDBCardImage
                src='https://th.bing.com/th/id/OIP.ztwpZ7moXUpqdjicYakOIgHaEU?pid=ImgDet&rs=1'
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle>Peeling Químico</MDBCardTitle>
                <MDBCardText>
                  Remoção de camadas superficiais da pele buscando promover a renovação celular e melhorar a aparência da pele. 
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </BoxImage>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src='https://th.bing.com/th/id/OIP.fOCvrNl2n9RnCIV8kQ_vvAHaEO?pid=ImgDet&rs=1'
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Hidratação Facial</MDBCardTitle>
              <MDBCardText>
                A hidratação facial é um procedimento que repõe a umidade na pele, ajudando a mantê-la saudável, suave e com aparência mais jovem.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol style={{flexDirection:'inline', overflow: 'hidden'}}>
          <MDBCard>
            <MDBCardImage
              src='https://th.bing.com/th/id/R.ccac5b28ee34f21695db6a2a0ebe828b?rik=Tc1sT8QopmSC8Q&riu=http%3a%2f%2ferlaskin.com%2fskinerla%2fwp-content%2fuploads%2f2017%2f01%2fDETOX-thegem-blog-default.jpg&ehk=CmA%2bo3PnMBKzxpHvSBrpX8Fn1Vx1EEEM8tK1bimwigY%3d&risl=&pid=ImgRaw&r=0'
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Detox Facial</MDBCardTitle>
              <MDBCardText>
                O detox facial é um tratamento que visa remover impurezas da pele, 
                desobstruir os poros e revitalizar a tez, promovendo uma aparência mais radiante e saudável.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src='https://mdbootstrap.com/img/new/standard/city/044.webp'
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </Container>
  );
}