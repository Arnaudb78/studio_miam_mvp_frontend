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
    const [locations, setLocations] = useState<Location[]>([]);
    //https://pacific-reaches-55510-1cc818501846.herokuapp.com
    const getData = async () => {
        const response = await fetch("http://localhost:5001/locations");
        const data = await response.json();
        setLocations(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Navbar />
            <main className="h-screen w-screen">
                <section>
                    {locations.map((location, index) => (
                        <Card key={index} {...location} />
                    ))}
                </section>
                <Footer />
            </main>
        </>
    );
}
