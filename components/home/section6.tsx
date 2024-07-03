"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Section6() {
    const router = useRouter();
    const [email, setEmail] = useState("");

    const handleClick = () => {
        router.push("/assistance");
    };

    const handleChangeMail = (e: any) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    };

    const handleClickMail = async (e: any) => {
        e.preventDefault();
        if (!email) return alert("Veuillez renseigner votre email");
        const res = await fetch("https://pacific-reaches-55510-1cc818501846.herok/newsletter", {
            method: "POST",
            body: JSON.stringify({ email }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (res.status === 409) return alert("Email déjà inscrit");

        if (res.ok) {
            alert("Mail envoyé");
            setEmail("");
        }
    };

    return (
        <>
            <section className="p-2 flex flex-col gap-4 lg:p-8 font-satoshi lg:gap-16">
                <div className="w-full h-full bg-primary rounded-2xl text-secondary-200 p-8 flex flex-col gap-4 lg:p-20 lg:justify-center lg:items-center">
                    <h2 className="text-center text-[18px] lg:hidden">
                        Inscrivez-vous à notre newsletter!<br></br>
                        Promis, c&apos;est plus excitant qu&apos;un<br></br>
                        épisode de Peppa Pig.
                    </h2>
                    <h2 className="hidden lg:block text-center text-[18px] lg:text-[36px]">
                        Une envie d&apos;avoir des petits conseils pour raviver votre flamme ?<br></br>
                        Promis, c&apos;est plus excitant qu&apos;un épisode de Peppa Pig.
                    </h2>
                    <form className="text-[12px] w-full bg-secondary-200 flex justify-between py-2 rounded-full px-2 lg:w-1/2 lg:flex lg:justify-center lg:items-center lg:p-4 lg:text-[16px] lg:mt-8">
                        <input
                            onChange={handleChangeMail}
                            value={email}
                            className="w-full h-full p-2 text-primary"
                            type="text"
                            name="mail"
                            id="mail"
                            placeholder="inscris ton mail ici..."
                        />
                        <button onClick={handleClickMail} className="bg-secondary-300 rounded-full p-1 lg:px-6 lg:py-3">
                            Envoyer
                        </button>
                    </form>
                </div>
                <div className="flex flex-col text-[12px] gap-4 p-2 lg:hidden">
                    <h2 className="text-[24px]">
                        Si vous avez des <span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">questions</span>
                        <br></br> checkez ici !
                    </h2>
                    <div className="h-[0.5px] w-full bg-primary"></div>
                    <p className="cursor-pointer">Est-ce que ma banque va voir ma réservation ?</p>
                    <div className="h-[0.5px] w-full bg-primary"></div>
                    <p className="cursor-pointer">Est-ce que je peux annuler ma réservation à tout moment ?</p>
                    <div className="h-[0.5px] w-full bg-primary"></div>
                    <p className="cursor-pointer">Est-ce que je vais devoir rencontrer les hôtes pour entrer dans le logement ?</p>
                    <div className="h-[0.5px] w-full bg-primary"></div>
                    <p className="cursor-pointer">Comment se passe le système de nettoyage des chambre ?</p>
                    <div className="h-[0.5px] w-full bg-primary"></div>
                    <p className="cursor-pointer">Comment se passe le checking des chambres ?</p>
                    <div className="h-[0.5px] w-full bg-primary"></div>
                </div>

                <div className="hidden lg:flex lg:text-[20px] lg:gap-4 lg:p-2 lg:bg-[#F4F3EB] lg:rounded-2xl">
                    <div className="lg:w-2/3 lg:p-8">
                        <p className="text-[32px] font-bold">
                            Si vous avez des <span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">questions</span>
                            <br></br> checkez ici !
                        </p>
                    </div>
                    <div className="lg:w-full lg:p-8">
                        <div className="h-[0.5px] w-full bg-primary mt-8"></div>
                        <div className="flex justify-between items-center p-4">
                            <p className="cursor-pointer">Est-ce que ma banque va voir ma réservation ?</p>
                            <svg onClick={handleClick} className="w-5 h-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                            </svg>
                        </div>
                        <div className="h-[0.5px] w-full bg-primary"></div>
                        <div className="flex justify-between items-center p-4">
                            <p className="cursor-pointer">Est-ce que je peux annuler ma réservation à tout moment ?</p>
                            <svg onClick={handleClick} className="w-5 h-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                            </svg>
                        </div>
                        <div className="h-[0.5px] w-full bg-primary"></div>
                        <div className="flex justify-between items-center p-4">
                            <p className="cursor-pointer">Est-ce que je vais devoir rencontrer les hôtes pour entrer dans le logement ?</p>
                            <svg onClick={handleClick} className="w-5 h-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                            </svg>
                        </div>
                        <div className="h-[0.5px] w-full bg-primary"></div>
                        <div className="flex justify-between items-center p-4">
                            <p className="cursor-pointer">Comment se passe le système de nettoyage des chambre ?</p>
                            <svg onClick={handleClick} className="w-5 h-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                            </svg>
                        </div>
                        <div className="h-[0.5px] w-full bg-primary"></div>
                        <div className="flex justify-between items-center p-4">
                            <p className="cursor-pointer">Comment se passe le checking des chambres ?</p>
                            <svg onClick={handleClick} className="w-5 h-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                            </svg>
                        </div>
                        <div className="h-[0.5px] w-full bg-primary"></div>
                    </div>
                </div>
            </section>
        </>
    );
}
