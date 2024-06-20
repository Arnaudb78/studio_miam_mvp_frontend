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
    _id: string;
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

interface DetailsClientProps {
    id: string;
}

export default function CardShop({ id }: DetailsClientProps) {
    const router = useRouter();
    const [appart, setAppart] = useState<AppartsProps | null>(null);

    useEffect(() => {
        const session = sessionStorage.getItem("user");
        if (!session) {
            router.push("/connect");
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const response = await fetch(`http://localhost:5001/apparts/${id}`);
                const data = await response.json();
                setAppart(data);
            }
        };
        fetchData();
    }, [id]);

    const handleClick = () => {
        router.push(`/reservation/${id}`);
    };

    if (!appart) {
        return (
            <>
                <Navbar/>
                <div>Loading...</div>
            </>
    );
    }

    return (
        
        <>
            <Navbar />
            <h3>Plus qu'une étape et l'appart est à toi !</h3>
            <p>{appart._id}</p>
        </>  
    );
}
