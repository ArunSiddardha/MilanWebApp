import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import { Accordion, Table, Tabs, Tab } from 'react-bootstrap'
import SportsB from '../components/Sports/ScoresB'
import SportsG from '../components/Sports/ScoresG'
import Culti from '../components/culti/Scores'
import Techy from '../components/techy/Scores'
import styles from '../css/Events.module.css'
const data = [
  {
   image: require('../images/milanfina.png'), 
  },
  {
    image:require('../images/milanfina.png'), 
   },
   {
    image:require('../images/milanfina.png'), 
   } 
]

function Events() {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState('culti');
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container relative">
    <div className={`${styles.width} mx-auto my-5 `}  >
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
    <div className={`relative mx-auto my-5 ${styles.width1}`}>
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="culti" title="Culti" tabClassName="profile-tabitem">
        <div className='w-full mx-auto'>
          <div class="infogram-embed" data-id="52ac07a1-91aa-439d-9ff1-5ea8dbcda46b" data-type="interactive" data-title="Copy: Bar Chart"></div>
        </div>
        <Culti />
      </Tab>
      <Tab eventKey="Techy" title="Techy" tabClassName="profile-tabitem">
        <div className='mx-auto' >
          <div className="infogram-embed" data-id="1b06acc0-587e-4a32-b755-ab5695bf3b53" data-type="interactive" data-title="Copy: Culti"></div>
        </div>
        <Techy />
      </Tab>
      <Tab eventKey="SportsB" title="Sports Boys" tabClassName="profile-tabitem">
        <div class="infogram-embed" data-id="24969d67-560e-482d-9284-4e8400d58742" data-type="interactive" data-title="Copy: Techy"></div>
        <SportsB />
      </Tab>
      <Tab eventKey="SportsG" title="Sports Girls" tabClassName="profile-tabitem">
        <div class="infogram-embed" data-id="24969d67-560e-482d-9284-4e8400d58742" data-type="interactive" data-title="Copy: Techy"></div>
        <SportsG />
      </Tab>
    </Tabs>
  </div>
  </div>
    
  );
}
export default Events