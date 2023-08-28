import React from 'react'
import styled from 'styled-components'

const Tittle = styled.h5`
  color: white; 
  text-shadow: black 0.1em 0.1em 0.2em;
`
const Content = styled.p`
  color: white; 
  text-shadow: black 0.10em 0.2em 0.2em;
`
const ImageBG = styled.img`
  object-fit: cover;
  width: 900px;
  height: 600px;
`

const Slider = () => {
  return (
    <div 
      id="carouselBasicExample" 
      class="carousel slide carousel-fade" 
      data-mdb-ride="carousel" 
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="2"
          aria-label="Slide 3"
        ></button>
        
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <ImageBG 
            src="https://img.freepik.com/fotos-premium/depilacao-a-laser-nas-pernas-das-senhoras-no-salao-de-beleza_130111-7231.jpg?w=900" 
            class="d-block w-100" 
            alt="Sunset Over the City"

          />
        <div class="carousel-caption d-none d-md-block">
        <Tittle>Laser Day</Tittle>
        <Content>Depilação a laser, destinada as pessoas que buscam uma solução eficiente.</Content>
      </div>
    </div>

    <div class="carousel-item">
      <ImageBG 
        src="https://firebasestorage.googleapis.com/v0/b/facilitastorage.appspot.com/o/antonia%2FDSCN0051.png?alt=media&token=85b35184-3336-4915-9efa-4c324d5d1c52" 
        class="d-block w-100" 
        alt="Canyon at Nigh"

      />
      <div class="carousel-caption d-none d-md-block">
        <Tittle>Lipomodelagem</Tittle>
        <Content>Escolha um tratamento significante na redução de gorduras localizadas, opte pela Lipomodelagem.</Content>
      </div>
    </div>

    <div class="carousel-item">
      <ImageBG 
        src="https://img.freepik.com/fotos-gratis/jovem-mulher-caucasiana-recebendo-massagem-anti-idade_1098-18121.jpg?w=900&t=st=1692132272~exp=1692132872~hmac=2348ba9d41cb54a15807d964cdca1723a50fdfb3d22c870325928cefade8d5cf" 
        class="d-block w-100" 
        alt="Cliff Above a Stormy Sea"
 
      />
      <div class="carousel-caption d-none d-md-block">
        <Tittle>Skincare</Tittle>
        <Content>Ampliando seus resultados garantido uma pele do rosto macia e bem cuidada.</Content>
      </div>
    </div>
  </div>

    <button class="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
      <span> <i class="fas fa-lg fa-angle-left" style={{color:'black'}}></i> </span>
    </button>
    <button class="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
      <span> <i class="fas fa-lg fa-angle-right" style={{color:'black'}}></i> </span>
    </button>
  </div>
  )
}

export default Slider