import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Cardstorage = () => {
  const data = [
    {
      img: "https://wallpapers.com/images/featured/banana-leaf-i1m1ulaygn46l916.jpg",
      title: "Asadbek",
      info: '04 turbo max',
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
      title: "Doston",
      info: '04 turbo max',
      id: 1
    }
    ,
    {
      img: "https://wallpapers.com/images/featured/banana-leaf-i1m1ulaygn46l916.jpg",
      title: "Doston",
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
