import React from 'react'
import { Container } from 'react-bootstrap';
import Img from "../components/Image"
import styles from "../css/Team.module.css"
import './Team.css'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images/team/', false, /\.(png|jpe?g|JPG)$/));

function Team() {
  return (
    <Container className={styles.text_center}>
      <div>
        <h3 className={styles.headings}>Overall Coordinator</h3>
        <Img style={{borderRadius: "50%"}} src={images["Devasoorya R_Overall Coordinator.jpg"]} alt="OC" name="Devasoorya R" />
      </div>

      <div>
        <h3 className={styles.text_center, styles.heading_other}>Managers</h3>
        <div>
          <h4 className={styles.headings}>Sponsorship and Finance</h4>
          <div className={styles.flex_arrange}>
            <Img style={{borderRadius: "50%"}} src={images["Adyasa_Finance_Manager.jpg"]} alt="SF1" name="Adyasa M" />
            <Img style={{borderRadius: "50%"}} src={images["Shruti_Finance_Manager.jpg"]} alt="SF2" name="Shruti C" />
            <Img style={{borderRadius: "50%"}} src={images["Rajesh_Sponsorship_Manager.jpg"]} alt="SF3" name="Rajesh K" />
          </div>
        </div>

        <div>
          <h4 className={styles.headings}>Hospitality and Infrastructure</h4>
          <div className={styles.flex_arrange}>
            <Img style={{borderRadius: "50%"}} src={images["Aishwarya_HospiandInfra_Manager.jpg"]} alt="HI1" name="Aishwarya M" />
            <Img style={{borderRadius: "50%"}} src={images["Rohit_HospiInfra_Manager.jpg"]} alt="HI2" name="Rohit R" />
            <Img style={{borderRadius: "50%"}} src={images["Bhargav_HospiInfra_Manager.jpg"]} alt="HI3" name="Bhargav P" />
          </div>
        </div>

        <div>
          <h4 className={styles.headings}>Events and Pronites</h4>
          <div className={styles.flex_arrange}>
            <Img style={{borderRadius: "50%"}} src={images["Tejaswini_Events_Pronites_Manager.jpg"]} alt="EP1" name="Tejaswini A" />
            <Img style={{borderRadius: "50%"}} src={images["SaiAshok_Events_Manager.jpg"]} alt="EP2" name="Ashok S" />
            <Img style={{borderRadius: "50%"}} src={images["Vishnu_WebManager.jpeg"]} alt="EP3" name="Vishnu VS" />
            <Img style={{borderRadius: "50%"}} src={images["Sandeep_Events_Pronites_Manager.jpg"]} alt="EP4" name="Sandeep K" />
          </div>
        </div>

        <div>
          <h4 className={styles.headings}>Creatives and Multimedia</h4>
          <div className={styles.flex_arrange}>
            <Img style={{borderRadius: "50%"}} src={images["Saurav M_Creatives_Manager.png"]} alt="CM1" name="Saurav M" />
            <Img style={{borderRadius: "50%"}} src={images["Manaal_Creatives_Manager.jpg"]} alt="CM2" name="Manaal R" />
            <Img style={{borderRadius: "50%"}} src={images["K K_Multimedia_Manager.jpg"]} alt="CM3" name="Kishore K" />
          </div>
        </div>
      </div>

      <div>
        <h3 className={styles.text_center, styles.heading_other}>Domain Coordinators</h3>
        <div>
          <h4 className={styles.headings}>Sponsorship and Finance</h4>
          <div className={styles.flex_arrange}>
            <Img style={{borderRadius: "50%"}} src={images["Shubhav_Finance_Coordinator.jpg"]} alt="SF1" name="Shubhav J" />
            <Img style={{borderRadius: "50%"}} src={images["Minhaz_Sponsorship_Coordinator.jpg"]} alt="SF2" name="Minhaz N" />
            <Img style={{borderRadius: "50%"}} src={images["Aditya_finance_coord.jpg"]} alt="SF3" name="Aditya N" />
            <Img style={{borderRadius: "50%"}} src={images["Tejasree Gunturu_Finance _ Sponsorship_Coordinator.jpg"]} alt="SF4" name="Tejasree G" />
            <Img style={{borderRadius: "50%"}} src={images["Sohan_Finance_Coordinator.jpg"]} alt="SF5" name="Sohan P" />
          </div>
        </div>
        <div>
          <h4 className={styles.headings}>Hospitality and Infrastructure</h4>
          <div className={styles.flex_arrange}>
            <Img style={{borderRadius: "50%"}} src={images["Stephen_Hospi_Infra_Coordinator.jpg"]} alt="HI1" name="Stephen V" />
            <Img style={{borderRadius: "50%"}} src={images["Syed Saqib Habeeb_Hospi and infra_Coordinator.jpeg"]} alt="HI2" name="Syed S" />
            <Img style={{borderRadius: "50%"}} src={images["Sidhant_HospiInfra_Coordinator.jpg"]} alt="HI3" name="Sidhant R"/>
            <Img style={{borderRadius: "50%"}} src={images["Rishabh_hospi_infra_coordinator.jpg"]} alt="HI4" name="Rishab S" />
            <Img style={{borderRadius: "50%"}} src={images["Ekshan_hospi&infra_Coord.jpg"]} alt="HI5" name="Ekshan R" />
            <Img style={{borderRadius: "50%"}} src={images["Varsha Hari Priya_Hospi_Infra_Coordinato.jpg"]} alt="HI6" name="Varsha B"/>
            <Img style={{borderRadius: "50%"}} src={images["Sairaj_Hospiandinfra_coordinator.jpg"]} alt="HI7" name="Sairaj M" />
            <Img style={{borderRadius: "50%"}} src={images["Sreevani_Hospi_Infra_coordinator.jpg"]} alt="HI8" name="Sreevani C" />
            <Img style={{borderRadius: "50%"}} src={images["Jyotshna_Hospi and Infra Coordinator.jpeg"]} alt="HI9" name="Jyotshna K"/>
          </div>
        </div>
        <div>
          <h4 className={styles.headings}>Events and Pronites</h4>
          <div className={styles.flex_arrange}>
            <Img style={{borderRadius: "50%"}} src={images["RohitV_events&pronites.JPG"]} alt="EP1" name="Rohit V" />
            <Img style={{borderRadius: "50%"}} src={images["Rushikesh_events_pronites_coordinator.jpg"]} alt="EP2" name="Rushikesh N" />
            <Img style={{borderRadius: "50%"}} src={images["Ahinraj_events_and_pronites_coordinator.jpg"]} alt="EP3" name="Ahin R"/>
            <Img style={{borderRadius: "50%"}} src={images["Nabeel_Events_pronites_coord.jpeg"]} alt="EP4" name="Nabeel M" />
            <Img style={{borderRadius: "50%"}} src={images["Hadi _eventsandpronites_coordinator.jpg"]} alt="EP5" name="Hadi A" />
            <Img style={{borderRadius: "50%"}} src={images["Adithya Ram_Events_pronites_Coordinator.jpg"]} alt="EP6" name="Adithya R"/>
            <Img style={{borderRadius: "50%"}} src={images["Arpit_events_pronites_coordinator.jpg"]} alt="EP7" name="Arpit S" />
            <Img style={{borderRadius: "50%"}} src={images["Anshul_events_pronites_coordinator.JPG"]} alt="EP8" name="Anshul G" />
            <Img style={{borderRadius: "50%"}} src={images["VaideshKodi_Eventsandpronites_coord.jpg"]} alt="EP9" name="Vaidesh K"/>
            <Img style={{borderRadius: "50%"}} src={images["Pritee__events _pronite coordinator_.jpg"]} alt="EP10" name="Pritee N" />
            <Img style={{borderRadius: "50%"}} src={images["Yash Rajput_Event_Pronites_Coordinator.JPG"]} alt="EP11" name="Yash R" />
            <Img style={{borderRadius: "50%"}} src={images["Pavan Brahmaji_Events _ pronites coord .jpg"]} alt="EP12" name="Pavan B"/>
          </div>
        </div>

        <div>
          <h4 className={styles.headings}>Creatives</h4>
          <div className={styles.flex_arrange}>
            <Img style={{borderRadius: "50%"}} src={images["Viren_Creatives_Coordinator.jpeg"]} alt="C1" name="Viren S" />
            <Img style={{borderRadius: "50%"}} src={images["TandleVardhan_Creatives_Coordinator.png"]} alt="C2" name="Tandle V" />
            <Img style={{borderRadius: "50%"}} src={images["Bharadwaja_creatives_coordinator.jpg"]} alt="C3" name="Bharadwaja R" />
            <Img style={{borderRadius: "50%"}} src={images["Arsalan_Creatives_coordinator.jpg"]} alt="C4" name="Arsalan S"/>
          </div>
        </div>

        <div>
          <h4 className={styles.headings}>Multimedia</h4>
          <div className={styles.flex_arrange}>
            <Img style={{borderRadius: "50%"}} src={images["Arpita_Multimedia_Coordinator.JPG"]} alt="M1" name="Arpita G" />
            <Img style={{borderRadius: "50%"}} src={images["Srilakshmi_multimedia_coordinator.jpg"]} alt="M2" name="Srilakshmi"/>
          </div>
        </div>
        
        <div>
          <h4 className={styles.headings}>Web Dev and Management</h4>
          <div className={styles.flex_arrange}>
            <Img style={{borderRadius: "50%"}} src={images["Vishnu_WebManager.jpeg"]} alt="WM1" name="Vishnu VS" />
            <Img style={{borderRadius: "50%"}} src={images["Arun_Web_Coordinator.jpg"]} alt="WM2" name="Arun S" />
            <Img style={{borderRadius: "50%"}} src={images["Jyotshna_Hospi and Infra Coordinator.jpeg"]} alt="WM3" name="Jyotshna K" />
            <Img style={{borderRadius: "50%"}} src={images["TanmayGarg_Web_Coordinator.JPG"]} alt="WM4" name="Tanmay G"/>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Team
