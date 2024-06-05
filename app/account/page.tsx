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
        console.log("ici ------>", session);
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
                <p>Mon Compte</p>
                <a className="bg-red-300 p-4" onClick={clearStorage} href="/">
                    Déconnexion
                </a>
            </div>
            <div className="flex justify-center">
                <Profil />
            </div>
        </>
    );
}
