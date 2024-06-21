"use client";

import Navbar from "../components/navbar";
import Footer from "@/components/footer";

export default function Home() {

    return (
        <>
            <Navbar />
                <section className="W-full h-screen bg-primary text-secondary-200">
                    <p>Bienvenu sur Vitfesse.</p>
                </section>
            <Footer />
        </>
    );
}
