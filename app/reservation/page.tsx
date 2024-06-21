"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";

export default function Reservation() {
    
    const [isConnected, setIsConnected] = useState(false);

    function handleConnect() {
        if (sessionStorage.getItem("user")) {
            setIsConnected(true);
        }
    }

    useEffect(() => {
        handleConnect();
    }, []);

    return (
        <>
            <Navbar />
            <section className="w-full h-screen bg-primary text-secondary-200 flex flex-col justify-start items-center gap-6 ">
                <p>Pas encore de réservation ? Il est temps d&apos;y aller !</p>
                <div>{isConnected ? <a href="/room" className="bg-secondary-100 px-4 py-2 rounded-full">Je réserve vitfesse</a> : <a href="/connect" className="bg-secondary-100 px-4 py-2 rounded-full">Connectez-vous</a>}</div>
            </section>
            <Footer />
        </>
    );
}