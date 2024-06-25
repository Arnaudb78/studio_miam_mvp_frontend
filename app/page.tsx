"use client";

import Section1 from "@/components/home/section1";
import Navbar from "../components/navbar";
import Footer from "@/components/footer";
import Section2 from "@/components/home/section2";

export default function Home() {

    return (
        <>
            <Navbar />
               <Section1 />
               <Section2 />
            <Footer />
        </>
    );
}
