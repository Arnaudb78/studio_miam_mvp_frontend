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

interface CardProps {
    title: string;
    description: string;
    price: number;
    date: string;
    localisation: string;
    hote: string;
    people_number: number;
    room_number: number;
    equipements: Equipements;
    accessories: Accessories;
}

const Card: React.FC<CardProps> = ({ title, description, price, date, localisation, hote, people_number, room_number, equipements, accessories }) => {
    return (
        <div className="bg-red-200 m-8 p-4 border border-solid border-black">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Prix: {price}€</p>
            <p>Date: {date}</p>
            <p>Localisation: {localisation}</p>
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
