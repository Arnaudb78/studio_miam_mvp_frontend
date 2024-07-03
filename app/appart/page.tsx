"use client";

import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CardAppart from "@/components/appart/card-appart";
import Footer from "@/components/footer";

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

export default function Appart() {
    const router = useRouter();
    const [isProfil, setIsProfil] = useState(true);
    const [apparts, setapparts] = useState<AppartsProps[]>([]);
    const [appart, setAppart] = useState(false);

    useEffect(() => {
        const userSession = sessionStorage.getItem("user");
        if (userSession) {
            const userObject = JSON.parse(userSession);
            console.log(userObject.user);
            console.log(userObject.user._id);

            if (userObject && userObject.user) {
                checkIfUserHaveAppart(userObject.user);
            }
        } else {
            router.push("/connect");
        }
    }, []);

    const checkIfUserHaveAppart = async (user: object) => {
        //http://localhost:5001
        //https://pacific-reaches-55510-1cc818501846.herokuapp.com
        const response = await fetch(`https://pacific-reaches-55510-1cc818501846.herokuapp.com/apparts/userAppart`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        const data = await response.json();
        if (response.ok && data.length > 0) {
            setAppart(true);
            setapparts(data);
            console.log(data[0].localisation);
        }
    };

    return (
        <>
            <Navbar />
            <div className="bg-secondary-200 w-full h-full flex flex-col justify-start items-center p-4 gap-4 font-satoshi lg:hidden">
                {!appart ? (
                    <p className=""> Pas encore d&apos;appart ? Créez en un vitfesse!</p>
                ) : (
                    <section className="w-full flex flex-col gap-8">
                        <div className="flex justify-between items-center">
                            <p className="text-[24px]">Voici vos <span className="bg-secondary-300 text-secondary-200 rotate-3 inline-block">annonces</span></p>
                            <div className="border border-secondary-300 rounded-full p-2 text-[10px] flex items-center gap-2">
                                <svg className="bg-secondary-300 w-3 h-3 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#FFFFFF" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                                <a className="" href="/create">
                                Nouvelle annonce
                                </a>
                            </div>
                        </div>
                       <div className="bg-[#F4F3EB] p-8 rounded-2xl flex flex-col gap-2">
                        {apparts.map((apparts, index) => (
                                <CardAppart key={index} {...apparts} isProfil={isProfil} />
                            ))}
                       </div>
                    </section>
                )}
                {!appart ? (
                    <a className="bg-secondary-300 text-secondary-200 p-4 rounded-full" href="/create">
                        Créer un appart&apos;
                    </a>
                ) : (
                    null
                )}
            </div>
            <div className="hidden lg:block lg:p-28">
                <section className="w-full flex flex-col gap-8 lg:bg-secondary-400 p-8">
                        <div className="flex justify-between items-center">
                            <p className="text-[36px]">Voici vos <span className="bg-secondary-300 text-secondary-200 rotate-3 inline-block">annonces</span></p>
                            <div className="border border-secondary-300 rounded-full p-2 text-[20px] flex items-center gap-2">
                                <svg className="bg-secondary-300 w-5 h-5 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#FFFFFF" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                                <a className="text-secondary-300" href="/create">
                                Nouvelle annonce
                                </a>
                            </div>
                        </div>
                       <div className="w-full p-8 rounded-2xl">
                            <div className="w-1/3">
                            {apparts.map((apparts, index) => (
                                    <CardAppart key={index} {...apparts} isProfil={isProfil} />
                                ))}
                            </div>
                       </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
