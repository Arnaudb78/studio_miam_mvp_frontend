"use client";

import { Dispatch, SetStateAction } from "react";

interface FormConnectProps {
    setShowSignup: Dispatch<SetStateAction<boolean>>;
}

const FormConnect: React.FC<FormConnectProps> = ({ setShowSignup }) => {
    return (
        <div className="bg-red-200 m-8 p-4 border border-solid border-black">
            <h2>Connexion</h2>
            <form className="flex flex-col gap-4">
                <label>
                    <p>Adresse mail</p>
                    <input type="email" className="p-2 border border-solid border-black rounded-md" />
                </label>
                <label>
                    <p>Mot de passe</p>
                    <input type="password" className="p-2 border border-solid border-black rounded-md" />
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
