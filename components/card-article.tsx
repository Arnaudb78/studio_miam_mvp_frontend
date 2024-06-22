import { useRouter } from "next/navigation";

interface ArticleProps {
    _id: string;
    title: string;
    description: string;
    author: string;
}

const CardArticle: React.FC<ArticleProps> = ({ _id, title, description, author }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/articleDetails/${_id}`);
    };

    return (
        <div className="bg-secondary-200 flex flex-col gap-8 p-4 border border-solid border-black font-semibold rounded-lg">
            <div className="flex flex-col gap-4">
                <h2 className="font-semibold">{title}</h2>
                <p className="font-normal">{description}</p>
            </div>
            <div className="flex justify-center">
                <button onClick={handleClick} className="text-secondary-200 bg-secondary-100 py-2 px-4 rounded-full cursor-pointer">
                    Lire l&apos;article
                </button>
            </div>
        </div>
    );
};

export default CardArticle;
