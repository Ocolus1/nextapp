import React from "react";
import Carousel from "react-multi-carousel";
import CarouselItem from "../common/CarouselItem";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const MultiCarosual = ({ deviceType }) => {
  return (
    <div>
      <div className="section container-fluid cta-100 ">
        <div className="container">
          <div className="row blog">
            <div className="col-md-12">
              <div
                id="blogCarousel"
                className="carousel slide container-blog"
                data-ride="carousel"
              >
                <Carousel
                  autoPlay
                  draggable
                  deviceType={deviceType}
                  responsive={responsive}
                  infinite={true}
                  autoPlaySpeed={2000}
                >
                  <CarouselItem />
                  <CarouselItem />
                  <CarouselItem />
                  <CarouselItem />
                  <CarouselItem />
                  <CarouselItem />
                  <CarouselItem />
                  <CarouselItem />
                  <CarouselItem />
                </Carousel> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiCarosual;
