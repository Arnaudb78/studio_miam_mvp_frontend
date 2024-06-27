"use client";

export default function Section3(){
    return (
        <>
           <section className="w-full h-[803px] bg-[url('/images/brunch.png')] bg-center bg-no-repeat px-2 flex flex-col justify-end text-secondary-200">
                <div className="w-full h-fit bg-transparent backdrop-blur-lg rounded-2xl flex flex-col text-[13px] p-4">
                    <h2 className="text-[18px] font-bold">Réserver une chambre presque aussi vite que votre dernier rapport !</h2>
                    <div className="flex flex-col justify-start items-start p-8 gap-4">
                        <div className="flex justify-evenly gap-3">
                            <p className="w-fit h-fit border border-solid border-secondary-200 rounded-full p-1 px-[10px]">1</p>
                            <p>Choisissez une chambre parmi notre sélection celle qui vous convient.</p>
                        </div>
                        <div className="flex justify-evenly gap-3">
                            <p className="w-fit h-fit border border-solid border-secondary-200 rounded-full p-1 px-[10px]">2</p>
                            <p>Personnalisez votre séjour er réservez en toute tranquillité avec annulation gratuite.</p>
                        </div>
                        <div className="flex justify-evenly gap-3">
                            <p className="w-fit h-fit border border-solid border-secondary-200 rounded-full p-1 px-[10px]">3</p>
                            <p>Payez directement en ligne et profitez de votre séjour.</p>
                        </div>
                    </div>
                </div>
           </section>
        </>
    );
}