"use client";
export default function Profil() {
    return (
        <form className="flex flex-col gap-4">
            <label>
                <p>Prénom</p>
                <input type="text" className="p-2 border border-solid border-black rounded-md" />
            </label>
            <label>
                <p>Nom</p>
                <input type="text" className="p-2 border border-solid border-black rounded-md" />
            </label>
            <label>
                <p>Adresse mail</p>
                <input type="email" className="p-2 border border-solid border-black rounded-md" />
            </label>
            <label>
                <input type="checkbox" className="mr-2" />
                Conditions d'utilisation
            </label>
            <label>
                <input type="checkbox" className="mr-2" />
                Abonnement à la newsletter
            </label>
            <button className="bg-yellow-300 p-2 rounded-lg" type="submit">
                Supprimer mon compte
            </button>
        </form>
    );
}
