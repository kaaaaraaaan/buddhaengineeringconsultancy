import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SwiperCore, { Pagination, Thumbs, Controller } from "swiper";
SwiperCore.use([Pagination, Thumbs, Controller]);
import Swiper from "react-id-swiper";
import BlockTitle from "./BlockTitle";

import TestiQoute from "../assets/images/shapes/testi-qoute-1-1.png";

import TestiImageOne from "../assets/images/resources/testi-1-1.jpg";
import TestiImageTwo from "../assets/images/resources/testi-1-2.jpg";
import TestiImageThree from "../assets/images/resources/testi-1-3.jpg";

const Testimonials = (props) => {
  const paramsTwo = {
    observer: true,
    observeParents: true,
    speed: 1400,
    mousewheel: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".testimonials-one__pagination-wrap .swiper-pagination",
      clickable: true,
    },
  };

  const paramsOne = {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    speed: 1400,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  return (
    <section className="testimonials-one">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="testimonials-one__thumb-carousel-wrap">
              <div className="testimonials-one__icon">
                <div className="testimonials-one__icon-inner">
                  <img src={TestiQoute} alt="" />
                </div>
              </div>
              <div className="testimonials-one__thumb-carousel">
                <Swiper {...paramsOne}>
                  <div className="swiper-slide">
                    <div className="testimonials-one__image">
                      <img src={TestiImageOne} style={{width: '850px', height: '600px'}} alt="Awesome Image" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__image">
                      <img src={TestiImageTwo} style={{width: '850px', height: '600px'}} alt="Awesome Image" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__image">
                      <img src={TestiImageThree} style={{width: '500px', height: '600px'}} alt="Awesome Image" />
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
          </Col>
          <Col xl={6} className="d-flex">
            <div className="my-auto">
              <BlockTitle
                textAlign="left"
                paraText="Our Testimonials"
                titleText={`What Our Customers Are \n Talking About`}
              />
              <div className="testimonials-one__carousel">
                <Swiper {...paramsTwo}>
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                      The finished product was very cost effective and will meet the needs of our client for years to come. We look forward to working with Swachit and his group again in the future.”
                      </p>
                      <h3 className="testimonials-one__title">Belahiya Client</h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                      Your attention to detail and understanding of the critical nature of the timing has been vital to our ability to meet our schedule. In a very short time, we have formed a real “team” to deal with phasing issues, deadlines, scheduling, and numerous third parties.”
                      </p>
                      <h3 className="testimonials-one__title">Shankarnagar Client</h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                      Your firm has definitely stood a head above the rest that we have encountered… Your company’s professionalism and timeliness have been invaluable to us meeting our accelerated development schedules.
                      </p>

                      <h3 className="testimonials-one__title">Butwal Yogikuti Client</h3>
                    </div>
                  </div>
                </Swiper>
                <div className="testimonials-one__pagination-wrap">
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
