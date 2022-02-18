import React,{useState} from 'react'
import { Accordion, Table, Tabs,Tab } from 'react-bootstrap'
import Sports from '../components/Sports/Scores'
import Culti from '../components/culti/Scores'
import Techy from '../components/techy/Scores'

function Home() {
    const [key, setKey] = useState('culti');
  return (
    <div className="relative container">
      <div className="w-75 overall-leader">
        Leader Board
      </div>
      <div className='relative w-50 mx-auto '>
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="culti" title="Culti">
        <Culti />
      </Tab>
      <Tab eventKey="Techy" title="Techy">
        <Techy />
      </Tab>
      <Tab eventKey="Sports" title="Sports">
        <Sports />
      </Tab>
    </Tabs>
    </div>
    </div>
  );

}

export default Home