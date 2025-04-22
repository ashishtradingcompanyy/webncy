import Breadcrumb from "@/components/elements/Breadcrumb";

interface PageHeaderProps {
    title: string;
    current_page: string;
}

export default function PageHeader({ title, current_page }: PageHeaderProps) {
    return (
        <>
            {/*it-solutions home section header*/}
            <section className="it-solutions-home-section-1 position-relative pt-250-keep pb-120-keep border-bottom overflow-hidden" data-background="assets/imgs/pages/it-solutions/page-about/bg-img-header.png">
                <div className="banner-line">
                    <div className="vertical-effect border-opacity-10 border-end border-white raindrop" />
                    <div className="vertical-effect border-opacity-10 border-end border-white" />
                    <div className="vertical-effect border-opacity-10 border-end border-white raindrop-reverse" />
                    <div className="vertical-effect border-opacity-10 border-end border-white" />
                    <div className="vertical-effect border-opacity-10 border-end border-white raindrop d-none d-lg-block" />
                    <div className="vertical-effect border-opacity-10 border-end border-white d-none d-lg-block" />
                </div>
                <div className="container position-relative z-1">
                    <div className="col-12 text-center">
                        <h1 className="text-white mb-3 text-anime-style-2">{title}</h1>
                        <Breadcrumb page={current_page} />
                    </div>
                    <div className="position-absolute top-100 translate-middle start-100">
                        <svg data-aos="zoom-in" xmlns="http://www.w3.org/2000/svg" width={160} height={160} viewBox="0 0 160 160" fill="none">
                            <circle cx={80} cy={80} r={80} fill="url(#paint0_linear_1861_33054)" />
                            <defs>
                                <linearGradient id="paint0_linear_1861_33054" x1="49.6175" y1="6.3388" x2="137.486" y2="134.426" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#002582" />
                                    <stop offset={1} stopColor="#73D1FF" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </section>
        </>
    );
}
