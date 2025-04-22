import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/about/Section1";
import Section2 from "@/components/sections/about/Section2";
import Section2Home from "@/components/sections/home/Section2";
import Section3 from "@/components/sections/home/Section3";
import Section8 from "@/components/sections/home/Section8";
import PageHeader from "@/components/sections/PageHeader";
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader title="About Us" current_page="about us" />
                <Section1 />
                <Section3 />
                <Section2Home />
                <Section2 />
                <Section8 />
            </Layout>
        </>
    );
}
