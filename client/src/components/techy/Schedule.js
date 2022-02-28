import React,{useEffect,useState} from 'react'
import { Accordion, Table } from 'react-bootstrap';
import Axios from "axios";
function Schedule() {
    const d = new Date();
    let month = (d.getMonth()+1).toString();
    let date = d.getDate().toString();
    let today =  (month==="2") ? (date + "/" + 0 + month) : (0 + date + "/" + 0 + month);
    console.log(today.toString())
    var i=0;
    const itemRows = [];
    const [scores,setscores] = useState([])
     
    const Heads = [
        'Time', 'Event', 'Venue', 'Results'
    ]
    const Dates = ['25/02','26/02','27/02','28/02','01/03','02/03','03/03','04/03','05/03','06/03']
    let index = Dates.indexOf(today)
    console.log(index);
    for(var event in scores){
        const Datey = Dates[i]
            var objs = scores[Datey];
           const item =(
        <Accordion defaultActiveKey={index.toString()}>
        <Accordion.Item eventKey={i.toString()}>
            <Accordion.Header>{Datey}</Accordion.Header>
            <Accordion.Body>
                <Table responsive="xl" striped bordered hover>
                    <thead>
                        <tr>
                            {Heads.map((Head) =>
                            (
                                <th>{Head}</th>
                            ))}
                        </tr>
                    </thead>
                  
                        <tbody >
                        
                        {objs.map((obj)=>(
                            <tr className='text-nowrap fs-lg-2'>
                                <td>{obj.Time}</td>
                                <td>{obj.Event}</td>
                                <td>{obj.Venue}</td>
                                <td>{obj.Results}</td>
                            </tr>
                        ))}
                         
                        </tbody>
                

                </Table>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        )
        itemRows.push(item)
        i+=1
   }
   useEffect(()=>{
    Axios.get('https://gymkhana.iith.ac.in/milanbackend/schedule/techy').then((response)=>{
        setscores(response.data);
    })
},[])
   
    return (
        <div className='container relative'>
          {itemRows}  
        </div>
    )
}

export default Schedule
