"use client";

import CardComment from "../commentary/card-comment";

export default function Section4(){

    const data = [
        {
            pic: "images/profil1.png",
            name: "Hugo",
            description: "Nous avons réservé plusieurs fois sur cette application et nous avons toujours eu une super expériences. Les chambres sont propres et le système de boîte à clé.",
            date: "10h20 - 14 / 06 / 2024",
            className: "w-full h-full bg-secondary-400 text-[13px] rounded-2xl p-8 flex flex-col gap-4 lg:w-[30%]"
        },
        {
            pic: "images/profil2.png",
            name: "Charlotte",
            description: "La chambre était parfaite pour notre petite escapade en amoureux. L'accueil était chaleureux et discret, la chambre magnifique avec une ambiance très intime.",
            date: "10h20 - 14 / 06 / 2024",
            className: "w-full h-full bg-secondary-400 text-[13px] rounded-2xl p-8 flex flex-col gap-4 lg:w-[30%]"
        },
        {
            pic: "images/profil3.png",
            name: "Julie",
            description: "Cette plateforme est une vraie pépite pour les couples cherchant à se retrouver. La chambre était sublime, avec des installations de qualité. L'accueil était chaleureux et discret.",
            date: "10h20 - 14 / 06 / 2024",
            className: "w-full h-full bg-secondary-400 text-[13px] rounded-2xl p-8 flex flex-col gap-4 lg:w-[30%]"
        },
    ];

    const data2 = [
        {
            pic: "images/manon.png",
            name: "Manon",
            description: "Je voulais surprendre mon partenaire et je suis tombée sur cette plateforme. La réservation a été très facile et la chambre était encore mieux que sur les photos. Tout était propre et les équipements, comme le jacuzzi, étaient top. Une expérience à renouveler.",
            date: "10h20 - 14 / 06 / 2024",
        },
        {
            pic: "images/lucien.png",
            name: "Lucien",
            description: "Nous avons réservé une loveroom pour notre anniversaire de mariage, et c'était tout simplement parfait. La chambre était décorée avec goût, très romantique.",
            date: "10h20 - 14 / 06 / 2024",
        },
        {
            pic: "images/enzo.png",
            name: "Enzo",
            description: "Nous avons réservé plusieurs fois sur cette application et nous avons toujours eu une super expériences. Les chambres sont propres et le système de boîte à clé.",
            date: "10h20 - 14 / 06 / 2024",
        },
    ];

    const comments = data.map((comment, index) => {
        return <CardComment key={index} pic={comment.pic} name={comment.name} description={comment.description} date={comment.date} className={comment.className}/>
    })

    const comments2 = data2.map((comment, index) => {
        return <CardComment key={index} pic={comment.pic} name={comment.name} description={comment.description} date={comment.date}/>
    })
    
    return (
        <>
           <section className="w-full h-full p-2 lg:px-24 lg:flex lg:flex-col lg:gap-8">
                <div className="w-full p-6 text-center flex flex-col gap-2 lg:text-36px">
                    <h2 className="text-[24px] lg:hidden">Du chaos familial au <span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">paradis</span> romantique.</h2>
                    <p className="text-[16px] lg:hidden">Découvrez ce qu&apos;ils en disent !</p>
                    <h2 className="hidden lg:block lg:text-[36px]">Du chaos familial au <span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">paradis</span> romantique.</h2>
                    <p className="hidden lg:block lg:text-[36px]">Changer les couches pour des massages en duo !</p>
                </div>
                <div className="flex flex-col gap-1 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-4">
                    {comments}
                    <div className="hidden lg:flex lg:justify-center lg:items-center lg:gap-4">
                        {comments2}
                    </div>
                </div>
           </section>
        </>
    );
}