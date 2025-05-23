import Link from "next/link";
import MobileMenu from "../MobileMenu";
import MainMenu from "../MainMenu";

export default function Header({ scroll, isMobileMenu, handleMobileMenu }: any) {
    return (
        <>
            <header>
                <div className="position-absolute top-0 start-0 w-100 header-11">
                    {/* TOP-BAR 2 */}
                    <div className="top-bar backdrop-filter-50 position-relative z-2">
                        <div className="container d-flex justify-content-md-between justify-content-center align-items-center">
                            <div className="d-flex align-items-center justify-content-center gap-4">
                                <Link href="#" className="fs-7 text-white border-white">
                                    contact@webency.tech
                                </Link>
                                <Link href="telto:(91) 7000684914" className="fs-7 text-white border-white">
                                    +(91) 7000684914
                                </Link>
                            </div>
                            <div className="social-icons d-none d-md-flex">
                                <Link href="#" className="border border-top-0 text-white border-white border-bottom-0 border-end-0 border-opacity-10 icon-shape icon-md">
                                    <i className="bi bi-facebook" />
                                </Link>
                                <Link href="#" className="border border-top-0 text-white border-white border-bottom-0 border-end-0 border-opacity-10 icon-shape icon-md">
                                    <i className="bi bi-twitter-x" />
                                </Link>
                                <Link href="#" className="border border-top-0 text-white border-white border-bottom-0 border-opacity-10 icon-shape icon-md">
                                    <i className="bi bi-linkedin" />
                                </Link>
                                <Link href="#" className="border border-top-0 text-white border-white border-bottom-0 border-start-0 border-opacity-10 icon-shape icon-md">
                                    <i className="bi bi-behance" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <nav className={`navbar navbar-expand-lg navbar-transparent border-bottom border-top border-white border-opacity-10 p-0 shadow-none ${scroll ? "navbar-stick top-0 position-fixed" : ""}`}>
                        <div className="container">
                            <Link className="navbar-brand py-5" href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
                                    <path className="fill-white" d="M24.5043 9.79724L22.7082 18.3981L35.2929 17.1948L37.1117 7.00605L24.5043 9.79724Z" />
                                    <path className="fill-white" d="M31.9171 17.6837L23.2697 20.6189L30.6333 30.3865L40.723 26.6545L31.9171 17.6837Z" />
                                    <path className="fill-white" d="M28.4204 27.86L21.4605 22.2312L16.332 33.3249L24.7296 39.7347L28.4204 27.86Z" />
                                    <path className="fill-white" d="M17.5913 29.998L19.1912 21.3633L6.63465 22.8288L5.04812 33.0511L17.5913 29.998Z" />
                                    <path className="fill-white" d="M10.2917 22.1777L18.8717 19.0632L11.2859 9.45346L1.28177 13.3945L10.2917 22.1777Z" />
                                    <path className="fill-white" d="M13.7243 12.2243L20.8121 17.7054L25.6875 6.50938L17.1442 0.277556L13.7243 12.2243Z" />
                                </svg>
                                <h5 className="mb-0 text-white">Webency</h5>
                            </Link>
                            <div className="d-none d-lg-flex">
                                <MainMenu />
                            </div>
                            <div className="d-flex align-items-center gap-4">
                                <Link href="#" className="btn btn-white d-none d-md-flex hover-up">
                                    <span>Get Started</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_816_117)">
                                            <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#292929" />
                                        </g>
                                    </svg>
                                </Link>
                                <div className="burger-icon burger-icon-white border rounded-3 top-0 end-0" onClick={handleMobileMenu}>
                                    <span className="burger-icon-top" />
                                    <span className="burger-icon-mid" />
                                    <span className="burger-icon-bottom" />
                                </div>
                            </div>
                        </div>
                    </nav>
                    <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
                </div>
            </header>
        </>
    );
}
