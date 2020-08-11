import React from "react";
import "./main.scss";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as  ArrowDown } from '../../assets/arrow-down.svg'

SwiperCore.use([Navigation]);

const Main = () => {
  return (
    <main>
      <div id="section-1" className="banner-top section-1 m-bottom-6rem">
        <img
          className="img w-full"
          src="https://via.placeholder.com/1200x450"
          alt=""
        />
      </div>

      <section className="circle-images custom-swiper container flex j-content-between m-auto align-center m-bottom-6rem">
        <Swiper
          spaceBetween={20}
          navigation
          slidesPerView={1}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 80,
            },
          }}
        >
          <SwiperSlide>
            <div className="circle m-auto">
              <div className="hover-circle"></div>
              <div className="img-circle">
                <a href="https://placeholder.com">
                  <img src="https://via.placeholder.com/150" alt="" />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="circle m-auto">
              <div className="hover-circle"></div>
              <div className="img-circle">
                <a href="https://placeholder.com">
                  <img src="https://via.placeholder.com/150" alt="" />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="circle m-auto">
              <div className="hover-circle"></div>
              <div className="img-circle">
                <a href="https://placeholder.com">
                  <img src="https://via.placeholder.com/150" alt="" />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="circle m-auto">
              <div className="hover-circle"></div>
              <div className="img-circle">
                <a href="https://placeholder.com">
                  <img src="https://via.placeholder.com/150" alt="" />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="circle m-auto">
              <div className="hover-circle"></div>
              <div className="img-circle">
                <a href="https://placeholder.com">
                  <img src="https://via.placeholder.com/150" alt="" />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="circle m-auto">
              <div className="hover-circle"></div>
              <div className="img-circle">
                <a href="https://placeholder.com">
                  <img src="https://via.placeholder.com/150" alt="" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section id="section-2" className="section-2 m-bottom-6rem">
        <div className="div-section-2 container flex j-content-between">
          <div className="row text-section-2">
            <div className="col">
              <p>Lorem ipsum lorem dolor</p>
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu
                sagittis felis, pharetra semper sem. Proin commodo tortor at
                venenatis vulputate. Integer lacinia magna tristique varius
                rhoncus. Donec molestie dolor tristique magna maximus efficitur.
              </p>
            </div>
          </div>

          <div className="images-section-2 ">
            <div className="row">
              <div className="col">
                <div className="banner flex img-1">
                  <img
                    className="img"
										src="https://via.placeholder.com/350x450"
										alt="" 
                  />
                  <div className="text-banner font-playfair">
                    <h3>Título do banner</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur
                      <br />
                      adipiscing elit, sed do eiusmod tempo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="banner flex img-2">
                  <img
                    className="img"
										src="https://via.placeholder.com/350x225"
										alt="" 
                  />
                  <div className="text-banner font-playfair">
                    <h3>Título do banner</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur
                      <br />
                      adipiscing elit, sed do eiusmod tempo.
                    </p>
                  </div>
                </div>

                <div className="banner flex img-3">
                  <img
                    className="img"
										src="https://via.placeholder.com/350x450"
										alt="" 
                  />
                  <div className="text-banner font-playfair">
                    <h3>Título do banner</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur
                      <br />
                      adipiscing elit, sed do eiusmod tempo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
					<ArrowDown className="arrow-down"/>
        </div>


      </section>

      <section id="section-3" className="section-3 m-bottom-6rem">
        <div className="div-section-3 container">
          <div className="row align-center">
            <div className="col div-img">
              <img
                className="img"
								src="https://via.placeholder.com/300x400"
								alt="" 
              />
            </div>

            <div className="col text-section-3 flex">
              <div className="text">
                <p>Lorem ipsum lorem dolor</p>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  eu sagittis felis, pharetra semper sem. Proin commodo tortor
                  at venenatis vulputate. Integer lacinia magna tristique varius
                  rhoncus. Donec molestie dolor tristique magna maximus
                  efficitur.
                </p>
              </div>
              <button className="button-section-3">Call-to-action {">"}</button>
            </div>

            <div className="col div-produto text-center">
              <Swiper spaceBetween={50} navigation>
                <SwiperSlide>
                  <img
                    className="img"
										src="https://via.placeholder.com/400x250"
										alt="" 
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img"
										src="https://via.placeholder.com/400x250"
										alt="" 
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img"
										src="https://via.placeholder.com/400x250"
										alt="" 
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img"
										src="https://via.placeholder.com/400x250"
										alt="" 
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section id="section-4" className="section-4 m-bottom-6rem">
        <div className="div-section-4 container">
          <div className="row row-span">
            <div className="col div-span text-center">
              <span>@instadamarca</span>
            </div>
          </div>
          <div className="row images-insta j-content-between">
            <div className="col insta-img flex j-content-start img">
              <div className="hover-insta">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  eu sagittis felis, pharetra semper sem. Proin commodo tortor
                  at venenatis vulputate. Integer lacinia magna tristique varius
                  rhoncus. Donec molestie dolor tristique magna maximus
                  efficitur.
                </p>
              </div>
              <img
                className="img"
								src="https://via.placeholder.com/325x325"
								alt="" 
              />
            </div>

            <div className="col insta-img m-top-5rem flex j-content-center img">
              <div className="hover-insta">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  eu sagittis felis, pharetra semper sem. Proin commodo tortor
                  at venenatis vulputate. Integer lacinia magna tristique varius
                  rhoncus. Donec molestie dolor tristique magna maximus
                  efficitur.
                </p>
              </div>
              <img
                className="img"
								src="https://via.placeholder.com/325x325"
								alt="" 
              />
            </div>
            <div className="col insta-img flex j-content-end img">
              <div className="hover-insta">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  eu sagittis felis, pharetra semper sem. Proin commodo tortor
                  at venenatis vulputate. Integer lacinia magna tristique varius
                  rhoncus. Donec molestie dolor tristique magna maximus
                  efficitur.
                </p>
              </div>
              <img
                className="img"
								src="https://via.placeholder.com/325x325"
								alt="" 
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
