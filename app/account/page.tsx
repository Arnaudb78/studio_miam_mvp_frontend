"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Profil from "@/components/profil";

function useIsClient() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient;
}

export default function Account() {
    const isClient = useIsClient();
    const router = useRouter();

    useEffect(() => {
        if (isClient) {
            const session = sessionStorage.getItem("user");
            if (!session) {
                router.push("/connect");
            } else {
                getInformationsProfil(session);
            }
        }
    }, [isClient, router]);

    function getInformationsProfil(session: string) {
    }

    function clearStorage() {
        sessionStorage.clear();
    }

    if (!isClient) {
        return null; 
    }

    return (
        <>
            <Navbar />
            <div className="w-full flex justify-between p-4 ">
                <h1 className="font-bold">Mon Compte</h1>
                <a className="bg-red-300 p-4 rounded-full" onClick={clearStorage} href="/">
                    Déconnexion
                </a>
            </div>
            <div className="flex flex-col justify-center items-center p-8">
                <h2>Mes Appart&apos; :</h2>
                <div className="h-[0.5px] w-full bg-gray-500 m-4"></div>
                <a className="bg-[#C2C2C2] p-4 rounded-full" href="/appart">Gérer mes appart'</a>
            </div>
            <div className="flex flex-col justify-center items-center p-8">
                <h2>Mes Loc&apos; :</h2>
                <div className="h-[0.5px] w-full bg-gray-500 m-4"></div>
                <a className="bg-[#C2C2C2] p-4 rounded-full" href="/location">Gérer mes loc'</a>
            </div>
            <div className="flex flex-col justify-center items-center p-8">
                <h2>Mes informations :</h2>
                <div className="h-[0.5px] w-full bg-gray-500 m-4"></div>
                <Profil />
            </div>
        </>
    );
}
