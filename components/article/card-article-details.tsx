"use client";
import { useEffect, useState } from "react";
import Navbar from "../navbar";

const CardArticleDetails: React.FC<{ id: string }> = ({ id }) => {
    const [article, setArticle] = useState<any>(null);

    useEffect(() => {
        fetch(`https://pacific-reaches-55510-1cc818501846.herokuapp.com/articles/${id}`)
            .then((response) => response.json())
            .then((data) => setArticle(data));
    }, [id]);

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <Navbar />
            <div className="bg-secondary-200 p-4 border border-solid border-black font-semibold rounded-lg">
                <h2 className="font-semibold">{article.title}</h2>
                <p className="font-normal">{article.content}</p>
                <p className="font-normal">Author: {article.author}</p>
            </div>
        </>
    );
};

export default CardArticleDetails;
