"use client";
import { useState, useEffect } from 'react';
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

// const messages = [
//     "Appel des fonds...",
//     "Réservation en cours...",
//     "Vérification des disponibilités...",
//     "Finalisation de la réservation...",
// ];

const messages = [
    "Tic tac... L'attente fait partie du plaisir !",
    "Allô, banque ? On peut avoir un peu d'argent, s'il vous plaît ?",
    "On vérifie si la chambre a bien été rangée...",
    "Les licornes s'occupent de votre réservation... Patience !"
];


export default function EndPayment() {
    const [loading, setLoading] = useState(true);
    const [messageIndex, setMessageIndex] = useState(0);
    const [reservationMessage, setReservationMessage] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex(prevIndex => {
                if (prevIndex < messages.length - 1) {
                    return prevIndex + 1;
                } else {
                    clearInterval(interval);
                    setLoading(false);
                    setReservationMessage('Chambre réservée !');
                    return prevIndex;
                }
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Navbar />
            <section className="flex flex-col items-center justify-center h-screen p-4">
                {loading ? (
                    <div className="flex flex-col items-center">
                        <div className="loader animate-spin rounded-full border-t-2 border-b-2 border-primary w-12 h-12 mb-4"></div>
                        <p>{messages[messageIndex]}</p>
                    </div>
                ) : (
                    <h2>{reservationMessage}</h2>
                )}
            </section>
            <Footer />
            <style jsx>{`
                .loader {
                    border-top-color: #3498db; /* Primary color */
                    border-right-color: transparent;
                    border-bottom-color: #3498db;
                    border-left-color: transparent;
                }
            `}</style>
        </>
    );
}
