"use client";

import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CardAppart from "@/components/card-appart";

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

export default function Appart() {
    const router = useRouter();
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
        //https://pacific-reaches-55510-1cc818501846.herokuapp.com
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
            <div className="bg-primary w-full h-screen flex flex-col justify-start items-center p-8">
                {!appart ? (
                    <p className=""> Pas encore d&apos;appart ? Créez en un vitfesse!</p>
                ) : (
                    <section className="w-full">
                        {apparts.map((apparts, index) => (
                            <CardAppart key={index} {...apparts} />
                        ))}
                    </section>
                )}
                {!appart ? (
                    <a className="bg-secondary-200 p-4 rounded-full mt-10" href="/create">
                        Créer un appart&apos;
                    </a>
                ) : (
                    <a className="bg-secondary-200 p-4 rounded-full mt-10" href="/create">
                        Créer un appart&apos;
                    </a>
                )}
            </div>
        </>
    );
}
