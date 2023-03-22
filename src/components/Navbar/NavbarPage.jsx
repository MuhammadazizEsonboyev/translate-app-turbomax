import i18next from 'i18next'
import React from 'react'
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const NavbarPage = () => {
  const { t } = useTranslation()

  const handleClick = (lang) => {
    i18next.changeLanguage(lang)
  }
  return (
    <>
<Container>
    <Row>
        <Col xs={12}>
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">{t("text.home")}</Nav.Link>
            <Nav.Link href="#link">{t("text.link")}</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">{t("text.action")}</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              {t("text.another")}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">{t("text.something")}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <button onClick={() => handleClick("eng")}>English</button>
<button onClick={() => handleClick("ru") }>Russian</button>
<button onClick={() => handleClick("uz") }>Uzbek</button> 
        </Col>
    </Row>
</Container>
    </>
  )
}

export default NavbarPage