import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import First from "../../Images/Banner-1920X700.jpg";
import "./slider.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={First} alt="first" />
        <Carousel.Caption className="text">
          <h1>Growth Mantrasl</h1>
          <h3>
            Get thoughtful yet simple answers or solutions <br />
            to common Jewellery business issue.
          </h3>
          <button>Know More</button>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img src={First} alt="Second" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={First} alt="Third" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default ControlledCarousel;
