"use client";

import { useState } from "react";

interface ExtraProps {
    name: string;
    icon: string;
    logo_class: string;
    price: number | null;
    onCountChange: (count: number) => void; // Fonction de rappel pour la mise à jour du compteur
}

export default function Extra(props: ExtraProps) {
    const [count, setCount] = useState(0);

    const increment = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // Empêcher la soumission du formulaire
        const newCount = count + 1;
        setCount(newCount);
        props.onCountChange(newCount); // Appeler la fonction de rappel avec la nouvelle valeur
    };

    const decrement = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // Empêcher la soumission du formulaire
        const newCount = count > 0 ? count - 1 : 0;
        setCount(newCount);
        props.onCountChange(newCount); // Appeler la fonction de rappel avec la nouvelle valeur
    };

    return (
        <>
            <div className="w-full flex h-[0.5px] bg-primary bg-opacity-20 font-satoshi font-[13px] lg:text-[20px]"></div>
            <div className="w-full flex justify-between items-center">
                <div className="flex justify-start items-center gap-2 w-full">
                    <img className={props.logo_class} src={props.icon} alt={`icone de ${props.name}`} />
                    <p>{props.name}</p>
                </div>
                {props.price && (
                <div className="w-2/4">
                    {props.price}€
                </div>
                 )}
                <div className="flex items-center gap-2">
                    <button onClick={decrement} className="bg-[#E9E9E2] w-6 h-6 rounded-full flex justify-center items-center">
                        -
                    </button>
                    <p>{count}</p>
                    <button onClick={increment} className="bg-[#E9E9E2] w-6 h-6 rounded-full flex justify-center items-center">
                        +
                    </button>
                </div>
            </div>
        </>
    );
}
