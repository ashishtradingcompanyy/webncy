import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*it-solutions contact section 1*/}
            <section className="it-solutions-contact-section-1 pt-120">
                <div className="container">
                    <div className="mb-80 text-center">
                        <span className="text-primary fs-7 fw-medium position-relative z-1 btn-text border-top border-primary px-2 py-2">Contact Us</span>
                        <h2 className="text-dark my-3 text-anime-style-3">Let's Discuss Your IT Needs</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="row g-md-4 g-3">
                                <div className="col-lg-4">
                                    <div className="d-flex flex-wrap gap-4 justify-content-center" data-aos="fade-up" data-aos-delay={0}>
                                        <Link href="#" className="p-4 bg-light-2 d-flex gap-3 align-items-center card-contact rounded-3 w-100">
                                            <div>
                                                <div className="icon-shape icon-60 rounded-circle bg-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={33} height={32} viewBox="0 0 33 32" fill="none">
                                                        <path
                                                            d="M5.83333 24.0013L12.5 16.0013M27.1667 24.0013L20.5 16.0013M4.5 10.668L14.1333 17.0901C14.9887 17.6604 15.4163 17.9456 15.8785 18.0562C16.2871 18.1542 16.7129 18.1542 17.1215 18.0562C17.5837 17.9456 18.0113 17.6604 18.8667 17.0901L28.5 10.668M8.76667 25.3346H24.2333C25.7268 25.3346 26.4736 25.3346 27.044 25.044C27.5457 24.7884 27.9537 24.3804 28.2093 23.8786C28.5 23.3082 28.5 22.5614 28.5 21.068V10.9346C28.5 9.44117 28.5 8.69442 28.2093 8.124C27.9537 7.62222 27.5457 7.21428 27.044 6.95862C26.4736 6.66797 25.7268 6.66797 24.2333 6.66797H8.76667C7.2732 6.66797 6.52645 6.66797 5.95603 6.95862C5.45425 7.21428 5.04631 7.62222 4.79065 8.124C4.5 8.69442 4.5 9.44116 4.5 10.9346V21.068C4.5 22.5614 4.5 23.3082 4.79065 23.8786C5.04631 24.3804 5.45425 24.7884 5.95603 25.044C6.52645 25.3346 7.27319 25.3346 8.76667 25.3346Z"
                                                            stroke="white"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="card-contact-content">
                                                <h6 className="fs-18">Our Email</h6>
                                                <p className="fw-medium mb-0">contact@webency.tech</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="d-flex flex-wrap gap-4 justify-content-center" data-aos="fade-up" data-aos-delay={200}>
                                        <Link href="#" className="p-4 bg-light-2 d-flex gap-3 align-items-center card-contact rounded-3 w-100">
                                            <div>
                                                <div className="icon-shape icon-60 rounded-circle bg-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                                                        <path
                                                            d="M18.7333 7.99935C20.0357 8.25344 21.2325 8.89036 22.1708 9.8286C23.1091 10.7668 23.746 11.9637 24 13.266M18.7333 2.66602C21.4391 2.9666 23.9621 4.17824 25.8884 6.10203C27.8145 8.0258 29.0295 10.5474 29.3333 13.2527M24.6667 27.9993C13.2528 27.9993 4 18.7465 4 7.33268C4 6.81772 4.01884 6.30716 4.05585 5.80166C4.09833 5.22151 4.11957 4.93144 4.2716 4.66739C4.39752 4.4487 4.62067 4.2413 4.84797 4.13168C5.12241 3.99935 5.44251 3.99935 6.08268 3.99935H9.83909C10.3774 3.99935 10.6466 3.99935 10.8774 4.08795C11.0812 4.16622 11.2627 4.29334 11.4059 4.45815C11.568 4.64472 11.66 4.8977 11.844 5.40363L13.3988 9.67942C13.6128 10.2681 13.7199 10.5624 13.7017 10.8416C13.6857 11.0878 13.6016 11.3248 13.4589 11.5261C13.2971 11.7544 13.0286 11.9155 12.4915 12.2378L10.6667 13.3327C12.2692 16.8645 15.1335 19.7325 18.6667 21.3327L19.7616 19.5079C20.0839 18.9707 20.2449 18.7021 20.4732 18.5404C20.6745 18.3977 20.9115 18.3136 21.1577 18.2976C21.4369 18.2795 21.7313 18.3865 22.32 18.6005L26.5957 20.1553C27.1016 20.3393 27.3547 20.4313 27.5412 20.5935C27.706 20.7367 27.8332 20.9181 27.9113 21.122C28 21.3527 28 21.6219 28 22.1603V25.9167C28 26.5568 28 26.877 27.8676 27.1514C27.758 27.3787 27.5507 27.6019 27.332 27.7278C27.0679 27.8798 26.7779 27.9009 26.1977 27.9435C25.6921 27.9805 25.1816 27.9993 24.6667 27.9993Z"
                                                            stroke="white"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="card-contact-content">
                                                <h6 className="fs-18">Phone</h6>
                                                <p className="fw-medium mb-0">+91 7000 684 914</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="d-flex flex-wrap gap-4 justify-content-center" data-aos="fade-up" data-aos-delay={400}>
                                        <Link href="#" className="p-4 bg-light-2 d-flex gap-3 align-items-center card-contact rounded-3 w-100">
                                            <div>
                                                <div className="icon-shape icon-60 rounded-circle bg-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                                                        <path d="M15.9974 29.3327C23.3612 29.3327 29.3307 23.3631 29.3307 15.9993C29.3307 8.63555 23.3612 2.66602 15.9974 2.66602C8.6336 2.66602 2.66406 8.63555 2.66406 15.9993C2.66406 23.3631 8.6336 29.3327 15.9974 29.3327Z" stroke="white" strokeWidth="2.5" />
                                                        <path
                                                            d="M16.6314 9.15785C16.6314 8.51839 16.113 8 15.4735 8C14.8341 8 14.3157 8.51839 14.3157 9.15785H16.6314ZM18.6079 18.3738C18.1557 17.9217 17.4227 17.9217 16.9706 18.3738C16.5184 18.826 16.5184 19.559 16.9706 20.0112L18.6079 18.3738ZM19.2862 22.3269C19.7384 22.7791 20.4714 22.7791 20.9236 22.3269C21.3758 21.8747 21.3758 21.1417 20.9236 20.6895L19.2862 22.3269ZM14.3157 9.15785V14.5611H16.6314V9.15785H14.3157ZM16.9706 20.0112L19.2862 22.3269L20.9236 20.6895L18.6079 18.3738L16.9706 20.0112ZM16.6314 16.8768C16.6314 17.5163 16.113 18.0347 15.4735 18.0347V20.3504C17.3919 20.3504 18.9471 18.7951 18.9471 16.8768H16.6314ZM15.4735 18.0347C14.8341 18.0347 14.3157 17.5163 14.3157 16.8768H12C12 18.7951 13.5552 20.3504 15.4735 20.3504V18.0347ZM14.3157 16.8768C14.3157 16.2374 14.8341 15.719 15.4735 15.719V13.4033C13.5552 13.4033 12 14.9585 12 16.8768H14.3157ZM15.4735 15.719C16.113 15.719 16.6314 16.2374 16.6314 16.8768H18.9471C18.9471 14.9585 17.3919 13.4033 15.4735 13.4033V15.719Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="card-contact-content">
                                                <h6 className="fs-18">Schedule</h6>
                                                <p className="fw-medium mb-0">Sunday-Fri: 9 AM - 6 PM</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center mt-80">
                        <div className="col-lg-6 mb-lg-0 mb-5">
                            <img className="rounded-4 wow img-custom-anim-left w-100" src="assets/imgs/pages/it-solutions/page-contact/img-1.png" alt="AstraX" />
                        </div>
                        <div className="col-lg-6 ms-lg-auto align-self-stretch">
                            <form action="#" className="form-group d-flex flex-column gap-3 p-md-5 p-4 bg-light-2 rounded-4 h-100 justify-content-center">
                                <h6 className="text-anime-style-2">Get In Touch Now</h6>
                                <div className="row g-3 wow img-custom-anim-top">
                                    <div className="col-md-6">
                                        <input type="text" id="username" className="form-control border-0 p-3 rounded-3 mb-3" placeholder="First Name*" aria-label="username" />
                                        <input type="text" id="phone" className="form-control border-0 p-3 rounded-3" placeholder="Phone Number*" aria-label="phone" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" id="email" className="form-control border-0 p-3 rounded-3 mb-3" placeholder="Last Name*" aria-label="email" />
                                        <input type="text" id="company" className="form-control border-0 p-3 rounded-3" placeholder="Email Address*" aria-label="company" />
                                    </div>
                                </div>
                                <div className="col-12 wow img-custom-anim-top">
                                    <select name="service" className="form-select border-0 p-3 rounded-3" id="service" aria-placeholder="Select Services">
                                        <option selected>Service Type*</option>
                                        <option value="service-2">Service 1</option>
                                        <option value="service-2">Service 2</option>
                                    </select>
                                </div>
                                <div className="col-12 wow img-custom-anim-top">
                                    <textarea className="form-control border-0 p-3 rounded-3" id="message" placeholder="Your Message" aria-label="message" defaultValue={""} />
                                </div>
                                <div className="d-inline-block">
                                    <button type="submit" className="btn btn-primary w-100 mt-2" data-aos="zoom-in">
                                        <span>Get Started Now</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_1799_6261)">
                                                <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container wow img-custom-anim-top">
                    <div className="row pt-100">
                        <div className="col-12">
                            <div className="contact-map border rounded-4 overflow-hidden">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.353420411758!2d72.83235207524173!3d19.179759982046402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7002c086a01%3A0xb4c72c09af8c5b89!2sWebency%20Technology!5e0!3m2!1sen!2sin!4v1747969675421!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                <div className="position-absolute bottom-50 start-50 bg-dark text-center p-4 rounded-4 z-2 d-none d-md-block">
                                    <p className="fs-16 text-white mb-2">
                                       Main Road Bilaunji Waidhan<br />
                                        Distt -  Singrauli M.P. 486886
                                    </p>
                                    <Link href="#" className="text-white fw-semibold">
                                       contact@webency.com
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
