"use client";

import { useState, useEffect, FormEventHandler, useRef } from "react";
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
            const response = await fetch("https://pacific-reaches-55510-1cc818501846.herokuapp.com/apparts/", {
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
        { value: 'house', imgSrc: '/images/house.png', label: 'Logement entier' },
        { value: 'bed', imgSrc: '/images/bed.png', label: 'Chambre' }
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
             logo_class: "bg-[#E9E9E2] lg:w-10 lg:h-10 lg:p-2",
        },
        {
            name: "Salle de bain",
            icon: "/images/logo_shower.png",
            price: null,
             logo_class: "bg-[#E9E9E2] lg:w-10 lg:h-10 lg:p-2",
        },
        {
            name: "Voyageurs",
            icon: "/images/logo_people.png",
            price: null,
            logo_class: "bg-[#E9E9E2] lg:w-10 lg:h-10 lg:p-2",
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
        'Ecologique',
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
                <form className="flex flex-col justify-center items-center gap-4 lg:p-28 lg:gap-10" onSubmit={handleSubmit}>
                    <div className="bg-secondary-400 w-full h-full flex flex-col text-[12px] p-4 rounded-2xl gap-4 lg:text-[24px] lg:justify-center lg:items-center lg:gap-8 lg:p-12">
                        <div className="flex flex-col gap-2 mb-2 lg:w-4/5">
                            <p className="text-[24px] text-center lg:text-[36px]">Les infos <span className="bg-secondary-300 text-secondary-200 rotate-3 inline-block">pricipales</span></p>
                            <p className="text-center lg:hidden">Pas de panique ! Vous pourrez ajouter d&apos;autres informations plus tard,
                                comme les types de lit par exemple.</p>
                            <p className="hidden lg:block text-center">Pas de panique ! Vous pourrez ajouter d&apos;autres informations<br></br>plus tard,
                            comme les types de lit par exemple.</p>
                        </div>
                        <div className="flex flex-col gap-3 mb-4 lg:w-1/2 lg:gap-6">
                            {information}
                            <div className="w-full flex h-[0.5px] bg-primary bg-opacity-20 font-satoshi font-[13px] lg:text-[20px]"></div>
                        </div>
                    </div>
                    <div className="bg-secondary-400 w-full h-full flex flex-col text-[12px]  p-4 rounded-2xl lg:gap-8 lg:p-12">
                        <div className="flex flex-col gap-2 mb-2 lg:text-[24px]">
                            <p className="text-[24px] text-center lg:text-[36px]"><span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">Où</span> se situe votre logement ?</p>
                            <p className="text-center">Renseignez l&apos;endroit où se situe votre chambre. </p>
                        </div>
                        <div className="lg:flex lg:justify-center">
                            <div className=" w-full flex flex-col gap-1 p-4 lg:text-[16px] lg:w-1/2 lg:flex lg:justify-center lg:items-center">
                                <input
                                type="text"
                                id="country"
                                name="country"
                                value={localisation.country}
                                onChange={handleLocalisationChange}
                                placeholder="Pays"
                                className="border-[1px] border-opacity-15 border-primary border-solid bg-transparent rounded-lg p-2 lg:w-full lg:w-full"
                                />
                                <input
                                type="text"
                                id="address"
                                name="address"
                                value={localisation.address}
                                onChange={handleLocalisationChange}
                                placeholder="Adresse"
                                className="border-[1px] border-opacity-15 border-primary border-solid bg-transparent rounded-lg p-2 lg:w-full"
                                />
                                <div className="flex w-full ">
                                    <input
                                        type="number"
                                        id="zip_code"
                                        name="zip_code"
                                        value={localisation.zip_code}
                                        onChange={(e) => setLocalisation({ ...localisation, zip_code: Number(e.target.value) })}
                                        placeholder="Code postal"
                                        className="border-[1px] border-opacity-15 border-primary border-solid bg-transparent rounded-lg p-2 lg:w-full w-2/3"
                                    />
                                    <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={localisation.city}
                                    onChange={handleLocalisationChange}
                                    placeholder="Ville"
                                    className="border-[1px] border-opacity-15 border-primary border-solid bg-transparent rounded-lg p-2 lg:w-full"
                                    />
                                </div>
                            
                                <input
                                    type="text"
                                    id="complementary_address"
                                    name="complementary_address"
                                    value={localisation.complementary_address}
                                    onChange={handleLocalisationChange}
                                    placeholder="Nom du batîment"
                                    className="border-[1px] border-opacity-15 border-primary border-solid bg-transparent rounded-lg p-2 lg:w-full"
                                />
                                <input
                                    type="text"
                                    id="code"
                                    name="code"
                                    placeholder="Code d'entrée"
                                    className="border-[1px] border-opacity-15 border-primary border-solid bg-transparent rounded-lg p-2 lg:w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bg-secondary-400 w-full h-full flex flex-col text-[12px] p-4 rounded-2xl lg:justify-center lg:items-center lg:gap-8 lg:p-12">
                        <div className="flex flex-col gap-2 mb-2 lg:text-[24px]">
                            <p className="text-[24px] text-center lg:text-[36px]">De quel type est votre lieu de <span className="bg-secondary-300 text-secondary-200 rotate-3 inline-block">retrouvailles </span>?</p>
                            <p className="text-center">Laquelle décrit le mieux votre logement ?</p>
                        </div>
                        <div className="w-full flex flex-wrap justify-center p-3 gap-1 lg:w-3/5">
                            {optionsType.map(option => (
                                <div
                                key={option.value}
                                className={`border-[1px] border-opacity-15 border-primary border-solid flex flex-col justify-center items-center gap-2 p-4 rounded-lg w-24 h-24 cursor-pointer lg:w-36 ${type === option.value ? 'bg-gray-200' : ''}`}
                                onClick={() => handleType(option.value)}
                                >
                                    <img src={option.imgSrc} alt={option.label} className="w-10 h-10" />
                                    <p>{option.label}</p>
                                </div>
                            ))}
                        </div>
                    </div> 



                    <div className="bg-secondary-400 w-full h-full flex flex-col text-[12px] p-4 rounded-2xl gap-4 lg:gap-8 lg:p-12">
                        <div className="flex flex-col gap-2 mb-2 lg:text-[24px]">
                            <p className="text-[24px] text-center lg:text-[36px]">A quoi aurons <span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">accès</span> vos visiteurs ?</p>
                            <p className="text-center">Ce qui sera à la disposition des visiteurs.</p>
                        </div>
                        <div className="flex justify-center gap-2 w-full">
                            {accessData.map(option => (
                                <div
                                key={option.value}
                                className={`border-[1px] border-opacity-15 border-primary border-solid flex flex-col justify-center items-center gap-2 px-8 py-10 rounded-lg lg:px-10 lg:py-16 ${access === option.value ? 'bg-gray-200' : ''} cursor-pointer`}
                                onClick={() => handleAccess(option.value)}
                                >
                                    <img src={option.imgSrc} alt={option.label} className="w-16 h-16 lg:w-20 lg:h-20" />
                                    <p>{option.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-secondary-400 w-full h-full flex flex-col text-[12px] p-4 rounded-2xl gap-4 lg:justify-center lg:items-center lg:gap-8 lg:p-12">
                        <div className="flex flex-col gap-2 mb-2 lg:text-[24px]">
                            <p className="text-[24px] text-center lg:text-[36px]">Quels <span className="bg-secondary-300 text-secondary-200 rotate-3 inline-block">équipements</span> seront à disposition ?</p>
                            <p className="text-center">Renseignez les équipements qui seront à la disposition de vos visiteurs.</p>
                        </div>
                        <div className="w-full flex flex-wrap justify-center p-3 gap-1 lg:w-3/5">
                            {equipementsData.map(option => (
                                <div
                                key={option.key}
                                className={`border-[1px] border-opacity-15 border-primary border-solid flex flex-col justify-center items-center gap-2 p-4 rounded-lg w-24 h-24 cursor-pointer lg:w-36 ${equipements[option.key] ? 'bg-gray-200' : ''}`}
                                onClick={() => handleEquipementClick(option.key)}
                                >
                                <img src={option.imgSrc} alt={option.label} className="w-10 h-10" />
                                <p className="text-center">{option.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-secondary-400 w-full h-full flex flex-col text-[12px] p-4 rounded-2xl lg:p-12">
                        <div className="flex flex-col gap-2 mb-2 lg:text-[24px]">
                            <p className="text-[24px] text-center lg:text-[36px]">Aidez les à se <span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">projeter</span></p>
                            <p className="text-center">Ajouter des photos. Minimum 3.</p>
                        </div>
                        <div className="w-full flex flex-wrap justify-center p-3 gap-1">
                            <div onClick={handleClick} className="border-[1px] border-opacity-15 border-primary border-solid flex flex-col justify-center items-center gap-2 p-4 rounded-lg h-48 w-32">
                                <img src="/images/logo_img.png" alt="logo image" />
                                <input type="file" name="file" ref={fileInputRef} onChange={handleFileChange} className="bg-red-200 h-full" style={{ display: 'none' }} />
                                {imageUrl ? <img src={imageUrl} alt="uploaded file" className="m-2" /> : null}
                            </div>
                            <div onClick={handleClick} className="hidden lg:border-[1px] lg:border-opacity-15 lg:border-primary lg:border-solid lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-2 lg:p-4 lg:rounded-lg lg:h-48 lg:w-32">
                                <img src="/images/logo_img.png" alt="logo image" />
                                <input type="file" name="file" ref={fileInputRef} onChange={handleFileChange} className="bg-red-200 h-full" style={{ display: 'none' }} />
                                {imageUrl ? <img src={imageUrl} alt="uploaded file" className="m-2" /> : null}
                            </div>
                            <div onClick={handleClick} className="hidden lg:border-[1px] lg:border-opacity-15 lg:border-primary lg:border-solid lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-2 lg:p-4 lg:rounded-lg lg:h-48 lg:w-32">
                                <img src="/images/logo_img.png" alt="logo image" />
                                <input type="file" name="file" ref={fileInputRef} onChange={handleFileChange} className="bg-red-200 h-full" style={{ display: 'none' }} />
                                {imageUrl ? <img src={imageUrl} alt="uploaded file" className="m-2" /> : null}
                            </div>
                        </div>
                    </div>
                    <div className="bg-secondary-400 w-full h-full flex flex-col text-[12px] p-4 rounded-2xl lg:justify-center lg:items-center lg:gap-8 lg:p-12">
                        <div className="flex flex-col gap-2 mb-2 lg:text-[24px]">
                            <p className="text-[24px] text-center lg:text-[36px]">Dans quelle  <span className="bg-secondary-300 text-secondary-200 rotate-3 inline-block">catégorie</span> pourrait être votre bien ?</p>
                            <p className="text-center">Indiquez à vos visiteurs dans quelle ambiance ils seront.</p>
                        </div>
                        <div className="w-full flex flex-wrap justify-center p-3 gap-1 lg:w-4/5 lg:gap-8">
                            {categories.map(category => (
                                <div
                                key={category}
                                className={`border-[1px] border-opacity-15 border-primary border-solid flex flex-col justify-center items-center gap-2 w-36 py-3 rounded-full cursor-pointer ${selectedCategories.includes(category) ? 'bg-gray-200' : ''}`}
                                onClick={() => handleCategoryClick(category)}
                                >
                                <p className="font-bold lg:text-[16px]">{category}</p>
                                </div>
                            ))}
                        </div>
                    </div> 
                    <div className="bg-secondary-400 w-full h-full flex flex-col text-[12px] p-4 rounded-2xl lg:flex lg:justify-center lg:items-center lg:gap-8 lg:p-12">
                        <div className="flex flex-col gap-2 mb-2 lg:text-[24px]">
                            <p className="text-[24px] text-center lg:hidden">Choisissez un <span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">titre</span> et une description</p>
                            <p className="hidden lg:text-center lg:block lg:text-[36px]">Choisissez un <span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">titre</span> et une <span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">description</span></p>
                            <p className="text-center">Un titre accrocheur sera un plus pour vos potentiels visiteurs.</p>
                        </div>
                        <div className="w-full flex flex-col lg:text-[16px] lg:w-1/2">
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
                    <div className="bg-secondary-400 w-full h-full flex flex-col text-[12px] p-4 rounded-2xl lg:flex lg:justify-center lg:items-center lg:gap-8 lg:p-12">
                        <div className="flex flex-col gap-2 mb-2 lg:text-[24px]">
                            <p className="text-[24px] text-center lg:text-[36px]">Quel sera le <span className="bg-secondary-300 text-secondary-200 rotate-3 inline-block lg:bg-secondary-100">prix</span> de votre escapade ?</p>
                            <p className="text-center">Indiquez un prix semblable au marché.</p>
                        </div>
                        <div className="relative inline-block lg:text-[16px] lg:w-1/3">
                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={price}
                                onChange={(e) => setPrice(Number(e.target.value))}
                                className="border border-opacity-15 border-primary border-solid bg-transparent rounded-lg p-2 pr-8 m-2 w-full lg:p-6"
                                placeholder="0"
                            />
                            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none font-bold text-[20px]">
                                €
                            </span>
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-secondary-100 text-white rounded-lg p-2 m-2 lg:text-[20px] lg:bg-secondary-300 lg:w-1/5 lg:rounded-full lg:cursor-pointer">
                        Publier l&apos;annonce
                    </button>
                </form>
            </section>
        </>
    );
}
