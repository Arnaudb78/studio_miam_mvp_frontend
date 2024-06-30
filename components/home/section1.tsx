"use client";

import { useRouter } from "next/navigation";

export default function Section1(){
    const router = useRouter();

    const handleClick = () => {
        router.push("/room")
    }

    return (
        <>
            <section className="w-full h-full relative p-2 font-satoshi text-secondary-200 lg:hidden">
                <img src="/images/Union.png" alt="Union" />
                <div className="w-[375px] absolute top-2 left-2 backdrop-blur-md p-6 flex flex-col gap-4 rounded-2xl">
                    <h2 className="text-[20px] font-bold">VIVEZ L&apos;EXPERIENCE D&apos;UNE INTIMITE RETROUVEE</h2>
                    <p className="text-[14px]">La première plateforme qui permet aux couples de se reconnecter.</p>
                    <div className="w-full flex justify-between items-center bg-secondary-200 p-2 rounded-full text-[11px]">
                        <div className="flex justify-start w-full gap-2">
                            <svg className="w-6 h-6 bg-primary p-2 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    fill="#FFFFFF"
                                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="Rechercher un appart"
                                className="w-full text-start bg-transparent text-primary font-satoshi"
                            />
                        </div>
                        <button onClick={handleClick} className="bg-secondary-300 py-2 px-4 rounded-full text-secondary-200">Chercher</button>
                    </div>
                </div>
            </section>
            <section className="hidden lg:relative lg:flex lg:w-full lg:h-full lg:mt-10 lg:p-8 lg:text-secondary-200">
                <img className="w-full" src="/images/bg_home_desk.png" alt="Union" />
                <div className="lg:absolute lg:top-8 lg:left-10 lg:w-3/6 lg:h-1/2 p-10">
                    <h2 className="text-[40px] font-bold">VIVEZ L&apos;EXPERIENCE D&apos;UNE INTIMITE RETROUVEE</h2>
                    <p className="text-[24px]">La première plateforme qui permet aux couples de se reconnecter à travers leurs désirs grâce à nos réservations à l’heure.</p>
                </div>
                <div className="lg:absolute w-1/3 bottom-40 left-20 flex justify-between items-center bg-secondary-200 p-2 rounded-full text-[14px]">
                        <div className="flex justify-start w-full gap-2">
                            <svg className="w-8 h-8 bg-primary p-2 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    fill="#FFFFFF"
                                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="Rechercher un appart"
                                className="w-full text-start bg-transparent text-primary font-satoshi"
                            />
                        </div>
                        <button onClick={handleClick} className="bg-secondary-300 py-2 px-4 rounded-full text-secondary-200">Chercher</button>
                    </div>
            </section>
        </>
    );
}