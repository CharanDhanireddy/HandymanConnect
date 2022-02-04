import React from "react";
import{Carousel} from "react-bootstrap";
import Carpenter from "../../Images/carpenter2.jpg";
import Painter from "../../Images/hairdresser3.jpg";
import Tools from "../../Images/wallpainter.jpg"


function HomeCarousel(){
    return (
        <Carousel className = "home-carousel">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Carpenter}
            alt="Carpenter-img"
            />
            <Carousel.Caption>
            <h3>Carpentry?</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Painter}
            alt="Painter"
            />

            <Carousel.Caption>
            <h3>Get your house painted</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Tools}
            alt="Tools"
            />

            <Carousel.Caption>
            <h3>Faulty appliances?</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    )
}
export default HomeCarousel;