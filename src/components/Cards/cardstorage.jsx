import React from 'react'
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import './card.css'

const Cardstorage = () => {
  const { t } = useTranslation()
  const data = [
    {
      img: "https://img1.10bestmedia.com/Images/Photos/382063/GettyImages-1182776320_54_990x660.jpg",
      img1: "https://www.tripsavvy.com/thmb/1vwoiJVvOT7ADjdliIBsquJ_7cE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/USA-NYC-American_Museum_of_Natural_History-5c00954fc9e77c000175923d.jpeg",
      img2: "https://a.cdn-hotels.com/gdcs/production166/d650/99ed2f0d-9b5f-49d4-aed4-9062cff862e4.jpg",
      title: `${t("text.titleZero")}`,
      info: `${t("text.cardInfoZero")}`,
      id: 1
    },
    {
      img: "https://www.japan-guide.com/g6/XYZeXYZe2172_225.jpg",
      img1: "https://blog.japanwondertravel.com/wp-content/uploads/2020/01/thor-alvis-A57akxc-4BQ-unsplash-1200x800.jpg",
      img2:"https://image.dive-hiroshima.com/wp-content/uploads/2021/12/divehiroshima_feature_kouyou_nature_img05.jpg",

      title: `${t("text.titleOne")}`,
      info: `${t("text.cardInfoOne")}`,
      id: 1
    },
    {
      img: "https://u.osu.edu/uzbekistan/files/2021/01/Nature_Chimgan_Mountains.png",
      img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaOr-vl4ZAWyGYH08Wp0Koe3MdA-aAX2QYQ&usqp=CAU",
      img2: "https://bookatour.me/uploads/images/d15e315037b89fce412c2d437c61def5.jpg",

      title: `${t("text.titleTwo")}`,
      info: `${t("text.cardInfoFour")}`,
      id: 1
    },
    {
      img: "https://www.advantour.com/img/kazakhstan/images/nature.jpg",
      img1: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/39/29/e4.jpg",
      img2: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/6b/9a/3b/caption.jpg?w=500&h=400&s=1",
      title: `${t("text.titleThree")}`,
      info: `${t("text.cardInfoThree")}`,
      id: 1
    },
    {
      img: "https://newsroom.korea.net/upload/content/editImage/20201230202905720_VBDSHY2C.png",
      img1:"https://media.istockphoto.com/id/1137568153/photo/cherry-blossoms-in-spring-seoul-in-korea.jpg?s=612x612&w=0&k=20&c=SP8py_0WQrn4mMFdrd0bvk7-MfRWxJl6C3AsHxJq8ck=",
      img2:"https://www.phuhoancau.edu.vn/wp-content/uploads/2019/04/kham-pha-korea-la-o-dau.jpg",
      title: `${t("text.titleFour")}`,
      info: `${t("text.cardInfoFour")}`,
      id: 1
    },
    {
      img: "https://livinglandscapeobserver.net/wp-content/uploads/2017/12/unnamed-5.jpg",
      img1:"https://media.easemytrip.com/media/Blog/India/636965375383792632/6369653753837926326vinSA.jpg",
      img2:"https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.jpg?b=1&s=170667a&w=0&k=20&c=Raufg0A7TNVjLe-92r5zXJxsH8oyDZjGENR34jliB4Y=",
      title: `${t("text.titleFive")}`,
      info: `${t("text.cardInfoFive")}`,
      id: 1
    },
    {
      img: "https://www.worldatlas.com/r/w768/upload/d5/2e/3f/shutterstock-1033815457.jpg",
      img1:"https://media.istockphoto.com/id/507751686/photo/mountain-lake-view.jpg?s=612x612&w=0&k=20&c=TfD9avxBmYOvxAGTkXcUDBJ8kixyMdCM0WCkz9F4F-8=",
      img2:"https://media-cdn.tripadvisor.com/media/photo-s/1a/59/2d/96/the-fann-mountains-are.jpg",
      title: `${t("text.titleSix")}`,
      info: `${t("text.cardInfoSix")}`,
      id: 1
    },
    {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/e4/d4/38/river-seine.jpg?w=500&h=-1&s=1",
      img1:"https://media.istockphoto.com/id/1436430810/photo/paris-eiffel-tower.jpg?b=1&s=170667a&w=0&k=20&c=Qm33k45p4AGKtbNcqkx5hhfP7IRo8RYIpW_VdgE2bDU=",
      img2:"https://media.istockphoto.com/id/1305908728/photo/landscapes-of-the-french-pyrenees.jpg?b=1&s=170667a&w=0&k=20&c=rtvbvP7_Ojj_H3uyf5FYZpLLpLoSCR-SK1d9edaaFJg=",
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
                    {/* <Carousel fade id='card-img'>
                      <Carousel.Item>
                        <img
                          src={value.img}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          src={value.img1}
                          alt="Second slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          src={value.img2}
                          alt="Third slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel> */}
                      <img src={value.img} alt="" id='card-img' />
                    <Card.Body>
                      <Card.Title>{value.title}</Card.Title>
                      <Card.Text>
                        {value.info}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>



                <Col xs={3} className='d-none d-sm-block mt-5'>
                  <div>
                    <Card id='card' style={{ }}>
                      <Carousel fade id='card-img'>
                        <Carousel.Item >
                          <img
                            id='card-img'
                            src={value.img}
                            alt="First slide"
                          />
                          <Carousel.Caption>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            id='card-img'
                            src={value.img1}
                            alt="Second slide"
                          />

                          <Carousel.Caption>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            id='card-img'
                            src={value.img2}
                            alt="Third slide"
                          />

                          <Carousel.Caption>
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>
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
