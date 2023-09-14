import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { treatments } from '../data'
import Topbar from '../components/topbar/Topbar'
import Footer from '../components/footer/Footer'
import styled from 'styled-components'
import Cards from '../components/cards/Cards'

const Container = styled.div`
  margin-top: 120px;
  margin-bottom: 40px;
  @media (max-width: 540px) {
    margin-top: 70px;
  }
`
const Title = styled.h1`
  color: #966D39;
  font-family: 'Reenie Beanie', cursive;
`
const Box = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
`
const MiniBox = styled.img`
  border-radius: 20px;
  max-width: 350px;
  max-height: 290px;
  flex: 2;
`
const Message = styled.div`
  flex: 2;
  margin-left: 20px;
  @media (max-width: 540px) {
    margin-top: 20px;
  }
`
const Treatments = () => {
  const { state } = useLocation()
  const treat = treatments.filter((item, index) => index === state.data)
  let selected = []
  for (let i = 0; i < 3; i++) {
    selected.push(Math.floor(Math.random() * 12))
  }
  var dataset = treatments.filter((item, index) => {
    if(selected.includes(index)) return item
    }
  )

  return (
    
    <>
    <Topbar />
    
    <Container className='container'>
    <br />
    <Title >{treat[0].name}</Title>
    <Box>
      <MiniBox
        src={treat[0].src}
        alt='imagem tratamento'
      />
      <Message>
        {treat[0].message}
      </Message>
    </Box>
    </Container>
      <Cards dataset={dataset} />
    <Footer />
    </>
  )
}

export default Treatments