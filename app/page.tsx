import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/home/Section1";
import Section2 from "@/components/sections/home/Section2";
import Section3 from "@/components/sections/home/Section3";
import Section4 from "@/components/sections/home/Section4";
import Section5 from "@/components/sections/home/Section5";
import Section6 from "@/components/sections/home/Section6";
import Section7 from "@/components/sections/home/Section7";
import Section8 from "@/components/sections/home/Section8";
export default function Home() {
    return (
        <>
            <Layout>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 bg="" />
                <Section5 />
                <Section6 />
                {/* <Section7 bg_section="bg-light-2" bg_card="bg-white" classList="" /> */}
                <Section8 />
            </Layout>
        </>
    );
}
