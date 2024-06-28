"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import CardComment from "../commentary/card-comment";
import CardComment2 from "../commentary/card-comment2";

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
    user_id: string;
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

interface UsersProps {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    pic: string;
}

export default function CardAppartDetails({ id }: DetailsClientProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const type = searchParams.get("type");
    const [data, setData] = useState<AppartsProps | null>(null);
    const [users, setUsers] = useState<UsersProps | null>(null);

    useEffect(() => {
        const fetchAppartDetails = async () => {
            try {
                const response = await fetch(`https://pacific-reaches-55510-1cc818501846.herokuapp.com/apparts/${id}`);
                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des détails de l'appartement");
                }
                const data = await response.json();
                setData(data);
                if (data && data.user_id) {
                    await fetchUserInfo(data.user_id);
                }
            } catch (error) {
                console.error("Erreur:", error);
            }
        };

        const fetchUserInfo = async (userId: string) => {
            try {
                const response = await fetch(`https://pacific-reaches-55510-1cc818501846.herokuapp.com/users/${userId}`);
                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des informations de l'utilisateur");
                }
                const userData = await response.json();
                setUsers(userData);
            } catch (error) {
                console.error("Erreur:", error);
            }
        };

        fetchAppartDetails();
    }, [id]);

    const handleClick = () => {
        router.push(`/reservation/${id}`);
    };

    const commentary = [
        {
            pic: "/images/cha.png",
            name: "Charlotte",
            description:
                "Nous avons réservé plusieurs fois sur cette application et nous avons toujours eu une super expériences. Les chambres sont propres et le système de boîte à clé.",
            date: "10h20 - 14 / 06 / 2024",
        },
        {
            pic: "/images/enzo.png",
            name: "Enzo",
            description:
                "Nous avons réservé plusieurs fois sur cette application et nous avons toujours eu une super expériences. Les chambres sont propres et le système de boîte à clé.",
            date: "12h30 - 15 / 06 / 2024",
        },
        {
            pic: "/images/louison.png",
            name: "Louison",
            description:
                "Nous avons réservé plusieurs fois sur cette application et nous avons toujours eu une super expériences. Les chambres sont propres et le système de boîte à clé.",
            date: "18h20 - 16 / 06 / 2024",
        },
    ];

    const comments = commentary.map((comment, index) => {
        return <CardComment2 key={index} pic={comment.pic} name={comment.name} description={comment.description} date={comment.date} />;
    });

    if (!data) {
        return (
            <>
                <Navbar />
                <div>Loading...</div>
                <Footer />
            </>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="flex flex-col gap-8 p-2 font-satoshi text-[13px]">
                <img className="rounded-2xl" src={data.images[0]} alt="image de l'appartement" />
                <div className="flex flex-col gap-2 mt-10">
                    <div className="border border-solid border-primary p-4 flex flex-col gap-4 rounded-2xl">
                        <p className="font-bold text-[16px]">/ Description du logement</p>
                        <p>{data.description}</p>
                    </div>
                    <div className="bg-[#F4F3EB] p-4 rounded-2xl flex flex-col gap-4">
                        <p className="text-[16px] font-bold">/ Votre hôte</p>
                        <div className="w-full flex justify-start items-center gap-4">
                            <img className="w-10 h-10 rounded-full" src={users?.pic} alt="photo du profil" />
                            <div>
                                <p>{data.hote}</p>
                                <p>sur la plateforme depuis 2019</p>
                            </div>
                        </div>
                        <div>{data.description}</div>
                        <div className="flex flex-col gap-2">
                            <p>
                                <span className="font-bold">Langues : </span>Français, Anglais, Espagnols
                            </p>
                            <p>
                                <span className="font-bold">Temps de réponse : </span>15 min en moyenne
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-primary text-secondary-200 rounded-2xl p-4 gap-4 mt-10">
                    <h2 className="text-[22px]">
                        La map pour retrouver le <span className="bg-secondary-300 text-secondary-200 rotate-3 inline-block">chemin</span> de vos
                        désirs !
                    </h2>
                    <p className="opacity-75">
                        Ce charmant appartement fonctionnel disposant d&apos;un balcon donnant côté cour est parfait pour découvrir Paris. Dans un
                        quartier animé (nombreux bars proches du canal) et avec de nombreux commerces, l&apos;appartement est pourtant parfaitement au
                        calme.
                    </p>
                    <p className="text-[16px]">
                        {data.localisation.address} {data.localisation.zip_code} {data.localisation.city}
                    </p>
                    <img src="/images/map.png" alt="photo de la map du quartier" />
                </div>
                <div className="w-full h-full bg-[#F4F3EB] p-4 flex flex-col gap-1 rounded-2xl">
                    <p className="text-[20px] my-10">
                        Du chaos familial au <span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">paradis</span> romantique,
                        découvrez ce qu&apos;ils en disent !
                    </p>
                    {comments}
                </div>
                <div className="bg-transparent backdrop-blur-lg fixed flex justify-center items-center p-8 w-full bottom-0 left-0">
                    <button onClick={handleClick} className="bg-secondary-300 p-4 text-secondary-200 rounded-full">
                        Pré-réserver en vitfesse
                    </button>
                </div>
                {/* <h1>{data.title}</h1>
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
                </button> */}
            </div>
            <Footer />
        </div>
    );
}
