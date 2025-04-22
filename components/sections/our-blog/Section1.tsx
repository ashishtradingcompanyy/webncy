import Link from "next/link";
const items = [
    {
        delay: ".2s",
        link: "#",
        linkAuthor: "#",
        img: "img-1.png",
        time: "26 August 2025",
        author: "Alex Roy",
        title: "Scalable IT solutions tailored to meet a nunique business",
    },
    {
        delay: ".4s",
        link: "#",
        linkAuthor: "#",
        img: "img-2.png",
        time: "26 August 2025",
        author: "Alex Roy",
        title: "Unlock the full potential Best your business with tailored IT",
    },
    {
        delay: ".6s",
        link: "#",
        linkAuthor: "#",
        img: "img-3.png",
        time: "26 August 2025",
        author: "Alex Roy",
        title: "Optimize your operations with tailored IT services that grow",
    },
    {
        delay: ".2s",
        link: "#",
        linkAuthor: "#",
        img: "img-4.png",
        time: "26 August 2025",
        author: "Alex Roy",
        title: "How IT Solutions Drive Business Growth in the Best Digital Age",
    },
    {
        delay: ".4s",
        link: "#",
        linkAuthor: "#",
        img: "img-5.png",
        time: "26 August 2025",
        author: "Alex Roy",
        title: "The Role of IT Solutions in Best Business Matter Transformation",
    },
    {
        delay: ".6s",
        link: "#",
        linkAuthor: "#",
        img: "img-6.png",
        time: "26 August 2025",
        author: "Alex Roy",
        title: "5 Ways Cloud Solutions Can Be Trends Your Solution Business",
    },
    {
        delay: ".2s",
        link: "#",
        linkAuthor: "#",
        img: "img-7.png",
        time: "26 August 2025",
        author: "Alex Roy",
        title: "How IT Solutions Enhance Your Collaboration in Remote Work",
    },
    {
        delay: ".4s",
        link: "#",
        linkAuthor: "#",
        img: "img-8.png",
        time: "26 August 2025",
        author: "Alex Roy",
        title: "Cybersecurity Essentials: Work Protecting Your Business from",
    },
    {
        delay: ".6s",
        link: "#",
        linkAuthor: "#",
        img: "img-9.png",
        time: "26 August 2025",
        author: "Alex Roy",
        title: "How IT Solution Enhance Smart Collaboration in Remote Work",
    },
    // Add more items here
];
export default function Section1() {
    return (
        <>
            {/*it-solutions our-blog section 1*/}
            <section className="it-solutions-our-blog-section-1 pt-120 overflow-hidden">
                <div className="container">
                    <div className="row">
                        {items.map((item, index) => (
                            <div className="col-lg-4 col-md-6 mb-md-10 pb-md-5" key={index}>
                                <div className="card-blog position-relative mb-md-7 mb-5">
                                    <Link href={item.link}>
                                        <img className="wow img-custom-anim-left w-100 rounded-4 rounded-bottom-0 rounded-bottom-md-4" data-wow-delay={item.delay} src={`assets/imgs/pages/it-solutions/page-blog/${item.img}`} alt="AstraX" />
                                    </Link>
                                    <div className="wow fadeInLeft2" data-wow-delay={item.delay}>
                                        <div className="card-blog-content bg-white p-md-4 p-3 position-md-absolute top-md-100 start-0 end-0 mx-md-3 translate-middle-md-y shadow-1 rounded-4 rounded-top-0 rounded-top-md-4 mt-md-6">
                                            <div className="d-flex flex-wrap align-items-center gap-2 card-information">
                                                <div className="time d-flex align-items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                                        <g clipPath="url(#clip0_1861_31745)">
                                                            <path
                                                                d="M4.5384 0C4.68692 0 4.82936 0.0663748 4.93438 0.184523C5.0394 0.302671 5.0984 0.462914 5.0984 0.63V1.8081H11.112V0.6381C11.112 0.471014 11.171 0.310771 11.276 0.192623C11.381 0.0744748 11.5235 0.0081 11.672 0.0081C11.8205 0.0081 11.963 0.0744748 12.068 0.192623C12.173 0.310771 12.232 0.471014 12.232 0.6381V1.8081H14.4C14.8242 1.8081 15.2311 1.99762 15.5311 2.33499C15.8311 2.67236 15.9998 3.12997 16 3.6072V16.2009C15.9998 16.6781 15.8311 17.1357 15.5311 17.4731C15.2311 17.8105 14.8242 18 14.4 18H1.6C1.17579 18 0.768947 17.8105 0.468912 17.4731C0.168877 17.1357 0.000212104 16.6781 0 16.2009L0 3.6072C0.000212104 3.12997 0.168877 2.67236 0.468912 2.33499C0.768947 1.99762 1.17579 1.8081 1.6 1.8081H3.9784V0.6291C3.97861 0.46217 4.03771 0.302158 4.1427 0.184204C4.2477 0.0662511 4.39002 -1.70337e-07 4.5384 0ZM1.12 6.9678V16.2009C1.12 16.2718 1.13242 16.342 1.15654 16.4075C1.18066 16.4731 1.21602 16.5326 1.26059 16.5827C1.30516 16.6329 1.35808 16.6727 1.41631 16.6998C1.47455 16.7269 1.53697 16.7409 1.6 16.7409H14.4C14.463 16.7409 14.5255 16.7269 14.5837 16.6998C14.6419 16.6727 14.6948 16.6329 14.7394 16.5827C14.784 16.5326 14.8193 16.4731 14.8435 16.4075C14.8676 16.342 14.88 16.2718 14.88 16.2009V6.9804L1.12 6.9678ZM5.3336 13.1571V14.6565H4V13.1571H5.3336ZM8.6664 13.1571V14.6565H7.3336V13.1571H8.6664ZM12 13.1571V14.6565H10.6664V13.1571H12ZM5.3336 9.5778V11.0772H4V9.5778H5.3336ZM8.6664 9.5778V11.0772H7.3336V9.5778H8.6664ZM12 9.5778V11.0772H10.6664V9.5778H12ZM3.9784 3.0672H1.6C1.53697 3.0672 1.47455 3.08117 1.41631 3.1083C1.35808 3.13544 1.30516 3.17522 1.26059 3.22536C1.21602 3.27551 1.18066 3.33504 1.15654 3.40055C1.13242 3.46607 1.12 3.53629 1.12 3.6072V5.7087L14.88 5.7213V3.6072C14.88 3.53629 14.8676 3.46607 14.8435 3.40055C14.8193 3.33504 14.784 3.27551 14.7394 3.22536C14.6948 3.17522 14.6419 3.13544 14.5837 3.1083C14.5255 3.08117 14.463 3.0672 14.4 3.0672H12.232V3.9033C12.232 4.07039 12.173 4.23063 12.068 4.34878C11.963 4.46693 11.8205 4.5333 11.672 4.5333C11.5235 4.5333 11.381 4.46693 11.276 4.34878C11.171 4.23063 11.112 4.07039 11.112 3.9033V3.0672H5.0984V3.8952C5.0984 4.06229 5.0394 4.22253 4.93438 4.34068C4.82936 4.45883 4.68692 4.5252 4.5384 4.5252C4.38988 4.5252 4.24744 4.45883 4.14242 4.34068C4.0374 4.22253 3.9784 4.06229 3.9784 3.8952V3.0672Z"
                                                                fill="#292929"
                                                            />
                                                        </g>
                                                    </svg>
                                                    <p className="mb-0 fw-regular ms-1 text-dark">{item.time}</p>
                                                </div>
                                                <div className="d-flex align-items-center ps-md-2 ms-md-2 position-relative">
                                                    <span className="position-absolute top-50 start-0 translate-middle-y h-50 border-start d-none d-md-block"></span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                                                        <path d="M3.75 15.75C3.75 12.8505 6.10051 10.5 9 10.5C11.8995 10.5 14.25 12.8505 14.25 15.75M12 5.25C12 6.90686 10.6568 8.25 9 8.25C7.34314 8.25 6 6.90686 6 5.25C6 3.59314 7.34314 2.25 9 2.25C10.6568 2.25 12 3.59314 12 5.25Z" stroke="#292929" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <Link href={item.linkAuthor} className="mb-0 fw-regular ms-1">
                                                        {item.author}
                                                    </Link>
                                                </div>
                                            </div>
                                            <Link href={item.link}>
                                                <h6 className="fw-semibold my-2 fs-20 text-anime-style-3">{item.title}</h6>
                                            </Link>
                                            <Link href="#" className="d-flex gap-2 mt-4 hover-up">
                                                <h6 className="fs-18 text-primary">Learn More</h6>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M5 19L17 7" stroke="#0D6EFD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M7.25 7H17V16.75" stroke="#0D6EFD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
