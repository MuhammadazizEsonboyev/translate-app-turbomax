// import i18next from 'i18next'
import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import "./footer.css"
const star = require("../Footer/img/Vector.png")




export default function Footer() {
    const { t } = useTranslation()
    return (
        <>
            <section className='back'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xs={12}>
                            <hr></hr>
                            <h5>{t("text.footer_turboMax")}</h5>
                            <p>{t("text.turboMax")}</p>
                            <div className='stoir'>
                                <img src={star} alt='' className='strix' />
                                <h6 className='footer_h6'>{t("text.iTech")}</h6>
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


                        {/* suuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu */}

                        <Col xs={3}>
                            <ul className='list'>
                                <Accordion defaultActiveKey="1">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Responsive</Accordion.Header>
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
                            <ul className='list'>
                                <Accordion defaultActiveKey="1">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Tarjima</Accordion.Header>
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
                            <ul className='list'>
                                <Accordion defaultActiveKey="1">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header >Dizayn</Accordion.Header>
                                        <Accordion.Body>
                                            <li>Doston</li>
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
    )
}
