"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CardComment from "./commentary/card-comment";
import CardComment2 from "./commentary/card-comment2";

export default function Profil() {
    const router = useRouter();
    const [user, setUser] = useState({
        mail: "",
        firstname: "",
        lastname: "",
        isNewsletter: false,
        rulesAccepted: false,
        pic: "",
    });

    useEffect(() => {
        const userSession = sessionStorage.getItem("user");
        if (userSession) {
            try {
                const userObject = JSON.parse(userSession);
                if (userObject && userObject.user) {
                    setUser({
                        mail: userObject.user.mail || "",
                        firstname: userObject.user.firstname || "",
                        lastname: userObject.user.lastname || "",
                        isNewsletter: userObject.user.isNewsletter || false,
                        rulesAccepted: userObject.user.rules || false,
                        pic : userObject.user.pic || "",
                    });
                }
            } catch (error) {
                console.error("Error parsing JSON from sessionStorage", error);
            }
        }
    }, []);

    const handleDelete = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!confirm("Voulez-vous vraiment supprimer votre compte ?")) {
            return;
        }
        //http://localhost:5001
        //https://pacific-reaches-55510-1cc818501846.herokuapp.com
        const response = await fetch("https://pacific-reaches-55510-1cc818501846.herokuapp.com/users/delete", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ mail: user.mail }),
        });

        if (!response.ok) {
            return alert("Une erreur est survenue.");
        }

        sessionStorage.removeItem("user");

        alert("Votre compte a bien été supprimé.");
        router.push("/connect");
    };

    const data = [
        {
            pic: "images/profil2.png",
            name: "Charlotte",
            description: "La chambre était parfaite pour notre petite escapade en amoureux. L'accueil était chaleureux et discret, la chambre magnifique avec une ambiance très intime.",
            date: "10h20 - 14 / 06 / 2024",
            className: "w-full h-full bg-[#FFFFFF] text-[13px] rounded-2xl p-8 flex flex-col gap-4 lg:w-[30%]"
        },
        {
            pic: "images/profil3.png",
            name: "Julie",
            description: "Cette plateforme est une vraie pépite pour les couples cherchant à se retrouver. La chambre était sublime, avec des installations de qualité.",
            date: "10h20 - 14 / 06 / 2024",
            className: "w-full h-full bg-[#FFFFFF] text-[13px] rounded-2xl p-8 flex flex-col gap-4 lg:w-[30%]"
        },
    ];

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

    const datas = data.map((comment, index) => {
        return <CardComment key={index} pic={comment.pic} name={comment.name} description={comment.description} date={comment.date} className={comment.className} />
    })

    const comments = commentary.map((comment, index) => {
        return <CardComment2 key={index} pic={comment.pic} name={comment.name} description={comment.description} date={comment.date} />;
    });

    return (
        <>
        <div className="w-fit text-[12px] font-satoshi relative">
            <div className="bg-secondary-300 w-full">
                <img className="lg:hidden" src="/images/vector.png" alt="design vector" />
                <img className="hidden lg:block" src="/images/vector_desk.png" alt="design vector" />
            </div>
            <div className="flex absolute items-center top-24 left-2 lg:top-28 lg:left-6 lg:text-[20px]">
                {user.pic ? (
                    <img className="w-24 h-24 lg:w-48 lg:h-48 rounded-full" src={user.pic} alt="profil picture" />
                ) : (
                    <img className="w-24 h-24 lg:w-48 lg:h-48 rounded-full" src="/images/inconnu.jpg" alt="profil picture" />
                )}
                <div className="w-full h-full flex flex-col mt-6 px-3">
                    <p className="font-bold text-[16px] lg:text-[28px]">{user.firstname} {user.lastname}</p>
                    <p>Voyageur</p>
                </div>
            </div>
            <div className="lg:flex lg:mt-36 lg:px-28 lg:justify-center lg:items-start gap-2 xl:px-40">
                <div className="p-2 lg:p-0 w-full h-fit">
                    <div className="bg-secondary-400 p-4 rounded-2xl mt-20 flex flex-col gap-4 lg:mt-0 lg:text-[14px] lg:p-8 lg:w-full">
                        <p className="font-bold text-[16px] lg:text-[24px]">/ Biographie</p>
                        <p >Je suis là pour vous assurer un séjour parfaitement adapté à vos besoins,
                            avec une attention particulière pour chaque détail afin de rendre votre
                            expérience exceptionnelle. N&apos;hésitez pas à me contacter pour toute demande
                            spécifique ou pour des recommandations.</p>
                            <div>
                                <p><span className="font-bold">Langues :</span> Français, Anglais, Espagnols</p>
                                <p><span className="font-bold">Temps de réponse :</span> 15 min en moyenne</p>
                            </div>
                    </div>
                </div>
                <div className="p-2 lg:p-0 lg:w-3/5 lg:h-full">
                    <div className="bg-secondary-400 p-4 rounded-2xl flex flex-col lg:h-[237px] lg:w-full lg:p-8">
                        <p className="font-bold text-[16px] lg:text-[24px]">/ Vérification</p>
                        <div className="w-full flex justify-start items-center gap-4 lg:text-[20px] mt-4">
                            <svg className="w-5 h-5 lg:w-6 lg:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                            <p>Identité</p>
                        </div>
                        <div className="w-full flex justify-start items-center gap-4 lg:text-[20px]">
                            <svg className="w-5 h-5 lg:w-6 lg:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                            <p>Numéro de téléphone</p>
                        </div>
                        <div className="w-full flex justify-start items-center gap-4 lg:text-[20px]">
                            <svg className="w-5 h-5 lg:w-6 lg:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                            <p>Addresse mail</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-2 lg:px-28 xl:px-40">
                <div className="bg-secondary-400 p-4 rounded-2xl flex flex-col gap-4">
                    <p className="font-bold text-[16px] lg:text-[24px]">/ Tes commentaires</p>
                    <div className="flex flex-col gap-2 lg:flex-row lg:hidden">
                        {datas}
                    </div>
                    <div className="hidden lg:flex gap-2 ">
                        {comments}
                    </div>
                </div>
            </div>
        </div>
        </>

        // <form className="flex flex-col gap-4">
        //     <label>
        //         <p>Prénom :</p>
        //         <p className="font-semibold">{user.firstname}</p>
        //     </label>
        //     <label>
        //         <p>Nom :</p>
        //         <p className="font-semibold">{user.lastname}</p>
        //     </label>
        //     <label>
        //         <p>Adresse mail :</p>
        //         <p className="font-semibold">{user.mail}</p>
        //     </label>
        //     <label>
        //         <input type="checkbox" className="mr-2" checked={user.rulesAccepted} readOnly />
        //         Conditions d&apos;utilisation
        //     </label>
        //     <label>
        //         <input type="checkbox" className="mr-2" checked={user.isNewsletter} readOnly />
        //         Abonnement à la newsletter
        //     </label>
        //     <button onClick={handleDelete} className="bg-yellow-300 p-2 rounded-lg" type="submit">
        //         Supprimer mon compte
        //     </button>
        // </form>
    );
}
