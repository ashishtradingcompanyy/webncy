import Link from "next/link";

export default function Section6() {
    return (
        <>
            {/*it solutions section 6*/}
            <section className="it-solutions-home-section-6 position-relative overflow-hidden pt-120 pb-250">
                <div className="container position-relative z-1">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-3 order-lg-1 mt-lg-0 mt-8">
                            <div className="position-relative d-inline-block">
                                <img className="rounded-3 wow img-custom-anim-left" src="assets/imgs/pages/it-solutions/page-home/home-section-6/img-1.png" alt="Webency" />
                                <div data-aos="fade-up" data-aos-delay={200}>
                                    <img className="rounded-3 position-absolute top-100 start-100 translate-middle d-none d-md-block border border-4 border-white shadow" src="assets/imgs/pages/it-solutions/page-home/home-section-6/img-2.png" alt="Webency" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 order-2">
                            <span className="text-primary fs-7 fw-medium position-relative z-1 btn-text border-top border-primary px-2 py-2">features</span>
                            <h2 className="text-dark my-3 text-anime-style-3">
                                Choose our excellent <br />
                                company services
                            </h2>
                            <p className="pb-4 text-anime-style-1">We offer a wide range of digital marketing services that cater to business of all sizes. A forward-thinking and clever approach to maintaining sales tax compliance amidst the digital era.</p>
                            <div className="d-flex flex-md-row flex-column gap-5">
                                <div data-aos="fade-up" data-aos-delay={200}>
                                    <div className="icon">
                                        <svg className="stroke-primary" xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 60 60" fill="none">
                                            <g clipPath="url(#clip0_349_948)">
                                                <path d="M41.25 25C48.845 25 55 30.0375 55 36.25C55 39.7425 53.055 42.8625 50 44.925V50L45.09 47.055C43.8317 47.3522 42.543 47.5015 41.25 47.5C33.655 47.5 27.5 42.4625 27.5 36.25C27.5 30.0375 33.655 25 41.25 25Z" stroke="#0D6EFD" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M27.9925 39.245C26.2675 39.735 24.4175 40 22.5 40C20.2785 40.0048 18.0717 39.6398 15.97 38.92L10 42.5V35.4975C6.9075 32.7925 5 29.0875 5 25C5 16.715 12.835 10 22.5 10C31.955 10 39.6575 16.425 40 24.4625V25.045" stroke="#0D6EFD" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M25 20H25.025" stroke="#0D6EFD" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17.5 20H17.525" stroke="#0D6EFD" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M37.5 35H37.525" stroke="#0D6EFD" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M45 35H45.025" stroke="#0D6EFD" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                        </svg>
                                    </div>
                                    <Link href="#">
                                        <h6 className="mt-5 mb-3 fs-20">info@Webency.com</h6>
                                    </Link>
                                    <p className="mb-0">Media strategy encapsulates your intentions.</p>
                                </div>
                                <div data-aos="fade-up" data-aos-delay={400}>
                                    <div className="icon">
                                        <svg className="stroke-primary" xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 60 60" fill="none">
                                            <g clipPath="url(#clip0_349_2617)">
                                                <path d="M29.8325 12.5H12.5V52.5H45V32.5" stroke="#0D6EFD" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M35 42.5H22.5" stroke="#0D6EFD" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M22.5 32.5H35V22.5H22.5V32.5Z" stroke="#0D6EFD" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M37.5 12.5V7.5" stroke="#0D6EFD" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M45 15L50 10" stroke="#0D6EFD" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M47.5 22.5H52.5" stroke="#0D6EFD" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                        </svg>
                                    </div>
                                    <Link href="telto:(123) 456 789 00">
                                        <h6 className="mt-5 mb-3 fs-20">+(123) 456 789 00</h6>
                                    </Link>
                                    <p className="mb-0">Media strategy encapsulates your intentions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
