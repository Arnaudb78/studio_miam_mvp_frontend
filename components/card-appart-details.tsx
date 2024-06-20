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

export default function CardAppartDetails({ id }: DetailsClientProps) {
    const router = useRouter();
    const [appart, setAppart] = useState<AppartsProps | null>(null);

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
        
        <div>
            <Navbar />
            <div className="p-8">
                <h1>{appart.title}</h1>
                <p>{appart.description}</p>
                <p><strong>Prix:</strong> {appart.price} $</p>
                <p><strong>Hôte:</strong> {appart.hote}</p>
                <p><strong>Nombre de personnes:</strong> {appart.people_number}</p>
                <p><strong>Type:</strong> {appart.type}</p>
                <p><strong>Nombre de chambres:</strong> {appart.room_number}</p>

                <div>
                    <h2>Localisation</h2>
                    <p><strong>Adresse:</strong> {appart.localisation.address}</p>
                    <p><strong>Adresse complémentaire:</strong> {appart.localisation.complementary_address}</p>
                    <p><strong>Ville:</strong> {appart.localisation.city}</p>
                    <p><strong>Code postal:</strong> {appart.localisation.zip_code}</p>
                    <p><strong>Pays:</strong> {appart.localisation.country}</p>
                </div>

                <div>
                    <h2>Equipements</h2>
                    <p><strong>WiFi:</strong> {appart.equipements.wifi ? "Oui" : "Non"}</p>
                    <p><strong>TV:</strong> {appart.equipements.tv ? "Oui" : "Non"}</p>
                    <p><strong>Climatisation:</strong> {appart.equipements.clim ? "Oui" : "Non"}</p>
                    <p><strong>Parking:</strong> {appart.equipements.parking ? "Oui" : "Non"}</p>
                    <p><strong>Petit déjeuner:</strong> {appart.equipements.breakfast ? "Oui" : "Non"}</p>
                </div>

                <div>
                    <h2>Accessoires</h2>
                    <p><strong>Chaîne:</strong> {appart.accessories.chain ? "Oui" : "Non"}</p>
                    <p><strong>Cage:</strong> {appart.accessories.cage ? "Oui" : "Non"}</p>
                    <p><strong>Jacuzzi:</strong> {appart.accessories.jacuzzi ? "Oui" : "Non"}</p>
                </div>

                <div>
                    <h2>Heures disponibles</h2>
                    <p><strong>10-12:</strong> {appart.time["10-12"] ? "Disponible" : "Non disponible"}</p>
                    <p><strong>12-14:</strong> {appart.time["12-14"] ? "Disponible" : "Non disponible"}</p>
                    <p><strong>14-16:</strong> {appart.time["14-16"] ? "Disponible" : "Non disponible"}</p>
                    <p><strong>16-18:</strong> {appart.time["16-18"] ? "Disponible" : "Non disponible"}</p>
                    <p><strong>18-20:</strong> {appart.time["18-20"] ? "Disponible" : "Non disponible"}</p>
                    <p><strong>20-22:</strong> {appart.time["20-22"] ? "Disponible" : "Non disponible"}</p>
                </div>
                <button onClick={handleClick} className="text-secondary-200 bg-secondary-100 py-2 px-4 rounded-full cursor-pointer">Je réserve en vitfesse</button>
            </div>
        </div>
    );
}
