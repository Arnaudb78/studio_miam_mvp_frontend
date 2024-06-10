import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CardAppart() {
    const router = useRouter();
    const [appart, setAppart] = useState(false);

    useEffect(() => {
        const userSession = sessionStorage.getItem("user");
        if (userSession) {
            const userObject = JSON.parse(userSession);
            if (userObject && userObject.user) {
                checkIfUserHaveAppart(userObject.user._id);
            }
        }
    }, []);

    const checkIfUserHaveAppart = async (userId: string) => {
        //http://localhost:5001
        //https://pacific-reaches-55510-1cc818501846.herokuapp.com
        const response = await fetch(`http://localhost:5001/apparts/getAppart?user_id=${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();
        if (response.status === 404 || data.length === 0) {
            // alert("Vous n'avez pas encore d'appartement.");
            // router.push("/appart/create");
        }
    };

    return (
        <div className="w-full flex flex-col justify-center items-center p-8">
            {!appart ? (
                <p className=""> Pas encore d&apos;appart ? Créez en un vitfesse!</p>
            ) : (
                <a className="bg-[#C2C2C2] p-4 rounded-full" href="/">
                    Gérer mes appart&apos;
                </a>
            )}
            {!appart ? (
                <a className="bg-[#C2C2C2] p-4 rounded-full mt-10" href="/create">
                    Créer un appart&apos;
                </a>
            ) : (
                <p>Ici il y aura les apparts du client.</p>
            )}
        </div>
    );
}
