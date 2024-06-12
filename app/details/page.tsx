"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";

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
    type: string;
    room_number: number;
    equipements: Equipements;
    accessories: Accessories;
}

export default function Details() {
    const router = useRouter();
    // const { id } = router.query;
    const [appart, setAppart] = useState<AppartsProps | null>(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         if (id) {
    //             const response = await fetch(`http://localhost:5001/apparts/${id}`);
    //             const data = await response.json();
    //             setAppart(data);
    //         }
    //     };
    //     fetchData();
    // }, [id]);

    // if (!appart) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div>
            <Navbar />
            {/* <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">{appart.title}</h1>
                <p className="mb-2">
                    <strong>Description:</strong> {appart.description}
                </p>
                <p className="mb-2">
                    <strong>Price:</strong> {appart.price} $
                </p>
                <p className="mb-2">
                    <strong>Host:</strong> {appart.hote}
                </p>
                <p className="mb-2">
                    <strong>Location:</strong> {appart.localisation.address}, {appart.localisation.city}, {appart.localisation.zip_code},{" "}
                    {appart.localisation.country}
                </p>
                <p className="mb-2">
                    <strong>Type:</strong> {appart.type}
                </p>
                <p className="mb-2">
                    <strong>Room Number:</strong> {appart.room_number}
                </p>
                <p className="mb-2">
                    <strong>People Number:</strong> {appart.people_number}
                </p>
                <p className="mb-2">
                    <strong>Equipements:</strong> {JSON.stringify(appart.equipements)}
                </p>
                <p className="mb-2">
                    <strong>Accessories:</strong> {JSON.stringify(appart.accessories)}
                </p>
                <p className="mb-2">
                    <strong>Time:</strong> {JSON.stringify(appart.time)}
                </p>
            </div> */}
        </div>
    );
}
