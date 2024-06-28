"use client";

import CardAppart from "@/components/appart/card-appart";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useRouter } from "next/navigation";
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

export default function Room() {
    const router = useRouter();
    const [isProfil, setIsProfil] = useState(false);
    const [apparts, setapparts] = useState<AppartsProps[]>([]);
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

    const handleClick = () => {
        router.push("/room");
    };

    return (
        <>
            <Navbar />
            <section className="h-full w-full flex flex-col gap-10 bg-secondary-200 font-satoshi mb-10">
                <div className="w-full h-full relative text-[12px] flex flex-col justify-center items-center">
                    <img src="images/bg_room.png" alt="photo femme buvant un café" />
                    <div className="w-[95%] absolute bg-secondary-200 rounded-full top-8 flex justify-between items-center p-2">
                        <div className="flex justify-start w-full gap-2">
                            <svg className="w-6 h-6 bg-primary p-2 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    fill="#FFFFFF"
                                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="Rechercher un appart"
                                className="w-full text-start bg-transparent text-primary font-satoshi"
                            />
                        </div>
                        <button className="bg-secondary-300 py-2 px-4 rounded-full text-secondary-200">Chercher</button>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-center">
                    <h2 className="text-[24px]">
                        Nos <span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">chambres</span> vous attendent !
                    </h2>
                    <p className="font-extralight text-[14px]">
                        Faites une pause des réunions Zoom<br></br>
                        et des cris d'enfants ?{" "}
                    </p>
                </div>
                <div className="flex justify-center items-center gap-4 ">
                    <div className="w-fit bg-gray-100 flex justify-center items-center gap-4 px-4 py-2 rounded-full">
                        <button onClick={handleClick}>Filtrer les annonces</button>
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z" />
                        </svg>
                    </div>
                </div>
                <div className="p-4 flex flex-col gap-4">
                    {apparts.map((apparts, index) => (
                        <CardAppart key={index} {...apparts} isProfil={isProfil} />
                    ))}
                </div>
                <div className="flex justify-center">
                    <button onClick={handleClick} className="bg-secondary-300 py-2 px-4 rounded-full cursor-pointer text-[14px] text-secondary-200">
                        En savoir plus
                    </button>
                </div>
            </section>
            <Footer />
        </>
    );
}
