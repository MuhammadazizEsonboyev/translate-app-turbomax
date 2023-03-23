import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./footer.css"
const star = require("../Footer/img/Vector.png")

export default function Footer() {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12}>
                        <hr></hr>
                        <h5>TurboMax Group</h5>
                        <p>TurboMax project</p>
                        <img src={star} alt='' className='strix'/>
                        <div className='stoir'>
                            <h6>Itech Academy</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
