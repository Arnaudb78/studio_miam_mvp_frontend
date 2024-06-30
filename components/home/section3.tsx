"use client";

export default function Section3(){
    return (
        <>
        <section className="relative w-full h-full p-2 flex flex-col justify-center items-center text-secondary-200 font-satoshi lg:p-8">
            <img className="lg:hidden" src="/images/brunch.png" alt="brunch du matin" />
            <img className="hiddenn lg:flex" src="/images/flower_desk.png" alt="brunch du matin" />

            <div className="absolute bottom-0 w-[372px] h-fit bg-transparent backdrop-blur-lg rounded-2xl flex flex-col text-[13px] p-4 lg:top-8 lg:left-8 lg:backdrop-blur-xl lg:bg-black/30 lg:w-1/2 lg:p-8">
                    <h2 className="text-[18px] font-bold lg:text-[28px]">Réserver une chambre presque aussi vite que votre dernier rapport !</h2>
                    <div className="flex flex-col justify-start items-start p-8 gap-4 lg:text-[18px] lg:w-4/5 lg:gap-[38px]">
                        <div className="flex justify-evenly gap-3 lg:gap-6">
                            <p className="w-fit h-fit border border-solid border-secondary-200 rounded-full p-1 px-[10px] lg:px-3">1</p>
                            <p>Choisissez une chambre parmi notre sélection celle qui vous convient.</p>
                        </div>
                        <div className="flex justify-evenly gap-3 lg:gap-6">
                            <p className="w-fit h-fit border border-solid border-secondary-200 rounded-full p-1 px-[10px] lg:px-3">2</p>
                            <p>Personnalisez votre séjour er réservez en toute tranquillité avec annulation gratuite.</p>
                        </div>
                        <div className="flex justify-evenly gap-3 lg:gap-6">
                            <p className="w-fit h-fit border border-solid border-secondary-200 rounded-full p-1 px-[10px] lg:px-3">3</p>
                            <p>Payez directement en ligne et profitez de votre séjour.</p>
                        </div>
                    </div>
                </div>
        </section>
        </>
    );
}