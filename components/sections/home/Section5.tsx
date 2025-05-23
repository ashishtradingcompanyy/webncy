"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
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
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
};

export default function Section5() {
    return (
        <>
            {/*it-solutions home section 5*/}
            <section className="it-solutions-home-section-5 position-relative overflow-hidden border-bottom py-120 bg-primary">
                <div className="container position-relative z-1">
                    <div className="row flex-wrap align-items-end">
                        <div className="col-lg-6">
                            <span className="text-white fs-7 fw-medium position-relative z-1 btn-text border-top border-white px-2 py-2">Case study</span>
                            <h2 className="text-white mt-3 mb-0 text-anime-style-2">Happy user says</h2>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 ms-lg-auto text-lg-end mt-3 mt-lg-0">
                            <div className="position-relative ms-lg-auto">
                                <div className="d-inline-flex gap-5 h-100  align-items-center gap-1 rounded-pill mx-auto position-relative z-1">
                                    <div className="swiper-button-prev mt-0 position-relative rounded-4 border-opacity-25 border-white border-2 icon-shape icon-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_349_1382)">
                                                <path d="M4.18271 3.80852L4.99823e-08 7.99998L4.18271 12.1914L5.06751 11.3084L2.3896 8.62497L16 8.62497L16 7.37498L2.3896 7.37498L5.06751 4.69148L4.18271 3.80852Z" fill="white" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="swiper-button-next mt-0 position-relative rounded-4 border-opacity-25 border-white border-2 icon-shape icon-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_349_1381)">
                                                <path d="M11.8173 12.1915L16 8.00002L11.8173 3.80859L10.9325 4.69155L13.6104 7.37503L-1.55894e-07 7.37503L-2.10532e-07 8.62502L13.6104 8.62502L10.9325 11.3085L11.8173 12.1915Z" fill="white" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-80">
                        <div className="col-12 position-relative">
                            {/* Swiper */}
                            <div className="box-swiper-padding">
                                <Swiper {...swiperOptions} className="swiper slider-3">
                                    <div className="swiper-wrapper z-1">
                                        <SwiperSlide>
                                            <div className="card-testimonial bg-white bg-opacity-10 p-5 rounded-4" data-aos="fade-up" data-aos-delay={0}>
                                                <div className="position-absolute bottom-0 end-0 me-4 z-0">
                                                    <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={128} height={112} viewBox="0 0 128 112" fill="none">
                                                        <g clipPath="url(#clip0_349_2561)">
                                                            <path d="M128 112L128 16L80 64L80 112L128 112Z" fill="#0D6EFD" />
                                                            <path d="M48 112L48 16L4.19629e-06 64L0 112L48 112Z" fill="#0D6EFD" />
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div className="d-flex gap-2">
                                                    <i className="bi bi-star-fill text-white fs-10" />
                                                    <i className="bi bi-star-fill text-white fs-10" />
                                                    <i className="bi bi-star-fill text-white fs-10" />
                                                    <i className="bi bi-star-fill text-white fs-10" />
                                                    <i className="bi bi-star-fill text-white fs-10" />
                                                </div>
                                                <Link href="#">
                                                    <h6 className="text-white mt-2">Amazing design solution</h6>
                                                </Link>
                                                <p className="mb-0 mt-4 text-white">" Unrivaled brilliance surpassing all others. Highly recommended for novices and experts alike. We will hire them for sure. "</p>
                                                <div className="d-flex align-items-center mt-5 position-relative z-1">
                                                    <Link href="#">
                                                        <img className="rounded-circle icon-shape icon-50" src="assets/imgs/pages/it-solutions/page-home/home-section-8/avatar-1.png" alt="Webency" />
                                                    </Link>
                                                    <div className="text-start ms-3">
                                                        <Link href="#">
                                                            <span className="btn-text text-white">Isabella F. Monroe</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-testimonial bg-white bg-opacity-10 p-5 rounded-4" data-aos="fade-up" data-aos-delay={200}>
                                                <div className="position-absolute bottom-0 end-0 me-4 z-0">
                                                    <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={128} height={112} viewBox="0 0 128 112" fill="none">
                                                        <g clipPath="url(#clip0_349_2561)">
                                                            <path d="M128 112L128 16L80 64L80 112L128 112Z" fill="#0D6EFD" />
                                                            <path d="M48 112L48 16L4.19629e-06 64L0 112L48 112Z" fill="#0D6EFD" />
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div className="d-flex gap-2">
                                                    <i className="bi bi-star-fill text-white fs-10" />
                                                    <i className="bi bi-star-fill text-white fs-10" />
                                                    <i className="bi bi-star-fill text-white fs-10" />
                                                    <i className="bi bi-star-fill text-white fs-10" />
                                                    <i className="bi bi-star-fill text-white fs-10" />
                                                </div>
                                                <Link href="#">
                                                    <h6 className="text-white mt-2">Good user experience</h6>
                                                </Link>
                                                <p className="mb-0 mt-4 text-white">" Unrivaled brilliance surpassing all others. Highly recommended for novices and experts alike. We will hire them for sure. "</p>
                                                <div className="d-flex align-items-center mt-5 position-relative z-1">
                                                    <Link href="#">
                                                        <img className="rounded-circle icon-shape icon-50" src="assets/imgs/pages/it-solutions/page-home/home-section-8/avatar-2.png" alt="Webency" />
                                                    </Link>
                                                    <div className="text-start ms-3">
                                                        <Link href="#">
                                                            <span className="btn-text text-white">Juliana P. Taylor</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-testimonial bg-white bg-opacity-10 p-5 rounded-4" data-aos="fade-up" data-aos-delay={400}>
                                                <div className="position-absolute bottom-0 end-0 me-4 z-0">
                                                    <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={128} height={112} viewBox="0 0 128 112" fill="none">
                                                        <g clipPath="url(#clip0_349_2561)">
                                                            <path d="M128 112L128 16L80 64L80 112L128 112Z" fill="#0D6EFD" />
                                                            <path d="M48 112L48 16L4.19629e-06 64L0 112L48 112Z" fill="#0D6EFD" />
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div className="d-flex gap-2">
                                                    <i className="bi bi-star-fill text-white fs-10" />
                                                    <i className="bi bi-star-fill text-white fs-10" />
                                                    <i className="bi bi-star-fill text-white fs-10" />
                                                    <i className="bi bi-star-fill text-white fs-10" />
                                                    <i className="bi bi-star-fill text-white fs-10" />
                                                </div>
                                                <Link href="#">
                                                    <h6 className="text-white mt-2">100% satisfied</h6>
                                                </Link>
                                                <p className="mb-0 mt-4 text-white">" Unrivaled brilliance surpassing all others. Highly recommended for novices and experts alike. We will hire them for sure. "</p>
                                                <div className="d-flex align-items-center mt-5 position-relative z-1">
                                                    <Link href="#">
                                                        <img className="rounded-circle icon-shape icon-50" src="assets/imgs/pages/it-solutions/page-home/home-section-8/avatar-3.png" alt="Webency" />
                                                    </Link>
                                                    <div className="text-start ms-3">
                                                        <Link href="#">
                                                            <span className="btn-text text-white">Natalia T. Morgan</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-testimonial bg-white bg-opacity-10 p-5 rounded-4" data-aos="fade-up" data-aos-delay={600}>
                                                <div className="position-absolute bottom-0 end-0 me-4 z-0">
                                                    <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={128} height={112} viewBox="0 0 128 112" fill="none">
                                                        <g clipPath="url(#clip0_349_2561)">
                                                            <path d="M128 112L128 16L80 64L80 112L128 112Z" fill="#0D6EFD" />
                                                            <path d="M48 112L48 16L4.19629e-06 64L0 112L48 112Z" fill="#0D6EFD" />
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div className="d-flex gap-2">
                                                    <i className="bi bi-star-fill text-white fs-10" />
                                                    <i className="bi bi-star-fill text-white fs-10" />
                                                    <i className="bi bi-star-fill text-white fs-10" />
                                                    <i className="bi bi-star-fill text-white fs-10" />
                                                    <i className="bi bi-star-fill text-white fs-10" />
                                                </div>
                                                <Link href="#">
                                                    <h6 className="text-white mt-2">Good user experience</h6>
                                                </Link>
                                                <p className="mb-0 mt-4 text-white">" Unrivaled brilliance surpassing all others. Highly recommended for novices and experts alike. We will hire them for sure. "</p>
                                                <div className="d-flex align-items-center mt-5 position-relative z-1">
                                                    <Link href="#">
                                                        <img className="rounded-circle icon-shape icon-50" src="assets/imgs/pages/it-solutions/page-home/home-section-8/avatar-2.png" alt="Webency" />
                                                    </Link>
                                                    <div className="text-start ms-3">
                                                        <Link href="#">
                                                            <span className="btn-text text-white">Juliana P. Taylor</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    {/* Swiper JS */}
                </div>
            </section>
        </>
    );
}
