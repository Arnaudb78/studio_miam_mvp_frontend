"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";

interface FormCreateProps {
    setShowSignup: Dispatch<SetStateAction<boolean>>;
}

interface User {
    firstname: string;
    lastname: string;
    mail: string;
    password: string;
    confirmPassword: string;
    newsletter: boolean;
}

const FormCreate: React.FC<FormCreateProps> = ({ setShowSignup }) => {
    const router = useRouter();

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [newsletter, setNewsletter] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!firstname || !lastname || !mail || !password || !confirmPassword) {
            alert("Veuillez remplir tous les champs obligatoires.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas.");
            return;
        }

        const response = await fetch("http://localhost:5001/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ firstname, lastname, mail, password, confirmPassword, newsletter }),
        });
        response.json().then((data) => sessionStorage.setItem("user", JSON.stringify(data)));
        if (response.ok) {
            alert("Compte créé !");
            setFirstname("");
            setLastname("");
            setMail("");
            setPassword("");
            setConfirmPassword("");
            setNewsletter(false);
            router.push("/account");
        }
    };

    return (
        <div className="bg-green-200 m-8 p-4 border border-solid border-black">
            <h2>Création de compte</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label>
                    <p>Prénom</p>
                    <input
                        type="text"
                        value={firstname}
                        onChange={(event) => setFirstname(event.target.value)}
                        className="p-2 border border-solid border-black rounded-md"
                    />
                </label>
                <label>
                    <p>Nom</p>
                    <input
                        type="text"
                        value={lastname}
                        onChange={(event) => setLastname(event.target.value)}
                        className="p-2 border border-solid border-black rounded-md"
                    />
                </label>
                <label>
                    <p>Adresse mail</p>
                    <input
                        type="mail"
                        value={mail}
                        onChange={(event) => setMail(event.target.value)}
                        className="p-2 border border-solid border-black rounded-md"
                    />
                </label>
                <label>
                    <p>Mot de passe</p>
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="p-2 border border-solid border-black rounded-md"
                    />
                </label>
                <label>
                    <p>Confirmez le mot de passe</p>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        className="p-2 border border-solid border-black rounded-md"
                    />
                </label>
                <label>
                    <input type="checkbox" className="mr-2" />
                    J'accepte les conditions d'utilisation
                </label>
                <label>
                    <input type="checkbox" checked={newsletter} onChange={(event) => setNewsletter(event.target.checked)} className="mr-2" />
                    Je souhaite m'abonner à la newsletter
                </label>
                <button className="bg-yellow-300 p-2 rounded-lg" type="submit">
                    Créer un compte
                </button>
                <a className="underline" href="#" onClick={() => setShowSignup(false)}>
                    Déjà un compte ? Connectez-vous ici !
                </a>
            </form>
        </div>
    );
};

export default FormCreate;
