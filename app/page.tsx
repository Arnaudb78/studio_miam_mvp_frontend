"use client";

import Section1 from "@/components/home/section1";
import Navbar from "../components/navbar";
import Footer from "@/components/footer";
import Section2 from "@/components/home/section2";
import Section3 from "@/components/home/section3";
import Section4 from "@/components/home/section4";
import Section5 from "@/components/home/section5";
import Section6 from "@/components/home/section6";

export default function Home() {

    return (
        <div className="flex flex-col gap-8 ">
            <Navbar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Footer />
        </div>
    );
}
