interface Equipements {
    wifi: boolean;
    tv: boolean;
    clim: boolean;
    parking: boolean;
    breakfast: boolean;
}

interface Accessories {
    chain: boolean;
    cage: boolean;
    jacuzzi: boolean;
}

interface Time {
    "10-12": boolean;
    "12-14": boolean;
    "14-16": boolean;
    "16-18": boolean;
    "18-20": boolean;
    "20-22": boolean;
}

interface Localisation {
    address: string;
    complementary_address: string;
    city: string;
    zip_code: number;
    country: string;
}

interface AppartsProps {
    title: string;
    description: string;
    price: number;
    time: Time;
    localisation: Localisation;
    hote: string;
    people_number: number;
    room_number: number;
    equipements: Equipements;
    accessories: Accessories;
}

const Card: React.FC<AppartsProps> = ({title, description, price, time, localisation, hote, people_number, room_number, equipements, accessories}) => {
    return (
        <div className="bg-red-200 m-8 p-4 border border-solid border-black">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Prix: {price}€</p>
            <div>
                <h3>Heure disponible:</h3>
                <ul>
                    <li>10-12: {time["10-12"] ? "Oui" : "Non"}</li>
                    <li>12-14: {time["12-14"] ? "Oui" : "Non"}</li>
                    <li>14-16: {time["14-16"] ? "Oui" : "Non"}</li>
                    <li>16-18: {time["16-18"] ? "Oui" : "Non"}</li>
                    <li>18-20: {time["18-20"] ? "Oui" : "Non"}</li>
                    <li>20-22: {time["20-22"] ? "Oui" : "Non"}</li>
                </ul>
            </div>
            <div>
                <h3>Localisation:</h3>
                <ul>
                    <li>Adresse: {localisation.address}</li>
                    <li>Complément adresse: {localisation.complementary_address}</li>
                    <li>Ville: {localisation.city}</li>
                    <li>Code postal: {localisation.zip_code}</li>
                    <li>Pays: {localisation.country}</li>
                </ul>
            </div>
            <p>Hôte: {hote}</p>
            <p>Nombre de personnes: {people_number}</p>
            <p>Nombre de chambres: {room_number}</p>
            <div>
                <h3>Équipements:</h3>
                <ul>
                    <li>WiFi: {equipements.wifi ? "Oui" : "Non"}</li>
                    <li>TV: {equipements.tv ? "Oui" : "Non"}</li>
                    <li>Climatisation: {equipements.clim ? "Oui" : "Non"}</li>
                    <li>Parking: {equipements.parking ? "Oui" : "Non"}</li>
                    <li>Petit déjeuner: {equipements.breakfast ? "Oui" : "Non"}</li>
                </ul>
            </div>
            <div>
                <h3>Accessoires:</h3>
                <ul>
                    <li>Chaîne: {accessories.chain ? "Oui" : "Non"}</li>
                    <li>Cage: {accessories.cage ? "Oui" : "Non"}</li>
                    <li>Jacuzzi: {accessories.jacuzzi ? "Oui" : "Non"}</li>
                </ul>
            </div>
            <div className="w-full flex justify-end">
                <a className="bg-yellow-300 p-2 rounded-lg" href="/">
                    En savoir plus
                </a>
            </div>
        </div>
    );
};

export default Card;
