"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Profil() {
    const router = useRouter();
    const [user, setUser] = useState({
        mail: "",
        firstname: "",
        lastname: "",
        isNewsletter: false,
        rulesAccepted: false,
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

    return (
        <form className="flex flex-col gap-4">
            <label>
                <p>Prénom :</p>
                <p className="font-semibold">{user.firstname}</p>
            </label>
            <label>
                <p>Nom :</p>
                <p className="font-semibold">{user.lastname}</p>
            </label>
            <label>
                <p>Adresse mail :</p>
                <p className="font-semibold">{user.mail}</p>
            </label>
            <label>
                <input type="checkbox" className="mr-2" checked={user.rulesAccepted} readOnly />
                Conditions d&apos;utilisation
            </label>
            <label>
                <input type="checkbox" className="mr-2" checked={user.isNewsletter} readOnly />
                Abonnement à la newsletter
            </label>
            <button onClick={handleDelete} className="bg-yellow-300 p-2 rounded-lg" type="submit">
                Supprimer mon compte
            </button>
        </form>
    );
}
