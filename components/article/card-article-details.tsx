"use client";
import { useEffect, useState } from "react";
import Navbar from "../navbar";
import Footer from "../footer";

const image = "/images/article1.jpg";
const image2 = "/images/article2.jpg";

const CardArticleDetails: React.FC<{ id: string }> = ({ id }) => {
    const [article, setArticle] = useState<any>(null);

    useEffect(() => {
        fetch(`http://localhost:5001/articles/${id}`)
            .then((response) => response.json())
            .then((data) => setArticle(data));
    }, [id]);

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />
            <section className="w-full p-4 flex flex-col gap-4 justify-center font-satoshi">
            <p className="text-[20px] text-center">Des  <span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">conseils</span>  amoureux plus savoureux  qu&apos;une nuit complète de sommeil</p>
            <p className="text-[16px] mt-10">Pourquoi l&apos;intimité est-elle importante ?</p>
            <div className="w-full flex h-[0.5px] bg-primary bg-opacity-20 font-Yopsatoshi font-[13px] lg:text-[20px] px-2"></div>
            <div className="w-full flex flex-col gap-4">
                <img src={image} alt="photo de l'article" className="rounded-2xl h-[150px] object-cover" />
                <p className="text-[12px]">{article.content}</p>
            </div>
            <div className="w-full flex h-[0.5px] bg-primary bg-opacity-20 font-Yopsatoshi font-[13px] lg:text-[20px] px-2"></div>
                <img src={image2} alt="photo de l'article" className="rounded-2xl h-[150px] object-cover" />
                <p className="text-[12px]">{article.content}</p>
            </section>
            <Footer />
        </>
    );
};

export default CardArticleDetails;
