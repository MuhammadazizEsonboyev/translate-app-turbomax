// import i18next from 'i18next'
import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./footer.css";
const star = require("../Footer/img/Vector.png");

export default function Footer() {

    const { t } = useTranslation()
    return (
        <>
            <section className='back'>
                <Container>

                    <Row className='justify-content-center'>
                        <Col xs={12}>
                            <hr></hr>
                            <h5  style={{marginLeft: '10px', color: 'white'}}>{t("text.footer_turboMax")}</h5>
                            <p style={{marginLeft: '10px', color: 'white'}}>{t("text.turboMax")}</p>
                            <div className='stoir'>
                                <img style={{marginRight: '10px'}} src={star} alt='' className='strix' />
                                <h6 style={{marginRight: '10px', color: 'white'}} className='footer_h6'>{t("text.iTech")}</h6>
                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-center mt-5'>
                        
                        <Col xs={1} className='iconchalar'>
                        <a href='https://github.com/MuhammadazizEsonboyev/translate-app-turbomax'>
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </Col>
                    <Col xs={1} className='iconchalar'>
                        <a href='https://t.me/itechacademy_uz'>
                            <i class="fa-brands fa-telegram"></i>
                        </a>
                    </Col>
                    <Col xs={1} className='iconchalar'>
                        <a href='https://www.youtube.com/@itechcompany8336'>
                            <i class="fa-brands fa-youtube"></i>
                        </a>
                    </Col>


                      
            <Col xs={3}>
              <ul className="list" >
                <Accordion style={{borderRadius:"5px" , color:"#1A1A3D", outline:"none"}} defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{t("text.resp")}</Accordion.Header>
                    <Accordion.Body>
                      <li>Asadbek</li>
                      <br></br>
                      <li>Xurshid</li>
                      <br></br>
                      <li>Abdumurod</li>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </ul>
            </Col>
            <Col xs={3}>
              <ul className="list">
                <Accordion id="accardion" style={{borderRadius:"5px" , backgroundColor:"#1A1A3D", outline:"none"}} defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{t("text.trans")}</Accordion.Header>
                    <Accordion.Body>
                      <li>Samandar</li>
                      <br></br>
                      <li>Bobur</li>
                      <br></br>
                      <li>Asadbek</li>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </ul>
            </Col>
            <Col xs={3}>
              <ul className="list">
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header  style={{borderRadius:"5px" , backgroundColor:"#1A1A3D", outline:"none"}}>{t("text.dizayn")}</Accordion.Header>
                    <Accordion.Body>
                      <li >Asadbek</li>
                      <br />
                      <li>Bobur</li>
                      <br></br>
                      <li>Bekhruz</li>
                      <br></br>
                      <li>Sanjar</li>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </ul>
            </Col>
            <hr></hr>
          </Row>
        </Container>
      </section>
    </>
  );
}
