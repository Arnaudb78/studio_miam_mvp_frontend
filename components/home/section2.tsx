"use client";

export default function Section2(){
    return (
        <>
           <section className="p-2 font-satoshi flex flex-col gap-10">
                <div className="w-full flex justify-center text-center text-[12px] font-bold gap-1">
                    <div className="w-full flex flex-col items-center bg-[#F4F3EB] p-4 rounded-2xl gap-8">
                        <img src="images/pink_square.png" alt="logo" className="w-10 h-10" />
                        <p>Annulation gratuite<br />jusqu&apos;à la dernière minute</p>
                    </div>
                    <div className="w-full flex flex-col items-center bg-[#F4F3EB] p-4 rounded-2xl gap-8">
                        <img src="images/green_square.png" alt="logo" className="w-10 h-10" />
                        <p>Paiement en ligne<br />pour une discrétion totale</p>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="text-center">
                        <h2 className="text-[24px]">Nos <span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">chambres</span> vous attendent !</h2>
                        <p className="text-[16px] px-8">Faites une pause des réunions Zoom 
                        et des cris d&apos;enfants ?</p>
                    </div>
                    <div className="flex overflow-x-auto whitespace-nowrap w-full">
                        <div className="w-full h-w-full mr-1 flex-zero-zero-auto"><a href="/room" className="bg-[url('/images/room1.png')] w-full h-[298px] bg-no-repeat bg-center flex flex-col justify-end items-center cursor-pointer">
                        </a></div>
                        <div className="w-full h-w-full mr-1 flex-zero-zero-auto"><a href="/room" className="bg-[url('/images/room1.png')] w-full h-[298px] bg-no-repeat bg-center flex flex-col justify-end items-center cursor-pointer">
                        </a></div>
                        <div className="w-full h-w-full mr-1 flex-zero-zero-auto"><a href="/room" className="bg-[url('/images/room1.png')] w-full h-[298px] bg-no-repeat bg-center flex flex-col justify-end items-center cursor-pointer">
                        </a></div>
                        <div className="w-full h-w-full mr-1 flex-zero-zero-auto"><a href="/room" className="bg-[url('/images/room1.png')] w-full h-[298px] bg-no-repeat bg-center flex flex-col justify-end items-center cursor-pointer">
                        </a></div>
                    </div>
                    <div className="w-full flex justify-center text-secondary-200 text-[14px]">
                        <a className="bg-secondary-300 p-2 rounded-full cursor-pointer" href="/room">En savoir plus</a>
                    </div>
                </div>
           </section>
        </>
    );
}