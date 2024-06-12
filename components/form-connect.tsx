"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";

interface FormConnectProps {
    setShowSignup: Dispatch<SetStateAction<boolean>>;
}

const FormConnect: React.FC<FormConnectProps> = ({ setShowSignup }) => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!mail || !password) {
            alert("Veuillez remplir tous les champs obligatoires.");
            return;
        }
        //http://localhost:5001
        //https://pacific-reaches-55510-1cc818501846.herokuapp.com/users
        const response = await fetch("http://localhost:5001/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ mail, password }),
        });
        if (response.status === 404) return alert("Utilisateur non trouvé.");
        if (response.status === 409) return alert("Mot de passe incorrect.");

        response.json().then((data) => sessionStorage.setItem("user", JSON.stringify(data)));

        if (!response.ok) return alert("Adresse mail ou mot de passe incorrect.");

        setMail("");
        setPassword("");
        router.push("/account");
    };

    return (
        <div className="bg-red-200 m-8 p-4 border border-solid border-black">
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label>
                    <p>Adresse mail</p>
                    <input
                        value={mail}
                        onChange={(event) => setMail(event.target.value)}
                        type="email"
                        className="p-2 border border-solid border-black rounded-md"
                    />
                </label>
                <label>
                    <p>Mot de passe</p>
                    <input
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        type="password"
                        className="p-2 border border-solid border-black rounded-md"
                    />
                </label>
                <button className="bg-yellow-300 p-2 rounded-lg" type="submit">
                    Se connecter
                </button>
                <a className="underline" href="#" onClick={() => setShowSignup(true)}>
                    Pas de compte ? Cliquez ici !
                </a>
            </form>
        </div>
    );
};

export default FormConnect;
