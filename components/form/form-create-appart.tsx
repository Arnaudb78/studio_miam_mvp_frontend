"use client";

import { FormEvent, useState, useEffect, FormEventHandler } from "react";
import { useRouter } from "next/navigation";
import { uploadFile } from "@/app/create/upload.action";

export default function FormCreateAppart() {
    const router = useRouter();
    const [user, setUser] = useState({
        mail: "",
    });

    useEffect(() => {
        const userSession = sessionStorage.getItem("user");
        if (userSession) {
            try {
                const userObject = JSON.parse(userSession);
                if (userObject && userObject.user) {
                    setUser({
                        mail: userObject.user.mail || "",
                    });
                }
            } catch (error) {
                console.error("Error parsing JSON from sessionStorage", error);
            }
        }
    }, []);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [time, setTime] = useState<string[]>([]);
    const [localisation, setLocalisation] = useState({
        address: "",
        complementary_address: "",
        city: "",
        zip_code: 0,
        country: "",
    });
    const [peopleNumber, setPeopleNumber] = useState(0);
    const [type, setType] = useState("appart");
    const [roomNumber, setRoomNumber] = useState(0);
    const [equipements, setEquipements] = useState<{ [key: string]: boolean }>({
        wifi: false,
        tv: false,
        clim: false,
        parking: false,
        breakfast: false,
    });
    const [accessories, setAccessories] = useState<{ [key: string]: boolean }>({
        chain: false,
        cage: false,
        jacuzzi: false,
    });

    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const formDate = new FormData(e.currentTarget);
        const file = formDate.get("file") as File;

        const url = await uploadFile(formDate);

        if (!url) {
            return alert("Erreur lors de l'upload de l'image");
        }

        setImageUrl(url);

        const appart = {
            title,
            description,
            price,
            time,
            localisation,
            people_number: peopleNumber,
            type,
            room_number: roomNumber,
            equipements,
            accessories,
            images: url,
        };

        try {
            const response = await fetch("http://localhost:5001/apparts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ mail: user.mail, appart }),
            });

            if (response.status === 400) return alert("Erreur lors de la création de l'appartement");
            if (response.status === 404) {
                alert("Utilisateur non trouvé");
                router.push("/connect");
            }

            const data = await response.json();

            if (response.ok) {
                alert("Appart créé avec succès");
                router.push("/appart");
            }
        } catch (error: any) {
            alert(`Erreur: ${error.message}`);
        }
    };

    const handleLocalisationChange = (e: any) => {
        setLocalisation({
            ...localisation,
            [e.target.name]: e.target.value,
        });
    };

    const handleTimeChange = (e: any) => {
        const { name, checked } = e.target;
        setTime((prevTime) => (checked ? [...prevTime, name] : prevTime.filter((timeSlot) => timeSlot !== name)));
    };

    const handleEquipementsChange = (e: any) => {
        const { name, checked } = e.target;
        setEquipements((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
    };

    const handleAccessoriesChange = (e: any) => {
        const { name, checked } = e.target;
        setAccessories((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center p-8">
                <h2>Créer un appart&apos;</h2>
                <div className="h-[0.5px] w-full bg-gray-500 m-4"></div>
                <h3 className="font-bold">Informations de l&apos;appart&apos;</h3>
                <form className="flex flex-col justify-center items-center p-8" onSubmit={handleSubmit}>
                    <label htmlFor="title">Titre de l&apos;appart&apos;</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Nom de l'appart'"
                        className="border-2 border-gray-500 rounded-lg p-2 m-2"
                    />

                    <label htmlFor="description">Description de l&apos;appart&apos;</label>
                    <textarea
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description de l'appart'"
                        className="border-2 border-gray-500 rounded-lg p-2 m-2"
                    />

                    <label htmlFor="price">Prix de l&apos;appart&apos;</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        placeholder="Prix de l'appart'"
                        className="border-2 border-gray-500 rounded-lg p-2 m-2"
                    />

                    <label htmlFor="time">Disponibilité de l&apos;appart&apos;</label>
                    <div className="flex flex-col">
                        {["10-12", "12-14", "14-16", "16-18", "18-20", "20-22"].map((timeSlot) => (
                            <label key={timeSlot}>
                                <input type="checkbox" name={timeSlot} checked={time.includes(timeSlot)} onChange={handleTimeChange} />
                                {timeSlot}
                            </label>
                        ))}
                    </div>
                    <div className="h-[0.5px] w-full bg-gray-500 m-4"></div>
                    <h3 className="font-bold">Localisation de l&apos;appart&apos;</h3>
                    <label htmlFor="address">Adresse de l&apos;appart&apos;</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={localisation.address}
                        onChange={handleLocalisationChange}
                        placeholder="Adresse de l'appart'"
                        className="border-2 border-gray-500 rounded-lg p-2 m-2"
                    />

                    <label htmlFor="complementary_address">Complément d&apos;adresse de l&apos;appart&apos;</label>
                    <input
                        type="text"
                        id="complementary_address"
                        name="complementary_address"
                        value={localisation.complementary_address}
                        onChange={handleLocalisationChange}
                        placeholder="Complément d'adresse de l'appart'"
                        className="border-2 border-gray-500 rounded-lg p-2 m-2"
                    />

                    <label htmlFor="city">Ville de l&apos;appart&apos;</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={localisation.city}
                        onChange={handleLocalisationChange}
                        placeholder="Ville de l'appart'"
                        className="border-2 border-gray-500 rounded-lg p-2 m-2"
                    />

                    <label htmlFor="zip_code">Code postal de l&apos;appart&apos;</label>
                    <input
                        type="number"
                        id="zip_code"
                        name="zip_code"
                        value={localisation.zip_code}
                        onChange={(e) => setLocalisation({ ...localisation, zip_code: Number(e.target.value) })}
                        placeholder="Code postal de l'appart'"
                        className="border-2 border-gray-500 rounded-lg p-2 m-2"
                    />

                    <label htmlFor="country">Pays de l&apos;appart&apos;</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={localisation.country}
                        onChange={handleLocalisationChange}
                        placeholder="Pays de l'appart'"
                        className="border-2 border-gray-500 rounded-lg p-2 m-2"
                    />

                    <div className="h-[0.5px] w-full bg-gray-500 m-4"></div>
                    <h3 className="font-bold">Informations supplémentaires de l&apos;appart&apos;</h3>
                    <label htmlFor="peopleNumber">Nombre de personnes</label>
                    <input
                        type="number"
                        id="peopleNumber"
                        name="peopleNumber"
                        value={peopleNumber}
                        onChange={(e) => setPeopleNumber(Number(e.target.value))}
                        placeholder="Nombre de personnes"
                        className="border-2 border-gray-500 rounded-lg p-2 m-2"
                    />

                    <label htmlFor="type">Type d&apos;appart&apos;</label>
                    <select
                        id="type"
                        name="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="border-2 border-gray-500 rounded-lg p-2 m-2">
                        <option value="appart">Appart</option>
                        <option value="house">House</option>
                    </select>

                    <label htmlFor="roomNumber">Nombre de chambres</label>
                    <input
                        type="number"
                        id="roomNumber"
                        name="roomNumber"
                        value={roomNumber}
                        onChange={(e) => setRoomNumber(Number(e.target.value))}
                        placeholder="Nombre de chambres"
                        className="border-2 border-gray-500 rounded-lg p-2 m-2"
                    />

                    <div className="h-[0.5px] w-full bg-gray-500 m-4"></div>
                    <h3 className="font-bold">Equipements de l&apos;appart&apos;</h3>
                    {Object.keys(equipements).map((equipement) => (
                        <label key={equipement}>
                            <input type="checkbox" name={equipement} checked={equipements[equipement]} onChange={handleEquipementsChange} />
                            {equipement}
                        </label>
                    ))}

                    <div className="h-[0.5px] w-full bg-gray-500 m-4"></div>
                    <h3 className="font-bold">Accessoires de l&apos;appart&apos;</h3>
                    {Object.keys(accessories).map((accessory) => (
                        <label key={accessory}>
                            <input type="checkbox" name={accessory} checked={accessories[accessory]} onChange={handleAccessoriesChange} />
                            {accessory}
                        </label>
                    ))}

                    <div className="h-[0.5px] w-full bg-gray-500 m-4"></div>
                    <h3 className="font-bold">Images de l&apos;appart&apos;</h3>
                    <input type="file" name="file" className="border-2 border-gray-500 rounded-lg p-2 m-2" />
                    {imageUrl ? <img src={imageUrl} alt="uploaded file" className="m-2" /> : null}

                    <button type="submit" className="bg-blue-500 text-white rounded-lg p-2 m-2">
                        Créer
                    </button>
                </form>
            </div>
        </>
    );
}
