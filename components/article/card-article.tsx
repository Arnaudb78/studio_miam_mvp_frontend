import { useRouter } from "next/navigation";

interface ArticleProps {
    _id: string;
    title: string;
    description: string;
    content: string;
    author: string;
    image: string;
}

const CardArticle: React.FC<ArticleProps> = ({ _id, title, description, content, image }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/articleDetails/${_id}`);
    };

    return (
        <>
            <div className="w-full flex h-[0.5px] bg-primary bg-opacity-20 font-Yopsatoshi font-[13px] lg:text-[20px]"></div>
            <div className="font-satoshi">
                <div className="w-full flex justify-between pt-4 lg:hidden">
                    <p className="font-bold">MAI</p>
                    <img className="w-32 h-32 object-cover rounded-2xl" src={image} alt="photo de couple" />
                    <p className="hidden lg:block lg:text-[20px] ">{title}</p>
                    <p className="text-[12px] w-1/3 lg:text-[16px]">{description}</p>
                </div>
                <div className="hidden w-full lg:flex lg:px-28 lg:py-10 lg:justify-evenly">
                    <p className="font-bold text-[24px]">MAI</p>
                    <div className="flex justify-end w-full gap-8">
                        <img className="w-64 h-64 object-cover rounded-2xl" src={image} alt="photo de couple" />
                        <div className="flex flex-col items-end gap-4 w-3/5">
                            <p className="text-[12px] lg:text-[22px] font-bold">{description}</p>
                            <p className="text-[16px]">Ce charmant appartement fonctionnel disposant d&apos;un balcon donnant
                                 côté cour est parfait pour découvrir Paris. Ce charmant appartement 
                                 fonctionnel disposant d&apos;un balcon donnant côté cour est parfait 
                                 pour découvrir Paris. Ce charmant appartement fonctionnel disposant 
                                 d&apos;un balcon donnant côté cour est parfait pour découvrir Paris.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end lg:px-28">
                    <button onClick={handleClick} className="py-2 px-4 rounded-full underline text-[10px] cursor-pointer lg:text-[16px]">
                        En lire plus
                    </button>
                </div>
            </div>
        </>
    );
};

export default CardArticle;
