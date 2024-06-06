"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Profil() {
    const router = useRouter();
  const [user, setUser] = useState({
    mail: '',
    firstname: '',
    lastname: '',
    isNewsletter: false,
    rulesAccepted: false
  });

  useEffect(() => {
    // Récupérer l'objet user depuis le sessionStorage
    const userSession = sessionStorage.getItem('user');
    if (userSession) {
      try {
        const userObject = JSON.parse(userSession);
        if (userObject && userObject.user) {
          setUser({
            mail: userObject.user.mail || '',
            firstname: userObject.user.firstname || '',
            lastname: userObject.user.lastname || '',
            isNewsletter: userObject.user.isNewsletter || false,
            rulesAccepted: false // Par défaut, met false si tu n'as pas cette info
          });
        }
      } catch (error) {
        console.error('Error parsing JSON from sessionStorage', error);
      }
    }
  }, []);

  const handleDelete = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!confirm("Voulez-vous vraiment supprimer votre compte ?")) {
      return;
    }

    console.log(user.mail); // Affiche le mail pour vérifier

    const response = await fetch("http://localhost:5001/users/delete", {
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
  }

  return (
    <form className="flex flex-col gap-4">
      <label>
        <p>Prénom</p>
        <input type="text" className="p-2 border border-solid border-black rounded-md" value={user.firstname} readOnly />
      </label>
      <label>
        <p>Nom</p>
        <input type="text" className="p-2 border border-solid border-black rounded-md" value={user.lastname} readOnly />
      </label>
      <label>
        <p>Adresse mail</p>
        <input type="email" className="p-2 border border-solid border-black rounded-md" value={user.mail} readOnly />
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
