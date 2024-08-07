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
        const response = await fetch("https://pacific-reaches-55510-1cc818501846.herokuapp.com/users", {
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
        router.push("/room");
    };

    return (
        <div className="bg-filter bg-opacity-75 backdrop-blur-md m-8 p-8 border border-solid border-secondary-200 text-secondary-200 rounded-2xl text-[12px]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 items-center">
                <h2 className="font-bold text-[24px]">Connexion</h2>
                <label className="w-full flex flex-col justify-center items-center gap-2">
                    <p>Mail</p>
                    <input
                        value={mail}
                        onChange={(event) => setMail(event.target.value)}
                        type="email"
                        className="p-2 border border-solid border-secondary-200 rounded-full bg-transparent"
                    />
                </label>
                <label className="w-full flex flex-col justify-center items-center gap-2">
                    <p>Mot de passe</p>
                    <input
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        type="password"
                        className="p-2 border border-solid border-secondary-200 rounded-full bg-transparent"
                    />
                </label>
                <div className="flex flex-col w-full items-center gap-4">
                    <button className="bg-secondary-200 p-3 rounded-full text-primary font-bold w-3/5 " type="submit">
                        Se connecter
                    </button>

                    <p>
                        Je souhaite{" "}
                        <a className="underline cursor-pointer" href="#" onClick={() => setShowSignup(true)}>
                            créer un compte
                        </a>{" "}
                        en vitfesse
                    </p>
                </div>
            </form>
        </div>
    );
};

export default FormConnect;
