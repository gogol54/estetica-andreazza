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
import { treatments } from '../../data'

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
  console.log(treatments)
  return (
    <Container className='container'>
      <center>
        <Title>Conheça outros tratamentos</Title>
      </center>
      <MDBRow className='row-cols-3 row-cols-md-3 g-4'>
        {
          treatments.map((item, index) => (
            <>
            <MDBCol>
              <BoxImage>
                <MDBCard>
                  <MDBCardImage
                    style={{objectFit: 'cover', backgroundColor: 'gray'}}
                    src={item.src}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>{item.name}</MDBCardTitle>
                    <MDBCardText>
                      {item.description} 
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </BoxImage>
            </MDBCol>
            </>
          ))
        }
      </MDBRow>
    </Container>
  );
}