import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const Cardstorage = () => {
  const { t } = useTranslation()
  const data = [
    {
      img: "https://wallpapers.com/images/featured/banana-leaf-i1m1ulaygn46l916.jpg",
      title: `${t("text.titleOfCountries")}`,
      info: `${t("text.infoOfCard")}`,
      id: 1
    },
    {
      img: "https://www.japan-guide.com/g6/XYZeXYZe2172_225.jpg",
      title: "Nature of Japan",
      info: 'Many visitors to Japan limit their sightseeing activities to the country`s heavily urbanized areas between Tokyo, Kyoto and Hiroshima.',
      id: 1
    },
    {
      img: "https://uzbekistan.travel/storage/app/media/cropped-images/5952701_xlarge-0-0-0-0-1584517453.jpg",
      title: "Nature of Uzbekistan",
      info: 'Uzbekistan has no access to the sea and makes up for this with a huge number of the world’s most beautiful lakes, natural and artificial reservoirs and large rivers that cover the entire Central Asia.',
      id: 1
    },
    {
      img: "https://www.advantour.com/img/kazakhstan/images/nature.jpg",
      title: "Nature of Kazakhstan",
      info: 'Kazakhstan has 9th the largest territory in the world (2,724,900km2), with the population of only 17 million',
      id: 1
    },
    {
      img: "https://newsroom.korea.net/upload/content/editImage/20201230202905720_VBDSHY2C.png",
      title: "Nature of Korea",
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
