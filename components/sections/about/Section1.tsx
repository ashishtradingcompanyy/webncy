import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*it-solutions about section 1*/}
            <section className="it-solutions-about-section-1 py-120 overflow-hidden">
                <div className="container position-relative z-1">
                    <div className="row">
                        <div className="col-lg-6 pe-lg-8 col-md-12">
                            <span className="text-primary fs-7 fw-medium position-relative z-1 btn-text border-top border-primary px-2 py-2">About our company</span>
                            <h2 className="my-3 text-anime-style-3">End-to-End IT Solutions for Growing Businesses</h2>
                            <p className="text-anime-style-1">cWelcome to Astrax Agency, where innovation meets expertise. We specialize in delivering cutting-edge IT solutions designed to elevate your business to new heights. From seamless software development</p>
                            <div className="bg-light-2 p-4 rounded-3 my-5">
                                <div className="position-relative pt-5 pb-3 overflow-hidden">
                                    <div className="progress position-relative" role="progressbar" aria-label="Basic example" aria-valuenow={98} aria-valuemin={0} aria-valuemax={98}>
                                        <div className="progress-bar rounded-pill wow img-custom-anim-left" style={{ width: "98%" }} />
                                    </div>
                                    <span className="position-absolute top-0 start-0 mb-2 fs-18 fw-medium">It Solution</span>
                                    <span className="text-opacity-50 position-absolute top-0 end-0 mt-2 fs-7 fw-medium">98%</span>
                                </div>
                                <div className="position-relative pt-5 pb-3 overflow-hidden">
                                    <div className="progress position-relative" role="progressbar" aria-label="Basic example" aria-valuenow={98} aria-valuemin={0} aria-valuemax={98}>
                                        <div className="progress-bar rounded-pill wow img-custom-anim-left" style={{ width: "98%" }} />
                                    </div>
                                    <span className="position-absolute top-0 start-0 mb-2 fs-18 fw-medium">Cyber Security</span>
                                    <span className="text-opacity-50 position-absolute top-0 end-0 mt-2 fs-7 fw-medium">98%</span>
                                </div>
                                <div className="position-relative pt-5 overflow-hidden">
                                    <div className="progress position-relative" role="progressbar" aria-label="Basic example" aria-valuenow={99} aria-valuemin={0} aria-valuemax={99}>
                                        <div className="progress-bar rounded-pill wow img-custom-anim-left" style={{ width: "99%" }} />
                                    </div>
                                    <span className="position-absolute top-0 start-0 mb-2 fs-18 fw-medium">Cloud Solution</span>
                                    <span className="text-opacity-50 position-absolute top-0 end-0 mt-2 fs-7 fw-medium">99%</span>
                                </div>
                            </div>
                            <Link href="/contact" className="btn btn-primary" data-aos="zoom-in">
                                <span>Get Started</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                </svg>
                            </Link>
                        </div>
                        <div className="col-lg-6 text-end">
                            <div className="position-relative mt-lg-0 mt-8">
                                <img className="rounded-3 wow img-custom-anim-top" src="assets/imgs/pages/it-solutions/page-about/img-1.png" alt="AstraX" />
                                <div data-aos="fade-up" data-aos-delay={300}>
                                    <img className="rounded-3 position-md-absolute img-2 mt-lg-0 mt-5" src="assets/imgs/pages/it-solutions/page-about/img-2.png" alt="AstraX" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
