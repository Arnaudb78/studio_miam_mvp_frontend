"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "../footer";
import Extra from "./extra";

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

type TimeSlot = "10h - 12h" | "12h - 14h" | "14h - 16h" | "16h - 18h" | "18h - 20h" | "20h - 22h";

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
    images: string[];
}

interface DetailsClientProps {
    id: string;
}

export default function CardShop({ id }: DetailsClientProps) {
    const router = useRouter();
    const [appart, setAppart] = useState<AppartsProps | null>(null);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [timeArrival, setTimeArrival] = useState<string | null>(null);
    const [timeDeparture, setTimeDeparture] = useState<string | null>(null);

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

    const extras = [
        {
            name: "Champagne",
            price: 30,
            icon: "/images/champagne.png",
        },
        {
            name: "Bouquet de fleurs",
            price: 50,
            icon: "/images/bouquet.png",
        },
        {
            name: "Pétales de roses",
            price: 10,
            icon: "/images/rose.png",
        },
        {
            name: "Petit déjeuner",
            price: 13,
            icon: "/images/coffee.png",
        },
        {
            name: "Objets surprises",
            price: 25,
            icon: "/images/cadeau.png",
        },
        {
            name: "Huile de massage",
            price: 15,
            icon: "/images/oil.png",
        },
    ];

    const extrasList = extras.map((extra, index) => {
        return <Extra key={index} name={extra.name} price={extra.price} icon={extra.icon} />;
    });

    const handlePayement = () => {
        if (!selectedDate || !timeArrival || !timeDeparture) {
            alert("Veuillez sélectionner une date et un créneau horaire");
            return;
        }
        router.push(`/payment/${id}`);
    };

    const handleDateChange = (e: any) => {
        setSelectedDate(e.target.value);
    };

    const handleTimeArrivalChange = (e: any) => {
        setTimeArrival(e.target.value);
    };

    const handleTimeDepartureChange = (e: any) => {
        setTimeDeparture(e.target.value);
    };

    if (!appart) {
        return (
            <>
                <Navbar />
                <div className="flex justify-center items-center h-screen">
                    <div className="text-center">
                        <p className="text-2xl font-bold mb-4">Chargement...</p>
                    </div>
                </div>
            </>
        );
    }

    const { title, price, images, localisation } = appart;

    return (
        <>
            <div className="lg:hidden">
                <Navbar />
            </div>
            <section className="p-2 w-full h-full flex flex-col gap-8 font-satoshi">
                <div className="w-full h-full lg:hidden ">
                    <div className="w-full flex justify-start items-center gap-2 p-4">
                        <svg className="w-6 h-6 bg-[#F4F3EB] p-1 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                        </svg>
                        <h2 className="text-[20px] font-bold">Tentez par des petits extras ?</h2>
                    </div>
                    <div className="w-full h-full flex flex-col gap-2">{extrasList}</div>
                </div>
                <div className="w-full h-full bg-[#F4F3EB] p-4 rounded-2xl flex flex-col gap-4 lg:w-4/5 lg:h-auto lg:p-8">
                    <div className="w-full flex flex-col gap-4">
                        <h2 className="font-bold lg:text-[20px]">
                            {title} - {localisation.city}
                        </h2>
                        <p className="lg:text-[16px]">
                            A partir de <span className="font-bold">{price}€</span>
                        </p>
                    </div>
                    <div className="w-full h-full flex border border-primary border-solid rounded-xl">
                        <div className="w-1/3 h-full flex flex-col justify-center items-center gap-1 p-4 border-solid border-primary border-r-0">
                            <p className="font-bold">Date</p>
                            <input
                                onChange={handleDateChange}
                                type="date"
                                name="arrivalDate"
                                id="arrivalDate"
                                className="w-full border bg-transparent"
                            />
                        </div>
                        <div className="w-1/3 h-full flex flex-col justify-center items-center gap-1 p-4 border-r border-l border-solid border-primary border-r-1">
                            <p className="font-bold">Arrivée</p>
                            <input
                                onChange={handleTimeArrivalChange}
                                type="time"
                                name="arrivalTime"
                                id="arrivalTime"
                                className="w-full border bg-transparent"
                            />
                        </div>
                        <div className="w-1/3 h-full flex flex-col justify-center items-center gap-1 p-4">
                            <p className="font-bold">Départ</p>
                            <input
                                onChange={handleTimeDepartureChange}
                                type="time"
                                name="departureTime"
                                id="departureTime"
                                className="w-full border bg-transparent"
                            />
                        </div>
                    </div>
                    <img className="rounded-2xl" src={images[0]} alt={`image de ${title}`} />
                    <div className="w-full flex h-[0.5px] bg-primary lg:hidden"></div>
                    <button
                        onClick={handlePayement}
                        className="w-full p-2 bg-secondary-300 text-secondary-200 rounded-2xl lg:hidden lg:p-4 lg:rounded-">
                        Payer {price}€
                    </button>
                    <button
                        onClick={handlePayement}
                        className="hidden lg:w-full lg:block bg-secondary-300 text-secondary-200 rounded-2xl lg:p-4 lg:rounded-lg lg:text-[20px]">
                        Continuer
                    </button>
                </div>
            </section>
            <div className="lg:hidden">
                <Footer />
            </div>
        </>
    );
}
