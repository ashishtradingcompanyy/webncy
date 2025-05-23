"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 40,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
};

export default function Section8() {
    return (
        <>
            {/*it solutions home section 8*/}
            <section className="it-solutions-home-section-8 pt-120 pb-120 position-relative overflow-hidden">
                <div className="ellipse-1 position-absolute top-50 start-50 translate-middle" />
                <div className="ellipse-2 position-absolute top-50 start-50 translate-middle" />
                <div className="ellipse-3 position-absolute top-50 start-50 translate-middle" />
                <div className="container position-relative z-1">
                    <div className="row">
                        <div className="col-lg-10 mx-lg-auto">
                            <div className="text-center position-relative">
                                <span className="text-primary fs-7 fw-medium position-relative z-1 btn-text border-top border-primary px-2 py-2">call to action</span>
                                <h2 className="text-dark my-3 position-relative z-1 text-anime-style-1">
                                    Ready to grow your <br />
                                    business? Start with <span className="text-primary">Webency</span> &amp; become <br />
                                    faster every second.
                                </h2>
                                <Link href="/contact" data-aos="zoom-in" className="btn btn-outline-dark mt-5">
                                    get in touch
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    {/* Swiper */}
                    <Swiper {...swiperOptions} className="swiper slider-5 pt-120">
                        <div className="swiper-wrapper z-1">
                            <SwiperSlide>
                                <div className="rounded-4 overflow-hidden zoom-img" data-aos="zoom-in" data-aos-delay={0}>
                                    <img src="assets/imgs/pages/it-solutions/page-home/home-section-8/img-1.png" alt="Webency" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="rounded-4 overflow-hidden zoom-img" data-aos="zoom-in" data-aos-delay={200}>
                                    <img src="assets/imgs/pages/it-solutions/page-home/home-section-8/img-2.png" alt="Webency" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="rounded-4 overflow-hidden zoom-img" data-aos="zoom-in" data-aos-delay={400}>
                                    <img src="assets/imgs/pages/it-solutions/page-home/home-section-8/img-3.png" alt="Webency" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="rounded-4 overflow-hidden zoom-img" data-aos="zoom-in" data-aos-delay={600}>
                                    <img src="assets/imgs/pages/it-solutions/page-home/home-section-8/img-4.png" alt="Webency" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="rounded-4 overflow-hidden zoom-img" data-aos="zoom-in" data-aos-delay={800}>
                                    <img src="assets/imgs/pages/it-solutions/page-home/home-section-8/img-5.png" alt="Webency" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="rounded-4 overflow-hidden zoom-img" data-aos="zoom-in" data-aos-delay={1000}>
                                    <img src="assets/imgs/pages/it-solutions/page-home/home-section-8/img-3.png" alt="Webency" />
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                    {/* Swiper JS */}
                </div>
            </section>
        </>
    );
}
