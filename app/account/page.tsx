"use client";

import Navbar from "@/components/navbar";
import Profil from "@/components/profil";

export default function Account() {
    const session = sessionStorage.getItem("user");
    function checkIfConnected() {
        if (!session) {
            window.location.href = "/connect";
        }
    }

    checkIfConnected();

    function getInformationsProfil() {
        console.log("ici ------>", session);
    }

    getInformationsProfil();

    function clearStorage() {
        sessionStorage.clear();
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
