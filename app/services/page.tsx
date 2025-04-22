import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/services/Section1";
import Section8 from "@/components/sections/home/Section8";
import PageHeader from "@/components/sections/PageHeader";
import Pagination from "@/components/elements/Pagination";
import Section4 from "@/components/sections/home/Section4";
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader title="Our Services" current_page="Our Services" />
                <Section1 />
                <Pagination classList="" />
                <Section4 bg="bg-light-2" />
                <Section8 />
            </Layout>
        </>
    );
}
