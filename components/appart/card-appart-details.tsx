"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "../navbar";

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
    const searchParams = useSearchParams();
    const type = searchParams.get("type");
    const [data, setData] = useState<AppartsProps | null>(null);

    useEffect(() => {
        fetch(`https://pacific-reaches-55510-1cc818501846.herokuapp.com/apparts/${id}`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, [id]);

    const handleClick = () => {
        router.push(`/reservation/${id}`);
    };

    if (!data) {
        return (
            <>
                <Navbar />
                <div>Loading...</div>
            </>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="p-8">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <p>
                    <strong>Prix:</strong> {data.price} $
                </p>
                <p>
                    <strong>Hôte:</strong> {data.hote}
                </p>
                <p>
                    <strong>Nombre de personnes:</strong> {data.people_number}
                </p>
                <p>
                    <strong>Type:</strong> {data.type}
                </p>
                <p>
                    <strong>Nombre de chambres:</strong> {data.room_number}
                </p>

                <div>
                    <h2>Localisation</h2>
                    <p>
                        <strong>Adresse:</strong> {data.localisation.address}
                    </p>
                    <p>
                        <strong>Adresse complémentaire:</strong> {data.localisation.complementary_address}
                    </p>
                    <p>
                        <strong>Ville:</strong> {data.localisation.city}
                    </p>
                    <p>
                        <strong>Code postal:</strong> {data.localisation.zip_code}
                    </p>
                    <p>
                        <strong>Pays:</strong> {data.localisation.country}
                    </p>
                </div>

                <div>
                    <h2>Equipements</h2>
                    <p>
                        <strong>WiFi:</strong> {data.equipements.wifi ? "Oui" : "Non"}
                    </p>
                    <p>
                        <strong>TV:</strong> {data.equipements.tv ? "Oui" : "Non"}
                    </p>
                    <p>
                        <strong>Climatisation:</strong> {data.equipements.clim ? "Oui" : "Non"}
                    </p>
                    <p>
                        <strong>Parking:</strong> {data.equipements.parking ? "Oui" : "Non"}
                    </p>
                    <p>
                        <strong>Petit déjeuner:</strong> {data.equipements.breakfast ? "Oui" : "Non"}
                    </p>
                </div>

                <div>
                    <h2>Accessoires</h2>
                    <p>
                        <strong>Chaîne:</strong> {data.accessories.chain ? "Oui" : "Non"}
                    </p>
                    <p>
                        <strong>Cage:</strong> {data.accessories.cage ? "Oui" : "Non"}
                    </p>
                    <p>
                        <strong>Jacuzzi:</strong> {data.accessories.jacuzzi ? "Oui" : "Non"}
                    </p>
                </div>

                <div>
                    <h2>Heures disponibles</h2>
                    <p>
                        <strong>10-12:</strong> {data.time["10-12"] ? "Disponible" : "Non disponible"}
                    </p>
                    <p>
                        <strong>12-14:</strong> {data.time["12-14"] ? "Disponible" : "Non disponible"}
                    </p>
                    <p>
                        <strong>14-16:</strong> {data.time["14-16"] ? "Disponible" : "Non disponible"}
                    </p>
                    <p>
                        <strong>16-18:</strong> {data.time["16-18"] ? "Disponible" : "Non disponible"}
                    </p>
                    <p>
                        <strong>18-20:</strong> {data.time["18-20"] ? "Disponible" : "Non disponible"}
                    </p>
                    <p>
                        <strong>20-22:</strong> {data.time["20-22"] ? "Disponible" : "Non disponible"}
                    </p>
                </div>
                <button onClick={handleClick} className="text-secondary-200 bg-secondary-100 py-2 px-4 rounded-full cursor-pointer">
                    Je réserve en vitfesse
                </button>
            </div>
        </div>
    );
}
