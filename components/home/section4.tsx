"use client";

import CardComment from "../commentary/card-comment";

export default function Section4(){

    const data = [
        {
            pic: "images/profil1.png",
            name: "Hugo",
            description: "Nous avons réservé plusieurs fois sur cette application et nous avons toujours eu une super expériences. Les chambres sont propres et le système de boîte à clé.",
            date: "10h20 - 14 / 06 / 2024"
        },
        {
            pic: "images/profil2.png",
            name: "Charlotte",
            description: "Nous avons réservé plusieurs fois sur cette application et nous avons toujours eu une super expériences. Les chambres sont propres et le système de boîte à clé.",
            date: "10h20 - 14 / 06 / 2024"
        },
        {
            pic: "images/profil3.png",
            name: "Julie",
            description: "Nous avons réservé plusieurs fois sur cette application et nous avons toujours eu une super expériences. Les chambres sont propres et le système de boîte à clé.",
            date: "10h20 - 14 / 06 / 2024"
        },
    ];

    const comments = data.map((comment, index) => {
        return <CardComment className="flex flex-col gap-4" key={index} pic={comment.pic} name={comment.name} description={comment.description} date={comment.date} />
    })
    
    return (
        <>
           <section className="w-full h-full p-2">
                <div className="w-full p-6 text-center flex flex-col gap-2">
                    <h2 className="text-[24px]">Du chaos familial au <span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">paradis</span> romantique.</h2>
                    <p className="text-[16px]">Découvrez ce qu&apos;ils en disent !</p>
                </div>
                <div className="flex flex-col gap-1">
                    {comments}
                </div>
           </section>
        </>
    );
}