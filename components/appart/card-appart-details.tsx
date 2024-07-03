"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import CardComment2 from "../commentary/card-comment2";
import CardShop from "../shop/card-shop";

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
                const response = await fetch(`http://localhost:5001/apparts/${id}`);
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
                const response = await fetch(`http://localhost:5001/users/${userId}`);
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
            <div className="flex flex-col gap-8 p-2 font-satoshi text-[13px] lg:p-8">
                <img className="rounded-2xl lg:w-full lg:h-[630px]" src={data.images[0]} alt="image de l'appartement" />
                <div className="flex flex-col gap-2 mt-10 lg:hidden">
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
                <div className="hidden lg:flex lg:w-full h-full lg:items-center lg:p-20">
                    <div className="flex flex-col gap-2 w-full h-full justify-center items-center">
                        <div className="border border-solid border-primary p-8 flex flex-col gap-4 rounded-2xl">
                            <p className="font-bold text-[16px]">/ Description du logement</p>
                            <p>
                                Ce charmant appartement fonctionnel disposant d&apos;un balcon donnant côté cour est parfait pour découvrir Paris.
                                Dans un quartier animé (nombreux bars proches du canal) et avec de nombreux commerces, l&apos;appartement est pourtant
                                parfaitement au calme. Idéalement situé, à deux pas du canal, du parc de la Villette. Dans un quartier animé (nombreux
                                bars proches du canal) et avec de nombreux.
                            </p>
                        </div>
                        <div className="bg-[#F4F3EB] p-8 rounded-2xl flex flex-col gap-4 w-full h-full text-[14px]">
                            <p className="text-[24px] font-bold">/ Votre hôte</p>
                            <div className="w-full flex justify-start items-center gap-4">
                                <img className="w-10 h-10 rounded-full" src={users?.pic} alt="photo du profil" />
                                <div>
                                    <p className="font-bold text-[22px]">{data.hote}</p>
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
                    <CardShop id={id} />
                </div>
                <div className="lg:bg-primary lg:rounded-2xl lg:flex">
                    <div className="flex flex-col bg-primary text-secondary-200 rounded-2xl p-4 gap-4 mt-10 lg:bg-transparent lg:w-1/2 lg:p-14 lg:mt-0">
                        <h2 className="text-[22px] lg:text-[32px]">
                            La map pour retrouver le <span className="bg-secondary-300 text-secondary-200 rotate-3 inline-block">chemin</span> de vos
                            désirs !
                        </h2>
                        <p className="opacity-75 lg:text-[16px]">
                            Ce charmant appartement fonctionnel disposant d&apos;un balcon donnant côté cour est parfait pour découvrir Paris. Dans un
                            quartier animé (nombreux bars proches du canal) et avec de nombreux commerces, l&apos;appartement est pourtant
                            parfaitement au calme.
                        </p>
                        <p className="text-[16px] lg:text-[20px]">
                            {data.localisation.address} {data.localisation.zip_code} {data.localisation.city}
                        </p>
                        <img src="/images/map.png" alt="photo de la map du quartier" className="lg:hidden" />
                    </div>
                    <img className="hidden lg:block lg:p-8 lg:w-1/2" src="/images/map_desk.png" alt="photo de la map du quartier" />
                </div>
                <div className="lg:p-20">
                    <div className="w-full h-full p-4 flex flex-col gap-1 rounded-2xl mb-10 lg:bg-[#F4F3EB] lg:mb-[-40px]">
                        <p className="text-[20px] my-10 lg:text-[36px]">
                            Du chaos familial au <span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">paradis</span>{" "}
                            romantique.
                            <span className="text-[14px] lg:text-[36px]">
                                <br></br>Changer les couches pour des massages en duo !
                            </span>
                        </p>
                        <div className=" flex flex-col gap-1 lg:flex-row lg:justify-center lg:items-center lg:gap-4">{comments}</div>
                    </div>
                </div>
                <div className="bg-transparent backdrop-blur-lg fixed flex justify-center items-center p-8 w-full bottom-0 left-0 lg:hidden">
                    <button onClick={handleClick} className="bg-secondary-300 p-4 text-secondary-200 rounded-full">
                        Pré-réserver en vitfesse
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
