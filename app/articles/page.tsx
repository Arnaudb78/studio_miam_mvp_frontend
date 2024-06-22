"use client";

import CardArticle from "@/components/card-article";
import Navbar from "@/components/navbar"
import { useEffect, useState } from "react";

interface ArticlesProps {
    id: number;
    title: string;
    description: string;
    content: string;
    author: string;
    date: string;
}

export default function ArticlesPage() {
    const [article, setArticle] = useState<ArticlesProps[]>([]);
    //http://localhost:5001
    //https://pacific-reaches-55510-1cc818501846.herokuapp.com/articles
    const getData = async () => {
        const response = await fetch("http://localhost:5001/articles");
        const data = await response.json();
        setArticle(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Navbar />
            <section className="w-full h-full p-8 flex flex-col gap-8 bg-primary">
                    {article.map((article, index) => (
                        <CardArticle key={index} {...article} />
                    ))}
            </section>
        </>
    );
}