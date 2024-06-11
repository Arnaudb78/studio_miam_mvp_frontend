import { useRouter } from "next/navigation";

interface Localisation {
    address: string;
    complementary_address: string;
    city: string;
    zip_code: number;
    country: string;
}

interface AppartsProps {
    _id: string;
    title: string;
    description: string;
    price: number;
    localisation: Localisation;
    hote: string;
    type: string;
}

const CardAppart: React.FC<AppartsProps> = ({ _id, description, price, localisation, hote }) => {
    const router = useRouter();

    const handleClick = () => {
        console.log("click", _id);
        router.push(`/details/${_id}`);
    };
    return (
        <div className="bg-secondary-200 flex flex-col gap-8 p-4 border border-solid border-black font-semibold rounded-lg">
            <div className="flex flex-col gap-4">
                <h2 className="font-semibold">
                    {localisation.city}, {localisation.country}
                </h2>
                <p className="font-normal">{description}</p>
            </div>
            <div className="flex justify-between">
                <p>{hote}</p>
                <p>{price} $</p>
            </div>
            <div className="flex justify-center">
                <button onClick={handleClick} className="text-secondary-200 bg-secondary-100 py-2 px-4 rounded-full cursor-pointer">
                    Réserver en vitfesse
                </button>
            </div>
        </div>
    );
};

export default CardAppart;
