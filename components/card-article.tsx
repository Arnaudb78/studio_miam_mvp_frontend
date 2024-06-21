"use client";

interface CardArticleProps {
    id: number;
    title: string;
    description: string;
    content: string;
    author: string;
    date: string;
}

const CardArticle: React.FC<CardArticleProps> = ({ id, title, description, content, author, date }) => {
    return (
        <div className=" bg-secondary-200 w-fit p-4 rounded-lg ">
            <div className="flex flex-col gap-4">
                <h5>{title}</h5>
                <h6>{author}</h6>
                <p className="">{description}</p>
                <p>{date}</p>
                <a className="bg-secondary-100 text-secondary-200 rounded-full px-4 py-2" href={`/articles/${id}`}>
                    Lire la suite
                </a>
            </div>
        </div>
    );
}

export default CardArticle;