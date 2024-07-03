"use client";

import CardArticle from "@/components/article/card-article";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";

interface ArticlesProps {
    _id: string;
    title: string;
    description: string;
    content: string;
    author: string;
    date: string;
    image: string;
}

export default function ArticlesPage() {
    const [article, setArticle] = useState<ArticlesProps[]>([]);
    const getData = async () => {
        const response = await fetch("http://localhost:5001/articles");
        const data = await response.json();

        const articleImages = [
            { image: "/images/article1.jpg" },
            { image: "/images/article2.jpg" },
            { image: "/images/article3.jpg" },
            { image: "/images/article4.jpg" },
        ];

        // Associer les images aux articles
        const articlesWithImages = data.map((article: ArticlesProps, index: number) => ({
            ...article,
            image: articleImages[index % articleImages.length].image,
        }));

        setArticle(articlesWithImages);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Navbar />
            <section className="w-full h-full p-8 flex flex-col justify-center items-center gap-8 bg-secondary-200 font-satoshi lg:p-8 lg:gap-10">
                <img src="/images/bg_blog.png" alt="couple se retrouvant" className="hidden lg:block" />
                <p className="text-[20px] text-center lg:hidden">Des  <span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">conseils</span>  amoureux plus savoureux  qu&apos;une nuit complète de sommeil</p>
                <p className="hidden lg:block lg:text-center lg:text-[40px]">Des conseils  amoureux plus<br></br> <span className="bg-secondary-300 text-secondary-200 rotate-3 inline-block">savoureux</span>  qu&apos;une nuit complète de sommeil</p>
                <div className="">
                    {article.map((article, index) => (
                        <CardArticle key={index} {...article} />
                    ))}
                    <div className="w-full flex h-[0.5px] bg-primary bg-opacity-20 font-Yopsatoshi font-[13px] lg:text-[20px] font-satoshi"></div>
                </div>
                <button className="bg-secondary-300 py-2 px-4 rounded-full cursor-pointer text-[14px] text-secondary-200 w-1/2 lg:text-[20px] lg:w-1/5">
                        En voir plus
                </button>
            </section>
            <Footer />
        </>
    );
}
