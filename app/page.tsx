"use client";

import Navbar from "../components/navbar";
import Card from "@/components/card";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";

interface Equipements {
    wifi: boolean;
    tv: boolean;
    clim: boolean;
    parking: boolean;
    breakfast: boolean;
}

interface Accessories {
    chain: boolean;
    cage: boolean;
    jacuzzi: boolean;
}

interface Location {
    title: string;
    description: string;
    price: number;
    date: string;
    localisation: string;
    hote: string;
    people_number: number;
    room_number: number;
    equipements: Equipements;
    accessories: Accessories;
}

export default function Home() {
    const [apparts, setapparts] = useState<Location[]>([]);
    //http://localhost:5001
    //https://pacific-reaches-55510-1cc818501846.herokuapp.com
    const getData = async () => {
        const response = await fetch("https://pacific-reaches-55510-1cc818501846.herokuapp.com/apparts");
        const data = await response.json();
        setapparts(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Navbar />
            <main className="h-screen w-screen">
                <section>
                    {apparts.map((apparts, index) => (
                        <Card key={index} {...apparts} />
                    ))}
                </section>
                <Footer />
            </main>
        </>
    );
}
