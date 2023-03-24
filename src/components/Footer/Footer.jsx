import i18next from 'i18next'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import "./footer.css"
const star = require("../Footer/img/Vector.png")




export default function Footer() {
    const { t } = useTranslation()
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12}>
                        <hr></hr>
                        <h5>{t("text.footer_turboMax")}</h5>
                        <p>{t("text.turboMax")}</p>
                        <img src={star} alt='' className='strix'/>
                        <div className='stoir'>
                            <h6>{t("text.iTech")}</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
