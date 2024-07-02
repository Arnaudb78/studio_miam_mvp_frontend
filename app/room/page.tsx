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
        const response = await fetch("http://localhost:5001/apparts");
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
            <section className="h-full w-full flex flex-col gap-10 bg-secondary-200 font-satoshi mb-10 lg:p-8">
                <div className="w-full h-full relative text-[12px] flex flex-col justify-center items-center lg:mt-10">
                    <img src="images/bg_room.png" alt="photo femme buvant un café" className="lg:hidden" />
                    <img src="images/bg_room_desk.png" alt="photo femme buvant un café" className="hidden lg:flex" />
                    <div className="w-[95%] absolute bg-secondary-200 rounded-full top-8 flex justify-between items-center p-2 lg:hidden">
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
                        <button onClick={handleClick} className="bg-secondary-300 py-2 px-4 rounded-full text-secondary-200">
                            Chercher
                        </button>
                    </div>
                    <div className="hidden lg:w-2/5 lg:absolute lg:bg-secondary-200 lg:rounded-full lg:bottom-10 lg:left-10 lg:flex lg:p-2 lg:text-[14px]">
                        <div className="flex justify-start w-full gap-2 p-2">
                            <svg className="w-8 h-8 bg-primary p-2 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    fill="#FFFFFF"
                                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="Rechercher un appart"
                                className="w-full text-start bg-transparent text-primary font-satoshi p-2"
                            />
                        </div>
                        <button className="bg-secondary-300 py-4 px-6 rounded-full text-secondary-200 ">Chercher</button>
                    </div>
                    <div className="hidden lg:block lg:absolute lg:backdrop-blur-md lg:top-0 lg:right-0 lg:w-[545px] lg:h-[305px] rounded-2xl"></div>
                </div>
                <div className="flex flex-col gap-2 text-center text-[24px] lg:text-[36px]">
                    <p className="px-4">Vous voulez faire une pause des réunions Zoom ?</p>
                    <p className="text-[16px] lg:hidden">
                        <span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">Remplacez</span> les “Tu es mute” à<br></br> “Fais
                        plus de bruit !”
                    </p>
                    <p className="hidden lg:block lg:text-[36px]">
                        <span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">Remplacez</span> les “Tu es mute” à “Fais plus de
                        bruit !”
                    </p>
                </div>
                <div className="flex justify-center items-center gap-4 ">
                    <div className="w-fit bg-gray-100 flex justify-center items-center gap-4 px-4 py-2 rounded-full border border-solid border-primary lg:hidden">
                        <button onClick={handleClick}>Filtrer les annonces</button>
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z" />
                        </svg>
                    </div>
                    <div className="hidden lg:flex lg:w-full justify-center gap-6 text-[14px]">
                        <button className="border border-solid border-primary py-3 rounded-full w-40 bg-[#f0efee] flex justify-between px-3 items-center cursor-pointer">
                            Heure d&apos;arrivée{" "}
                            <svg className="w-4 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                            </svg>
                        </button>
                        <button className="border border-solid border-primary py-3 rounded-full w-40 bg-[#f0efee] flex justify-between px-3 items-center cursor-pointer">
                            Durée{" "}
                            <svg className="w-4 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                            </svg>
                        </button>
                        <button className="border border-solid border-primary py-3 rounded-full w-40 bg-[#f0efee] flex justify-between px-3 items-center cursor-pointer">
                            Prix{" "}
                            <svg className="w-4 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                            </svg>
                        </button>
                        <button className="border border-solid border-primary py-3 rounded-full w-40 bg-[#f0efee] flex justify-between px-3 items-center cursor-pointer">
                            Nombres d&apos;étoiles{" "}
                            <svg className="w-4 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                            </svg>
                        </button>
                        <button className="border border-solid border-primary py-3 rounded-full w-40 bg-[#f0efee] flex justify-between px-3 items-center cursor-pointer">
                            Equipements{" "}
                            <svg className="w-4 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                            </svg>
                        </button>
                        <button className="border border-solid border-primary py-3 rounded-full w-40 bg-[#f0efee] flex justify-between px-3 items-center cursor-pointer">
                            Thèmes{" "}
                            <svg className="w-4 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="p-4 flex flex-col gap-4 lg:flex-row lg:px-20 lg:w-[40%] lg:relative lg:left-16">
                    {apparts.map((apparts, index) => (
                        <CardAppart key={index} {...apparts} isProfil={isProfil} />
                    ))}
                </div>
                <div className="flex justify-center">
                    <button onClick={handleClick} className="bg-secondary-300 py-2 px-4 rounded-full cursor-pointer text-[14px] text-secondary-200">
                        En voir plus
                    </button>
                </div>
            </section>
            <Footer />
        </>
    );
}
