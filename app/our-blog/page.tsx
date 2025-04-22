import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/our-blog/Section1";
import Section8 from "@/components/sections/home/Section8";
import PageHeader from "@/components/sections/PageHeader";
import Pagination from "@/components/elements/Pagination";
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader title="Our Blog" current_page="Our Blog" />
                <Section1 />
                <Pagination classList="pb-0 position-relative z-3" />
                <Section8 />
            </Layout>
        </>
    );
}
