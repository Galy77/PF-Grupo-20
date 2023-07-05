import Carousel from 'react-bootstrap/Carousel';
import style from "./Carousel.module.css";

function CarouselComponent (){
    return (
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="https://st2.depositphotos.com/3378121/5193/i/600/depositphotos_51933801-stock-photo-labrador-puppies-in-a-basket.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="https://st2.depositphotos.com/3378121/5193/i/600/depositphotos_51933801-stock-photo-labrador-puppies-in-a-basket.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="https://st2.depositphotos.com/3378121/5193/i/600/depositphotos_51933801-stock-photo-labrador-puppies-in-a-basket.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="https://www.petdarling.com/wp-content/uploads/2021/01/cachorros.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    )
}

export default CarouselComponent;