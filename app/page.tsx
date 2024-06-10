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

interface Time {
    "10-12": boolean;
    "12-14": boolean;
    "14-16": boolean;
    "16-18": boolean;
    "18-20": boolean;
    "20-22": boolean;
}

interface Localisation {
    address: string;
    complementary_address: string;
    city: string;
    zip_code: number;
    country: string;
}

interface AppartsProps {
    title: string;
    description: string;
    price: number;
    time: Time;
    localisation: Localisation;
    hote: string;
    people_number: number;
    room_number: number;
    equipements: Equipements;
    accessories: Accessories;
}

export default function Home() {
    const [apparts, setapparts] = useState<AppartsProps[]>([]);
    //http://localhost:5001
    //https://pacific-reaches-55510-1cc818501846.herokuapp.com
    const getData = async () => {
        const response = await fetch("http://localhost:5001/apparts");
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
