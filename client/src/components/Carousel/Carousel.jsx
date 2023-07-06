import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';
import style from "./Carousel.module.css";

function CreatedCarousel (){
    const carouselPhotos = useSelector(state => state.carouselPhotos)
    return (
    <Carousel className={style.carousel}>
        {carouselPhotos.map(data => (
        <Carousel.Item >
        <img
          className="d-block img-fluid"
          src={data.img}
          alt="First slide"
          />
        <Carousel.Caption>
          <p>{data.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
          ))}
    </Carousel>
    )
}

export default CreatedCarousel;