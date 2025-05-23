import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*it-solutions pricing section 1*/}
            <section className="it-solutions-pricing-section-1 pb-5">
                <div className="container">
                    <div className="table-responsive wow img-custom-anim-top">
                        <table className="table table-bordered rounded-4 overflow-hidden">
                            <thead>
                                <tr className="border-0">
                                    <th className="bg-light-2 py-3 px-5 text-center border-0 overflow-hidden" scope="col">
                                        <h6 className="text-anime-style-3">Compare Features List</h6>
                                        <p className="fs-18 fw-medium text-dark text-anime-style-2">Save 32% with yearly billing.</p>
                                        <div className="d-flex justify-content-center pricing__price position-relative">
                                            <div className="pricing__tab">
                                                <span className="pricing__tab-btn monthly_tab_title">Monthly</span>
                                                <span className="pricing__tab-switcher" />
                                                <span className="pricing__tab-btn annual_tab_title">Yearly</span>
                                            </div>
                                            <div className="position-absolute bottom-0 end-0 mb-6 me-4 d-none d-lg-block">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={46} height={56} viewBox="0 0 46 56" fill="none">
                                                    <path
                                                        d="M2.02772 53.5561C0.202433 52.3093 0.0421815 52.0222 0.290756 50.6465C0.488261 49.4491 1.08939 48.7051 3.11738 47.2127C7.81305 43.6878 10.8922 43.9438 6.6254 47.4951C5.35879 48.5306 4.4442 49.5224 4.54035 49.6947C4.8929 50.3263 10.6666 50.1491 14.1738 49.4185C24.4779 47.3089 33.3758 39.4424 33.6326 32.2814C33.6629 29.975 33.3546 28.6808 32.6823 28.488C32.4582 28.4238 31.4407 28.759 30.417 29.2854C25.7202 31.4595 20.6181 30.8164 19.6941 27.9469C19.014 25.9192 22.0965 22.2693 25.2962 21.2576C27.3057 20.6763 30.0586 21.2245 32.1593 22.695L34.0167 23.9993L36.4597 21.2272C41.0965 16.0456 43.4799 10.6037 43.5588 5.07975C43.5833 3.63985 43.7548 1.85623 43.9718 1.09854C44.0979 0.642573 44.718 0.578588 44.9347 0.999189L44.9575 1.04357C45.6629 2.64453 45.7489 6.23829 45.1564 9.83041C44.5511 13.4671 41.8027 18.6596 38.1894 22.9772L35.318 26.3982L35.8769 29.0182C38.0808 39.7787 25.1343 51.7896 10.9626 52.1632C9.19593 52.2354 7.42928 52.3076 7.0452 52.2939C6.55872 52.2991 6.68067 52.7199 7.53273 53.6395C8.19901 54.3611 8.60289 55.1521 8.37906 55.4256C7.86757 56.1953 4.2501 55.1098 2.02772 53.5561ZM28.4439 27.3691C31.0293 26.4706 31.566 25.2741 29.869 24.2569C28.0054 23.1438 25.0485 23.6463 23.4303 25.401C21.7546 27.1873 21.7546 27.1873 22.6896 27.6483C23.823 28.2628 26.121 28.1982 28.4439 27.3691Z"
                                                        fill="#0D6EFD"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </th>
                                    <th className="bg-light-2 py-3 px-5 text-center border-0 overflow-hidden" scope="col">
                                        <span className="btn-text opacity-50 wow img-custom-anim-left">advanced</span>
                                        <br />
                                        <div className="d-flex justify-content-center pricing__price wow img-custom-anim-left">
                                            <h1 className="mb-0"></h1>
                                            <h1 className="mb-0 price monthly_price">99</h1>
                                            <h1 className="mb-0 price annual_price">299</h1>
                                        </div>
                                        <Link href="#" className="btn btn-primary mt-3 mb-3 w-100 text-nowrap" data-aos="fade-up" data-aos-delay={200}>
                                            try for free
                                        </Link>
                                    </th>
                                    <th className="bg-light-2 py-3 px-5 text-center border-0 overflow-hidden" scope="col">
                                        <span className="btn-text opacity-50 wow img-custom-anim-left">Team Plan</span>
                                        <br />
                                        <div className="d-flex justify-content-center pricing__price wow img-custom-anim-left">
                                            <h1 className="mb-0">$</h1>
                                            <h1 className="mb-0 price monthly_price">299</h1>
                                            <h1 className="mb-0 price annual_price">699</h1>
                                        </div>
                                        <Link href="#" className="btn btn-primary mt-3 mb-3 w-100 text-nowrap" data-aos="fade-up" data-aos-delay={400}>
                                            try for free
                                        </Link>
                                    </th>
                                    <th className="bg-light-2 py-3 px-5 text-center border-0 overflow-hidden" scope="col">
                                        <span className="btn-text opacity-50 wow img-custom-anim-left">Pro PLan</span>
                                        <br />
                                        <div className="d-flex justify-content-center pricing__price wow img-custom-anim-left">
                                            <h1 className="mb-0">$</h1>
                                            <h1 className="mb-0 price monthly_price">499</h1>
                                            <h1 className="mb-0 price annual_price">999</h1>
                                        </div>
                                        <Link href="#" className="btn btn-primary mt-3 mb-3 w-100 text-nowrap" data-aos="fade-up" data-aos-delay={600}>
                                            try for free
                                        </Link>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="pe-10 align-middle" scope="row">
                                        <p className="mb-0 text-nowrap ps-5">Marketing strategy</p>
                                    </th>
                                    <td className="text-center py-3">
                                        <i className="fa-solid fa-xmark text-primary fs-20" />
                                    </td>
                                    <td className="text-center py-3">
                                        <i className="fa-solid fa-xmark text-primary fs-20" />
                                    </td>
                                    <td className="text-center py-3">
                                        <i className="fa-solid fa-check text-primary fs-20" />
                                    </td>
                                </tr>
                                <tr>
                                    <th className="pe-10 align-middle" scope="row">
                                        <p className="mb-0 text-nowrap ps-5">Competitive work analysis</p>
                                    </th>
                                    <td className="text-center py-3">
                                        <i className="fa-solid fa-check text-primary fs-20" />
                                    </td>
                                    <td className="text-center py-3">
                                        <i className="fa-solid fa-check text-primary fs-20" />
                                    </td>
                                    <td className="text-center py-3">
                                        <i className="fa-solid fa-check text-primary fs-20" />
                                    </td>
                                </tr>
                                <tr>
                                    <th className="pe-10 align-middle" scope="row">
                                        <p className="mb-0 text-nowrap ps-5">Social media share audit</p>
                                    </th>
                                    <td className="text-center py-3">
                                        <i className="fa-solid fa-xmark text-primary fs-20" />
                                    </td>
                                    <td className="text-center py-3">
                                        <i className="fa-solid fa-check text-primary fs-20" />
                                    </td>
                                    <td className="text-center py-3">
                                        <i className="fa-solid fa-check text-primary fs-20" />
                                    </td>
                                </tr>
                                <tr>
                                    <th className="pe-10 align-middle" scope="row">
                                        <p className="mb-0 text-nowrap ps-5">Social media share audit</p>
                                    </th>
                                    <td className="text-center py-3">
                                        <i className="fa-solid fa-xmark text-primary fs-20" />
                                    </td>
                                    <td className="text-center py-3">
                                        <i className="fa-solid fa-check text-primary fs-20" />
                                    </td>
                                    <td className="text-center py-3">
                                        <i className="fa-solid fa-check text-primary fs-20" />
                                    </td>
                                </tr>
                                <tr>
                                    <th className="pe-10 align-middle" scope="row">
                                        <p className="mb-0 text-nowrap ps-5">24/7 online support</p>
                                    </th>
                                    <td className="text-center py-3">
                                        <i className="fa-solid fa-check text-primary fs-20" />
                                    </td>
                                    <td className="text-center py-3">
                                        <i className="fa-solid fa-check text-primary fs-20" />
                                    </td>
                                    <td className="text-center py-3">
                                        <i className="fa-solid fa-check text-primary fs-20" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}
