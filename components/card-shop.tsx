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
}

interface DetailsClientProps {
    id: string;
}

export default function CardShop({ id }: DetailsClientProps) {
    const router = useRouter();
    const [appart, setAppart] = useState<AppartsProps | null>(null);
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
    const [numberOfPeople, setNumberOfPeople] = useState<number>(1);

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

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(event.target.value);
    };

    const handleTimeSlotChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTimeSlot(event.target.value as TimeSlot);
    };

    const handlePeopleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumberOfPeople(parseInt(event.target.value));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Date:", selectedDate);
        console.log("Time Slot:", selectedTimeSlot);
        console.log("Number of People:", numberOfPeople);
        // router.push(`/payment/${id}`);
    };

    if (!appart) {
        return (
            <>
                <Navbar/>
                <div className="flex justify-center items-center h-screen">
                    <div className="text-center">
                        <p className="text-2xl font-bold mb-4">Chargement...</p>
                    </div>
                </div>
            </>
        );
    }

    const { title, description, price, time, localisation, hote, people_number, type, room_number, equipements, accessories } = appart;
    const timeSlots: TimeSlot[] = ["10h - 12h", "12h - 14h", "14h - 16h", "16h - 18h", "18h - 20h", "20h - 22h"];

    return (
        <div className="bg-primary w-full min-h-screen">
            <Navbar />
            <div className="mx-auto px-4 flex flex-col gap-6">
                <h3 className="text-3xl font-bold text-secondary-200 text-center">Plus qu'une étape et l'appart est à toi !</h3>
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h4 className="text-2xl font-bold mb-2">{title}</h4>
                    <p className="text-gray-700 mb-4">{description}</p>
                    <p className="text-lg mb-2"><strong>Prix:</strong> {price}€ / nuit</p>
                    <p className="text-lg mb-2"><strong>Adresse:</strong> {localisation.address}, {localisation.city}, {localisation.zip_code}, {localisation.country}</p>
                    <p className="text-lg mb-2"><strong>Hôte:</strong> {hote}</p>
                    <p className="text-lg mb-2"><strong>Nombre de personnes:</strong> {people_number}</p>
                    <p className="text-lg mb-2"><strong>Type:</strong> {type}</p>
                    <p className="text-lg mb-2"><strong>Nombre de chambres:</strong> {room_number}</p>
                </div>
                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h4 className="text-xl font-bold mb-4">Réservez votre créneau</h4>
                    <div className="mb-4">
                        <label htmlFor="date" className="block text-lg font-medium text-gray-700">Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="timeSlot" className="block text-lg font-medium text-gray-700">Créneau horaire</label>
                        <select
                            id="timeSlot"
                            name="timeSlot"
                            value={selectedTimeSlot || ""}
                            onChange={handleTimeSlotChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                            required
                        >
                            <option value="">Sélectionner un créneau</option>
                            {timeSlots.map((slot) => (
                                <option key={slot} value={slot}>{slot}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="numberOfPeople" className="block text-lg font-medium text-gray-700">Nombre de personnes</label>
                        <input
                            type="number"
                            id="numberOfPeople"
                            name="numberOfPeople"
                            value={numberOfPeople}
                            onChange={handlePeopleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                            min="1"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Procéder au paiement
                    </button>
                </form>
            </div>
        </div>
    );
}
