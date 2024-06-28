"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CardAppart from "../appart/card-appart";

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

export default function Section2() {
    const router = useRouter();
    const [isProfil, setIsProfil] = useState(false);
    const [apparts, setapparts] = useState<AppartsProps[]>([]);

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
            <section className="p-2 font-satoshi flex flex-col gap-10">
                <div className="w-full flex justify-center text-center text-[12px] font-bold gap-1">
                    <div className="w-full flex flex-col items-center bg-[#F4F3EB] p-4 rounded-2xl gap-8">
                        <img src="images/pink_square.png" alt="logo" className="w-10 h-10" />
                        <p>
                            Annulation gratuite
                            <br />
                            jusqu&apos;à la dernière minute
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-center bg-[#F4F3EB] p-4 rounded-2xl gap-8">
                        <img src="images/green_square.png" alt="logo" className="w-10 h-10" />
                        <p>
                            Paiement en ligne
                            <br />
                            pour une discrétion totale
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="text-center">
                        <h2 className="text-[24px]">
                            Nos <span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">chambres</span> vous attendent !
                        </h2>
                        <p className="text-[16px] px-8">Faites une pause des réunions Zoom et des cris d&apos;enfants ?</p>
                    </div>
                    <div className="flex overflow-x-auto whitespace-nowrap w-full">
                            {apparts.map((apparts, index) => (
                                <CardAppart key={index} {...apparts} isProfil={isProfil} />
                            ))}
                    </div>
                    <div className="w-full flex justify-center text-secondary-200 text-[14px]">
                        <a className="bg-secondary-300 p-2 rounded-full cursor-pointer" href="/room">
                            En savoir plus
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
