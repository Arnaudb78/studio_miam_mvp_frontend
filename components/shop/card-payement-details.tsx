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

export default function CardPayementDetails({ id }: DetailsClientProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const type = searchParams.get("type");
    const [data, setData] = useState<AppartsProps | null>(null);
    const [users, setUsers] = useState<UsersProps | null>(null);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [saveCard, setSaveCard] = useState(false);

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

    const handlePaymentChange = (event: any) => {
        setPaymentMethod(event.target.value);
    };

    const handlePayement = () => {
        if (!paymentMethod) {
            alert("Veuillez choisir un moyen de paiement");
            return;
        }
        router.push(`/endPayement`);
    }

    const handleSaveCardChange = (event: any) => {
        setSaveCard(event.target.checked);
    };

  
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
                <section className="p-2 w-full h-full flex flex-col gap-8 font-satoshi">
                    <div className="w-full flex justify-start items-center gap-2 p-4">
                            <svg className="w-6 h-6 bg-[#F4F3EB] p-1 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                            <h2 className="text-[20px] font-bold">Confirmation et paiement</h2>
                    </div>
                    <div className="w-full h-full bg-[#F4F3EB] p-4 rounded-2xl flex flex-col gap-4">
                        <div className="w-full flex flex-col gap-4">
                            <h2 className="font-bold">{data.title}</h2>
                            <p>A partir de <span className="font-bold">{data.price}€</span></p>
                        </div>
                        <div className="w-full flex border border-primary border-solid rounded-xl">
                            <div className="w-1/3 flex flex-col justify-center items-center gap-1 p-4 border-solid border-primary border-r-0">
                                <p className="font-bold">Date</p>
                                <input  type="date" name="arrivalDate" id="arrivalDate" className="w-full border bg-transparent"/>
                            </div>
                            <div className="w-1/3 flex flex-col justify-center items-center gap-1 p-4 border-r border-l border-solid border-primary border-r-1">
                                <p className="font-bold">Arrivée</p>
                                <input type="time" name="arrivalTime" id="arrivalTime" className="w-full border bg-transparent"/>
                            </div>
                            <div className="w-1/3 flex flex-col justify-center items-center gap-1 p-4">
                                <p className="font-bold">Départ</p>
                                <input type="time" name="departureTime" id="departureTime" className="w-full border bg-transparent"/>
                            </div>
                        </div>
                        <img className="rounded-2xl" src={data.images[0]} alt={`image de ${data.title}`} />
                        <div className="w-full flex h-[0.5px] bg-primary"></div>
                        <div className="w-full flex justify-between font-bold">
                            <p>TOTAL</p>
                            <p>{data.price}€</p>
                        </div>
                    </div>
                    <div className="w-full h-full bg-[#F4F3EB] p-8 rounded-2xl flex flex-col gap-4">
                        <p className="font-bold text-[18px]">Payer avec :</p>
                        <div className="w-full flex justify-start items-center gap-4 mb-8">
                            <div className="flex items-center">
                                <input 
                                    type="radio" 
                                    id="cb" 
                                    name="paymentMethod" 
                                    value="cb" 
                                    checked={paymentMethod === 'cb'}
                                    onChange={handlePaymentChange}
                                    className="mr-2"
                                />
                                <label htmlFor="cb">Carte</label>
                            </div>
                            <div className="flex items-center">
                                <input 
                                    type="radio" 
                                    id="paypal" 
                                    name="paymentMethod" 
                                    value="paypal" 
                                    checked={paymentMethod === 'paypal'}
                                    onChange={handlePaymentChange}
                                    className="mr-2"
                                />
                                <label htmlFor="paypal">PayPal</label>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-4 mb-4">
                            <p className="font-bold text-[16px]">Numéro de carte :</p>
                            <input className="w-full p-2 rounded-lg" type="text" placeholder="1234 5678 9101 1121" />
                        </div>
                        <div className="w-full flex gap-8">
                            <div className="w-full flex flex-col gap-4">
                                <p className="font-bold text-[16px]">Date d&apos;expiration :</p>
                                <input className="w-full p-2 rounded-lg" type="text" placeholder="1234 5678 9101 1121" />
                            </div>
                            <div className="w-full flex flex-col gap-4">
                                <p className="font-bold text-[16px]">CVV :</p>
                                <input className="w-2/3 p-2 rounded-lg" type="text" placeholder="123" />
                            </div>
                        </div>
                        <div className="my-2 flex gap-4 opacity-60">
                            <input 
                                type="checkbox" 
                                id="saveCard" 
                                checked={saveCard}
                                onChange={handleSaveCardChange}
                                className="w-6 h-6"
                            />
                            <label htmlFor="saveCard">Sauvegarder la carte</label>
                        </div>
                        <button onClick={handlePayement} className="w-full p-3 bg-primary text-secondary-200 rounded-lg">Payer {data.price}€</button>
                        <p className="text-[10px] opacity-60">Vos données personnelles seront utilisées pour traiter votre commande, soutenir votre expérience sur ce site Web et à d’autres fins décrites dans notre politique de confidentialité.</p>
                    </div>
                </section>
            <Footer />
        </div>
    );
}
