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
        const response = await fetch("http://localhost:5001/apparts");
        const data = await response.json();
        setapparts(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <section className="p-2 font-satoshi flex flex-col gap-10 lg:px-28 lg:gap-20 lg:my-16">
                <div className="w-full flex justify-center text-center text-[12px] font-bold gap-1 lg:gap-8 lg:text-[16px]">
                    <div className="w-full flex flex-col items-center bg-[#F4F3EB] p-4 rounded-2xl gap-8 lg:w-full lg:p-14">
                        <img src="images/pink_square.png" alt="logo" className="w-10 h-10 lg:hidden" />
                        <img src="images/cube_pink_desk.png" alt="logo" className="hidden lg:block" />
                        <p>
                            Annulation gratuite
                            <br />
                            jusqu&apos;à la dernière minute
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-center bg-[#F4F3EB] p-4 rounded-2xl gap-8 lg:w-full lg:p-14">
                        <img src="images/green_square.png" alt="logo" className="w-10 h-10 lg:hidden" />
                        <img src="images/cube_green_desk.png" alt="logo" className="hidden lg:block" />

                        <p>
                            Paiement en ligne
                            <br />
                            pour une discrétion totale
                        </p>
                    </div>
                    <div className="hidden lg:w-full lg:flex lg:flex-col lg:items-center bg-[#F4F3EB] lg:p-14 rounded-2xl gap-8">
                        <img src="images/green_square.png" alt="logo" className="w-10 h-10 lg:hidden" />
                        <img src="images/cube_orange_desk.png" alt="logo" className="hidden lg:block" />

                        <p>
                            Paiement en ligne
                            <br />
                            pour une discrétion totale
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-8 lg:gap-16">
                    <div className="text-center lg:hidden">
                        <h2 className="text-[24px]">
                            Nos <span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">chambres</span> vous attendent !
                        </h2>
                        <p className="text-[16px] px-8">Faites une pause des réunions Zoom et des cris d&apos;enfants ?</p>
                    </div>
                    <div className="hidden lg:flex lg:flex-col lg:w-full lg:justify-center lg:items-center lg:text-[36px]">
                        <p className="px-4">Vous voulez faire une pause des réunions Zoom ?</p>
                        <p className=""><span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">Remplacez</span>  les “Tu es mute” à “Fais plus de bruit !”</p>
                    </div>
                    <div className="flex overflow-x-auto whitespace-nowrap w-full lg:hidden">
                            {apparts.map((apparts, index) => (
                                <CardAppart key={index} {...apparts} isProfil={isProfil} />
                            ))}
                    </div>
                    <div className="hidden lg:flex lg:w-full bg-[url('/images/form_desk.png')]">
                        <div className="w-1/3 flex gap-8">
                            {apparts.map((apparts, index) => (
                                <CardAppart key={index} {...apparts} isProfil={isProfil} />
                            ))}
                        </div>
                    </div>
                    <div className="w-full flex justify-center text-secondary-200 text-[14px] lg:text-[20px]">
                        <a className="bg-secondary-300 p-2 rounded-full cursor-pointer lg:px-8 lg:py-3" href="/room">
                            En voir plus
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
