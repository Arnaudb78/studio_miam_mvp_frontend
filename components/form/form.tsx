"use client";

import { FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Form() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        //http://localhost:5001
        //https://pacific-reaches-55510-1cc818501846.herokuapp.com
        const response = await fetch("https://pacific-reaches-55510-1cc818501846.herok/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, mail }),
        });

        if (response.ok) {
            alert("Message sent!");
            setName("");
            setMail("");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="border border-solid border-gray-700 rounded-md w-fit flex flex-col justify-center items-center text-center gap-4 p-4">
            <label>
                <p>Nom</p>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border border-solid border-gray-700 rounded-md"
                />
            </label>
            <label>
                <p>Email</p>
                <input
                    type="mail"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    className="w-full p-2 border border-solid border-gray-700 rounded-md"
                />
            </label>

            <button className="w-full p-2 rounded-md hover:bg-gray-700 hover:text-white" type="submit">
                Envoyé <FontAwesomeIcon icon={faPaperPlane} />{" "}
            </button>
        </form>
    );
}
