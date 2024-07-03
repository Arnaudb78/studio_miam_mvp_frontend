"use client";

import { Dispatch, FormEventHandler, SetStateAction, use, useState } from "react";
import { useRouter } from "next/navigation";
import { uploadFile } from "@/app/create/upload.action";

interface FormCreateProps {
    setShowSignup: Dispatch<SetStateAction<boolean>>;
}

const FormCreate: React.FC<FormCreateProps> = ({ setShowSignup }) => {
    const router = useRouter();

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [rules, setRules] = useState(false);
    const [newsletter, setNewsletter] = useState(false);
    const [picUrl, setPicUrl] = useState("");

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        const formDate = new FormData(e.currentTarget);
        const file = formDate.get("file") as File;

        const url = await uploadFile(formDate);

        if (!url) {
            return alert("Erreur lors de l'upload de l'image");
        }

        setPicUrl(url);

        if (!firstname || !lastname || !mail || !password || !confirmPassword || !rules || !newsletter) {
            alert("Veuillez remplir tous les champs obligatoires.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas.");
            return;
        }
        const response = await fetch("http://localhost:5001/users/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ firstname, lastname, mail, password, rules, newsletter, picUrl }),
        });
        if (response.status === 400) return alert("Adresse mail déjà utilisée.");
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
        <div className="bg-filter bg-opacity-75 backdrop-blur-md m-8 p-4 text-secondary-200 text-[12px] rounded-2xl flex flex-col items-center lg:h-[565px] lg:m-0 ">
            <h2 className="font-bold p-4 text-[24px]">Création de compte</h2>
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 lg:gap-2">
                <label className="flex flex-col gap-2">
                    <p>Prénom</p>
                    <input
                        type="text"
                        value={firstname}
                        onChange={(event) => setFirstname(event.target.value)}
                        className="p-2 border border-solid border-secondary-200 rounded-full bg-transparent"
                    />
                </label>
                <label className="flex flex-col gap-2">
                    <p>Nom</p>
                    <input
                        type="text"
                        value={lastname}
                        onChange={(event) => setLastname(event.target.value)}
                        className="p-2 border border-solid border-secondary-200 rounded-full bg-transparent"
                    />
                </label>
                <label className="flex flex-col gap-2">
                    <p>Adresse mail</p>
                    <input
                        type="email"
                        value={mail}
                        onChange={(event) => setMail(event.target.value)}
                        className="p-2 border border-solid border-secondary-200 rounded-full bg-transparent"
                    />
                </label>
                <label className="flex flex-col gap-2">
                    <p>Mot de passe</p>
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="p-2 border border-solid border-secondary-200 rounded-full bg-transparent"
                    />
                </label>
                <label className="flex flex-col gap-2">
                    <p>Confirmez le mot de passe</p>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        className="p-2 border border-solid border-secondary-200 rounded-full bg-transparent"
                    />
                </label>
                <label className="w-full flex justify-start items-center gap-2">
                    <input type="checkbox" checked={rules} onChange={(event) => setRules(event.target.checked)} className="mr-2" />
                    J&apos;accepte les conditions d&apos;utilisation
                </label>
                <label className="w-full flex justify-start items-center gap-2">
                    <input type="checkbox" checked={newsletter} onChange={(event) => setNewsletter(event.target.checked)} className="mr-2" />
                    Je souhaite m&apos;abonner à la newsletter
                </label>
                {/* <input type="file" name="file" className="border-2 border-gray-500 rounded-lg p-2 m-2" /> */}
                <button className="bg-secondary-200 text-primary font-bold p-3 rounded-full" type="submit">
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
