import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import './card.css'

const Cardstorage = () => {
  const { t } = useTranslation()
  const data = [
    {
      img: "https://img1.10bestmedia.com/Images/Photos/382063/GettyImages-1182776320_54_990x660.jpg",
      title: `${t("text.titleZero")}`,
      info: `${t("text.cardInfoZero")}`,
      id: 1
    },
    {
      img: "https://www.japan-guide.com/g6/XYZeXYZe2172_225.jpg",
      title: `${t("text.titleOne")}`,
      info: `${t("text.cardInfoOne")}`,
      id: 1
    },
    {
      img: "https://u.osu.edu/uzbekistan/files/2021/01/Nature_Chimgan_Mountains.png",
      title: `${t("text.titleTwo")}`,
      info: `${t("text.cardInfoFour")}`,
      id: 1
    },
    {
      img: "https://www.advantour.com/img/kazakhstan/images/nature.jpg",
      title: `${t("text.titleThree")}`,
      info: `${t("text.cardInfoThree")}`,
      id: 1
    },
    {
      img: "https://newsroom.korea.net/upload/content/editImage/20201230202905720_VBDSHY2C.png",
      title: `${t("text.titleFour")}`,
      info: `${t("text.cardInfoFour")}`,
      id: 1
    },
    {
      img: "https://livinglandscapeobserver.net/wp-content/uploads/2017/12/unnamed-5.jpg",
      title: `${t("text.titleFive")}`,
      info: `${t("text.cardInfoFive")}`,
      id: 1
    },
    {
      img: "https://www.worldatlas.com/r/w768/upload/d5/2e/3f/shutterstock-1033815457.jpg",
      title: `${t("text.titleSix")}`,
      info: `${t("text.cardInfoSix")}`,
      id: 1
    },
    {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/e4/d4/38/river-seine.jpg?w=500&h=-1&s=1",
      title: `${t("text.titleSeven")}`,
      info: `${t("text.cardInfoSeven")}`,
      id: 1
    }
  ]
  return (
    <div>
      <Container>
        <Row >
          {data.map((value) => {
            return (
              <>
                <Col xs={12} lg={12} className='d-block d-sm-none mt-3'>
                    <Card id='card' style={{ width: '23rem' }}>
                      <Card.Img variant="top" id='card-img' src={value.img} />
                      <Card.Body>
                        <Card.Title>{value.title}</Card.Title>
                        <Card.Text>
                          {value.info}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                </Col>



                <Col xs={3}  className='d-none d-sm-block mt-5'>
                  <div>
                    <Card id='card' style={{ width: '18rem' }}>
                      <Card.Img variant="top" id='card-img' src={value.img} />
                      <Card.Body>
                        <Card.Title>{value.title}</Card.Title>
                        <Card.Text>
                          {value.info}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Cardstorage
