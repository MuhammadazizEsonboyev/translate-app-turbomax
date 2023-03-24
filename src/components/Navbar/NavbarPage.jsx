import i18next from 'i18next'
import React from 'react'
import { Col, Container, Nav, Navbar,  Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const NavbarPage = () => {
  const { t } = useTranslation()

  const onChange = (event) => {
    i18next.changeLanguage(event.target.value)
  }
  return (
    <>
<Container>
    <Row className="justify-content-center mt-4">
        <Col xs={12}>
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="#home">{t("text.home")}</Nav.Link>
            <Nav.Link href="#link">{t("text.link")}</Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
        <select onChange={onChange} style={{color: "gray", border:"none"}} name="Translation" id="1">
                      <option  value="ru">Russian</option>
                      <option  value="eng">English</option>
                      <option   value="uz">Uzbek</option>
                    </select>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  
        </Col>
    </Row>
</Container>
    </>
  )
}

export default NavbarPage