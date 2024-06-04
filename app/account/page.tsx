"use client";

import Navbar from "@/components/navbar";
import { useState } from "react";

export default function Account() {
    function checkIfConnected() {
        if (!sessionStorage.getItem("user")) {
            window.location.href = "/connect";
        }
    }

    checkIfConnected();

    function clearStorage() {
        sessionStorage.clear();
    }

    return (
        <>
            <Navbar />
            <section className="w-full flex justify-between p-4 ">
                <p>Mon Compte</p>
                <a className="bg-red-300 p-4" onClick={clearStorage} href="/">
                    Déconnexion
                </a>
            </section>
        </>
    );
}
