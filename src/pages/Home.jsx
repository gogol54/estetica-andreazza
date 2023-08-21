import React from 'react'
import Topbar from '../components/topbar/Topbar'
import Footer from '../components/footer/Footer'
import Slider from '../components/slider/Slider'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 120px;
  @media (max-width: 540px) {
    margin-top: 70px;
  }
`
const Home = () => {
  return (
    <>
      <Topbar/>
      <Container>
        <Slider/>
      </Container>
      <Footer/>
    </>
  )
}

export default Home