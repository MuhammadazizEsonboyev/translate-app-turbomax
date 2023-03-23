import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const Cardstorage = () => {
  const { t } = useTranslation()
  const data = [
    {
      img: "https://wallpapers.com/images/featured/banana-leaf-i1m1ulaygn46l916.jpg",
      title: `${t("text.titleZero")}`,
      info: `${t("text.infoOfCard")}`,
      id: 1
    },
    {
      img: "https://www.japan-guide.com/g6/XYZeXYZe2172_225.jpg",
      title: `${t("text.titleOne")}`,
      info: `${t("text.infoOfTwo")}`,
      id: 1
    },
    {
      img: "https://uzbekistan.travel/storage/app/media/cropped-images/5952701_xlarge-0-0-0-0-1584517453.jpg",
      title:`${t("text.titleTwo")}`,
      info:`${t("text.infoOfTwo")}`,
      id: 1
    },
    {
      img: "https://www.advantour.com/img/kazakhstan/images/nature.jpg",
      title:`${t("text.titleThree")}`,
      info: `${t("text.infoOfThree")}`,
      id: 1
    },
    {
      img: "https://newsroom.korea.net/upload/content/editImage/20201230202905720_VBDSHY2C.png",
      title: `${t("text.titleFour")}`,
      info: 'South Korea has designated and operated national parks to preserve the natural ecosystems and natural and cultural wonders.',
      id: 1
    },
    {
      img: "https://wallpapers.com/images/featured/banana-leaf-i1m1ulaygn46l916.jpg",
      title: "Doston",
      info: '04 turbo max',
      id: 1
    },
    {
      img: "https://wallpapers.com/images/featured/banana-leaf-i1m1ulaygn46l916.jpg",
      title: "Asadbek",
      info: '04 turbo max',
      id: 1
    },
    {
      img: "https://wallpapers.com/images/featured/banana-leaf-i1m1ulaygn46l916.jpg",
      title: "Nature of Russian",
      info: '04 turbo max',
      id: 1
    }
  ]
  return (
    <div>
      <Container>
        <Row className='justify-content-center mt-5 '>
          {data.map((value) => {
            return (
              <>
                <Col sx={3} className="mb-5">
                  <div>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={value.img} />
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
