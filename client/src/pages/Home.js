import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import styles from '../css/Home.module.css'
import gsap from 'gsap'
const data = [
  {
    image: require('../images/milanfina.png'),
  },
  {
    image: require('../images/milanfina.png'),
  },
  {
    image: require('../images/milanfina.png'),
  }
]


function Home() {
  useEffect(()=>{
    gsap.from('.Desc',{
      x:-300,
      duration : 1.5,
      opacity:0,
    })
    gsap.from('.Carousel',{
      x :300,
      duration : 1.5,
      opacity:0,
    })
  },[])
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>

      <div className="relative container ">
        
          <div className={`Desc top-50 text-center mx-auto ${styles.texting}`}>
            <strong>"Milan"</strong> is the annual techno-cultural-sports General Championship of IIT Hyderabad. It consists of 16 Sports, 19 Cultural and 9 technical events conducted between all the hostel blocks. In this second edition of Milan, the sports, cultural, and technical events will start from 25th February and will conclude on 6th March
          </div>
          <div className={`Carousel mx-auto my-5 ${styles.width}`}  >
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {data.map((slide, i) => {
                return (

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={slide.image}
                      alt="slider image"
                    />
                    <Carousel.Caption>
                      <h3>{slide.caption}</h3>
                      <p>{slide.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })}

            </Carousel>
          </div>
  
        <div className='m-3'>
          <h2 className={`text-center ${styles.color}`}>OVERALL LEADERBOARD</h2>
          <div className='w-full  mx-auto'>
            <div class="infogram-embed" data-id="6336eb78-9a40-48ee-8ae9-020972a531d8" data-type="interactive" data-title="Bar Chart"></div>
          </div>
        </div>
        <div className={` mx-auto my-5 ${styles.width}`}  >
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {data.map((slide, i) => {
              return (

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={slide.image}
                    alt="slider image"
                  />
                  <Carousel.Caption>
                    <h3>{slide.caption}</h3>
                    <p>{slide.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}

          </Carousel>
        </div>
      </div>
    </>
  );

}

export default Home