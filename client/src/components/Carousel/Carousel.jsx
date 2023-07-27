import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';
import "./Carousel.css";

function CreatedCarousel (){
    const carouselPhotos = useSelector(state => state.carouselPhotos)
    return (
      <>
        <Carousel  >
        {carouselPhotos.map(data => (
        <Carousel.Item  >
        <img
          class='img'
          src={data.img}
          alt="First slide"
          />
        <Carousel.Caption>
        </Carousel.Caption>
        </Carousel.Item>
          ))}
        </Carousel>
      </>

    )
}

export default CreatedCarousel;