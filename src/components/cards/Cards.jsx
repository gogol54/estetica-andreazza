import React from 'react';
import styled from 'styled-components'
import { treatments } from '../../data'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`
const BoxTouchable = styled.div`
  margin: 10px;
  :hover{
    cursor: pointer;
    background: #e0e0e0;
    opacity: 0.7;
  }
`
const Box = styled.section`
	display: flex !important;
  justify-content: space-between;
  flex-flow: wrap;
`
const Item = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff; //eadfdb
  border: 0.5px solid #ececec;
`
const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit:cover;
  border-radius: 3px 3px 0px 0px;
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
const Info = styled.h5`
  font-weight: 500;
  margin: 10px;
  color: #616161;
`
const Text = styled.p`
  font-weight: 400;
  max-width: 330px;
  color: #616161;
  margin: 5px;
`
export default function Card({dataset}) {
  let history = useNavigate()
  console.log(dataset)
  const redirect = (value) => {
    history("/treatments",{ state: { data: value } })
    window.location.reload(true)
  }
  return (
    <Container className='container'>
      <center>
        <Title>Conheça outros tratamentos</Title>
      </center>
      <Box>
        { dataset ? 
            dataset?.map((item, index) => (
            <BoxTouchable onClick={() => redirect(item.id)}>
              <Item>
                <Image
                  src={item.src}
                  alt='...'
                  position='top'
                />
                <Info>{item.name}</Info>
                <Text>{item.description}</Text>
              </Item>
            </BoxTouchable>
            ))
         
          :
        
            treatments?.map((item, index) => (
            <BoxTouchable onClick={() => redirect(index)}>
              <Item>
                <Image
                  src={item.src}
                  alt='...'
                  position='top'
                />
                <Info>{item.name}</Info>
                <Text>{item.description}</Text>
              </Item>
            </BoxTouchable>
            ))
         
        }
        </Box>
    </Container>
  );
}