"use client";

import { FormEvent, useState, useEffect, FormEventHandler, useRef } from "react";
import { useRouter } from "next/navigation";
import { uploadFile } from "@/app/create/upload.action";
import Extra from "../shop/extra";

export default function FormCreateAppart() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const [user, setUser] = useState({
        mail: "",
    });
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
    const [type, setType] = useState("");
    const [roomNumber, setRoomNumber] = useState(0);
    const [equipements, setEquipements] = useState<{ [key: string]: boolean }>({
        wifi: false,
        tv: false,
        netflix: false,
        parking_gratuit: false,
        parking_payant: false,
        espace_travail: false,
        cuisine: false,
        climatisation: false,
        balcon: false
      });
    const [accessories, setAccessories] = useState<{ [key: string]: boolean }>({
        chain: false,
        cage: false,
        jacuzzi: false,
    });
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [access, setAccess] = useState("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

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

   

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        if (!title || !description || !price || !localisation.address) {
            alert("Veuillez remplir tous les champs obligatoires.");
            return;
        }

        const formData = new FormData(e.currentTarget);
        const file = formData.get("file") as File;

        const url = await uploadFile(formData);

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

    const handleCountChange = (newCount: number) => {
        setPeopleNumber(newCount);
    };

    const handleLocalisationChange = (e: any) => {
        setLocalisation({
            ...localisation,
            [e.target.name]: e.target.value,
        });
    };

    // const handleTimeChange = (e: any) => {
    //     const { name, checked } = e.target;
    //     setTime((prevTime) => (checked ? [...prevTime, name] : prevTime.filter((timeSlot) => timeSlot !== name)));
    // };

    // const handleEquipementsChange = (e: any) => {
    //     const { name, checked } = e.target;
    //     setEquipements((prevState) => ({
    //         ...prevState,
    //         [name]: checked,
    //     }));
    // };

    // const handleAccessoriesChange = (e: any) => {
    //     const { name, checked } = e.target;
    //     setAccessories((prevState) => ({
    //         ...prevState,
    //         [name]: checked,
    //     }));
    // };

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            const url = await uploadFile(formData);
            if (url) {
                setImageUrl(url);
            } else {
                alert("Erreur lors de l'upload de l'image");
            }
        }
    };
    const equipementsData = [
        { key: 'wifi', imgSrc: '/images/logo_wifi.png', label: 'Wifi' },
        { key: 'tv', imgSrc: '/images/logo_tv.png', label: 'Télévision' },
        { key: 'netflix', imgSrc: '/images/logo_netflix.png', label: 'Netflix' },
        { key: 'parking_gratuit', imgSrc: '/images/logo_car.png', label: 'Parking gratuit' },
        { key: 'parking_payant', imgSrc: '/images/logo_park.png', label: 'Parking payant' },
        { key: 'espace_travail', imgSrc: '/images/logo_table.png', label: 'Espace de travail' },
        { key: 'cuisine', imgSrc: '/images/logo_kitchen.png', label: 'Cuisine' },
        { key: 'climatisation', imgSrc: '/images/logo_clim.png', label: 'Climatisation' },
        { key: 'balcon', imgSrc: '/images/logo_balcon.png', label: 'Balcon' }
      ];

      const handleEquipementClick = (key: string) => {
        setEquipements(prevState => ({
          ...prevState,
          [key]: !prevState[key]
        }));
      };

    const accessData = [
        { value: 'house', imgSrc: '/images/logo_house.png', label: 'Logement entier' },
        { value: 'bed', imgSrc: '/images/logo_bed.png', label: 'Chambre' }
      ];

    const handleAccess = (value: string) => {
        setAccess(value);
        };
    


    const optionsType = [
        { value: 'appartement', imgSrc: '/images/logo_appart.png', label: 'Appartement' },
        { value: 'Maison', imgSrc: '/images/logo_house.png', label: 'Maison' },
        { value: 'cabane', imgSrc: '/images/logo_cabin.png', label: 'Cabane' },
        { value: 'bulle', imgSrc: '/images/logo_bull.png', label: 'Bulle' },
        { value: 'tente', imgSrc: '/images/logo_tent.png', label: 'Tente' },
        { value: 'cabane arbre', imgSrc: '/images/logo_cabin_three.png', label: 'Cabane perchée' },
        { value: 'caravane', imgSrc: '/images/logo_caravan.png', label: 'Caravane' },
        { value: 'igloo', imgSrc: '/images/logo_igloo.png', label: 'Igloo' },
        { value: 'tipie', imgSrc: '/images/logo_tepee.png', label: 'Tipie' },
      ];

      const handleType = (value: string) => {
        setType(value);
        };


    const informations = [
        {
            name: "Lit",
            icon: "/images/logo_bed.png",
            price: null,
            logo_class: "bg-[#E9E9E2]",
        },
        {
            name: "Salle de bain",
            icon: "/images/logo_shower.png",
            price: null,
            logo_class: "bg-[#E9E9E2]",
        },
        {
            name: "Voyageurs",
            icon: "/images/logo_people.png",
            price: null,
            logo_class: "bg-[#E9E9E2]",
        },
    ];

    const information = informations.map((information, index) => {
        return <Extra key={index} name={information.name} icon={information.icon} price={information.price} logo_class={information.logo_class} onCountChange={handleCountChange} />;
    });

    const categories = [
        'Romantique',
        'Cosy',
        'Chill',
        'Miroir',
        'BDSM',
        'A thèmes',
        'Luxe',
        'Détente'
      ];

      const handleCategoryClick = (category: string) => {
        setSelectedCategories(prevState => {
          if (prevState.includes(category)) {
            return prevState.filter(item => item !== category);
          } else {
            return [...prevState, category];
          }
        });
      };

    return (
        <>
            <section className="w-full h-full p-2 font-satoshi">
                <form className="flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit}>
                    <div className="bg-secondary-400 w-full h-full flex flex-col text-[12px] p-4 rounded-2xl gap-4">
                        <div className="flex flex-col gap-2 mb-2">
                            <p className="text-[24px] text-center">Les infos <span className="bg-secondary-300 text-secondary-200 rotate-3 inline-block">pricipales</span></p>
                            <p className="text-center">Pas de panique ! Vous pourrez ajouter d&apos;autres informations plus tard,
                                comme les types de lit par exemple.</p>
                        </div>
                        <div className="flex flex-col gap-3 mb-4">
                            {information}
                            <div className="w-full flex h-[0.5px] bg-primary bg-opacity-20 font-satoshi font-[13px] lg:text-[20px]"></div>
                        </div>
                    </div>
                    <div className="bg-secondary-400 w-full h-full flex flex-col text-[12px] p-4 rounded-2xl">
                        <div className="flex flex-col gap-2 mb-2">
                            <p className="text-[24px] text-center"><span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">Où</span> se situe votre logement ?</p>
                            <p className="text-center">Pas de panique ! Vous pourrez ajouter d&apos;autres informations plus tard,
                                comme les types de lit par exemple.</p>
                        </div>
                        <div className=" w-full flex flex-col gap-1 p-4">
                            <input
                            type="text"
                            id="country"
                            name="country"
                            value={localisation.country}
                            onChange={handleLocalisationChange}
                            placeholder="Pays"
                            className="border-[1px] border-opacity-15 border-primary border-solid bg-transparent rounded-lg p-2"
                            />
                            <input
                            type="text"
                            id="address"
                            name="address"
                            value={localisation.address}
                            onChange={handleLocalisationChange}
                            placeholder="Adresse"
                            className="border-[1px] border-opacity-15 border-primary border-solid bg-transparent rounded-lg p-2"
                            />
                            <div className="flex w-full ">
                                <input
                                    type="number"
                                    id="zip_code"
                                    name="zip_code"
                                    value={localisation.zip_code}
                                    onChange={(e) => setLocalisation({ ...localisation, zip_code: Number(e.target.value) })}
                                    placeholder="Code postal"
                                    className="border-[1px] border-opacity-15 border-primary border-solid bg-transparent rounded-lg p-2 w-2/3"
                                />
                                <input
                                type="text"
                                id="city"
                                name="city"
                                value={localisation.city}
                                onChange={handleLocalisationChange}
                                placeholder="Ville"
                                className="border-[1px] border-opacity-15 border-primary border-solid bg-transparent rounded-lg p-2"
                                />
                            </div>
                        
                            <input
                                type="text"
                                id="complementary_address"
                                name="complementary_address"
                                value={localisation.complementary_address}
                                onChange={handleLocalisationChange}
                                placeholder="Nom du batîment"
                                className="border-[1px] border-opacity-15 border-primary border-solid bg-transparent rounded-lg p-2"
                            />
                            <input
                                type="text"
                                id="code"
                                name="code"
                                placeholder="Code d'entrée"
                                className="border-[1px] border-opacity-15 border-primary border-solid bg-transparent rounded-lg p-2"
                            />
                        </div>
                    </div>
                    <div className="bg-secondary-400 w-full h-full flex flex-col text-[12px] p-4 rounded-2xl">
                        <div className="flex flex-col gap-2 mb-2">
                            <p className="text-[24px] text-center">De quel type est votre lieu de <span className="bg-secondary-300 text-secondary-200 rotate-3 inline-block">retrouvailles </span>?</p>
                            <p className="text-center">Laquelle décrit le mieux votre logement ?</p>
                        </div>
                        <div className="w-full flex flex-wrap justify-center p-3 gap-1">
                            {optionsType.map(option => (
                                <div
                                key={option.value}
                                className={`border-[1px] border-opacity-15 border-primary border-solid flex flex-col justify-center items-center gap-2 p-4 rounded-lg w-24 h-24 cursor-pointer ${type === option.value ? 'bg-gray-200' : ''}`}
                                onClick={() => handleType(option.value)}
                                >
                                <img src={option.imgSrc} alt={option.label} className="w-10 h-10" />
                                <p>{option.label}</p>
                                </div>
                            ))}
                        </div>
                    </div> 



                    <div className="bg-secondary-400 w-full h-full flex flex-col text-[12px] p-4 rounded-2xl gap-4">
                        <div className="flex flex-col gap-2 mb-2">
                            <p className="text-[24px] text-center">A quoi aurons <span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">accès</span> vos visiteurs ?</p>
                            <p className="text-center">Ce qui sera à la disposition des visiteurs.</p>
                        </div>
                        <div className="flex justify-center gap-2 w-full">
                            {accessData.map(option => (
                                <div
                                key={option.value}
                                className={`border-[1px] border-opacity-15 border-primary border-solid flex flex-col justify-center items-center gap-2 p-4 rounded-lg ${access === option.value ? 'bg-gray-200' : ''} cursor-pointer`}
                                onClick={() => handleAccess(option.value)}
                                >
                                <img src={option.imgSrc} alt={option.label} className="w-16 h-16" />
                                <p>{option.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-secondary-400 w-full h-full flex flex-col text-[12px] p-4 rounded-2xl gap-4">
                        <div className="flex flex-col gap-2 mb-2">
                            <p className="text-[24px] text-center">Quels <span className="bg-secondary-300 text-secondary-200 rotate-3 inline-block">équipements</span> seront à disposition ?</p>
                            <p className="text-center">Renseignez les équipements qui seront à la disposition de vos visiteurs.</p>
                        </div>
                        <div className="w-full flex flex-wrap justify-center p-3 gap-1">
                            {equipementsData.map(option => (
                                <div
                                key={option.key}
                                className={`border-[1px] border-opacity-15 border-primary border-solid flex flex-col justify-center items-center gap-2 p-4 rounded-lg w-24 h-24 cursor-pointer ${equipements[option.key] ? 'bg-gray-200' : ''}`}
                                onClick={() => handleEquipementClick(option.key)}
                                >
                                <img src={option.imgSrc} alt={option.label} className="w-10 h-10" />
                                <p>{option.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-secondary-400 w-full h-full flex flex-col text-[12px] p-4 rounded-2xl">
                        <div className="flex flex-col gap-2 mb-2">
                            <p className="text-[24px] text-center">Aidez les à se <span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">projeter</span></p>
                            <p className="text-center">Ajouter des photos. Minimum 3.</p>
                        </div>
                        <div className="w-full flex flex-wrap justify-center p-3 gap-1">
                            <div onClick={handleClick} className="border-[1px] border-opacity-15 border-primary border-solid flex flex-col justify-center items-center gap-2 p-4 rounded-lg h-48 w-32">
                                <img src="/images/logo_img.png" alt="logo image" />
                                <input type="file" name="file" ref={fileInputRef} onChange={handleFileChange} className="bg-red-200 h-full" style={{ display: 'none' }} />
                                {imageUrl ? <img src={imageUrl} alt="uploaded file" className="m-2" /> : null}
                            </div>
                                
                        </div>
                    </div>
                    <div className="bg-secondary-400 w-full h-full flex flex-col text-[12px] p-4 rounded-2xl">
                        <div className="flex flex-col gap-2 mb-2">
                            <p className="text-[24px] text-center">Dans quelle  <span className="bg-secondary-300 text-secondary-200 rotate-3 inline-block">catégorie</span> pourrait être votre bien ?</p>
                            <p className="text-center">Indiquez à vos visiteurs dans quelle ambiance ils seront.</p>
                        </div>
                        <div className="w-full flex flex-wrap justify-center p-3 gap-1">
                            {categories.map(category => (
                                <div
                                key={category}
                                className={`border-[1px] border-opacity-15 border-primary border-solid flex flex-col justify-center items-center gap-2 w-36 py-3 rounded-full cursor-pointer ${selectedCategories.includes(category) ? 'bg-gray-200' : ''}`}
                                onClick={() => handleCategoryClick(category)}
                                >
                                <p className="font-bold">{category}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-secondary-400 w-full h-full flex flex-col text-[12px] p-4 rounded-2xl">
                        <div className="flex flex-col gap-2 mb-2">
                            <p className="text-[24px] text-center">Choisissez un <span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">titre</span> et une description</p>
                            <p className="text-center">Un titre accrocheur sera un plus pour vos potentiels visiteurs.</p>
                        </div>
                        <div className="w-full flex flex-col">
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Inscris ton titre ici..."
                                className="border-[1px] border-opacity-15 border-primary border-solid bg-transparent rounded-lg p-2 m-2"
                            />
                            <textarea
                                id="description"
                                name="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Inscris ta description ici..."
                                className="border-[1px] border-opacity-15 border-primary border-solid bg-transparent rounded-lg p-2 m-2 h-40"
                            />
                        </div>
                    </div>
                    <div className="bg-secondary-400 w-full h-full flex flex-col text-[12px] p-4 rounded-2xl">
                        <div className="flex flex-col gap-2 mb-2">
                            <p className="text-[24px] text-center">Quel sera le <span className="bg-secondary-300 text-secondary-200 rotate-3 inline-block">prix</span> de votre escapade ?</p>
                            <p className="text-center">Indiquez un prix semblable au marché.</p>
                        </div>
                        <div className="relative inline-block">
                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={price}
                                onChange={(e) => setPrice(Number(e.target.value))}
                                className="border border-opacity-15 border-primary border-solid bg-transparent rounded-lg p-2 pr-8 m-2 w-full"
                                placeholder="0"
                            />
                            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none font-bold text-[20px]">
                                €
                            </span>
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-secondary-100 text-white rounded-lg p-2 m-2">
                        Créer
                    </button>
                </form>
            </section>
            {/* <div className="flex flex-col justify-center items-center p-8">
                

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
            </div> */}

        </>
    );
}
