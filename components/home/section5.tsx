"use client";

export default function Section5(){
    return (
        <>
          <section className="w-full h-full px-2 text-[13px]">
            <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-2 justify-start  border border-solid border-gray-300 p-4 rounded-2xl">
                    <p className="font-bold">Des conseils amoureux savoureux qu&apos;une<br></br> nuit complète de sommeil :</p>
                    <p>Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit, sed do eiusmod tempor incididunt<br></br> ut labore et dolore.</p>
                    <div className="w-full flex justify-end ">
                        <svg className="w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                    </div>
                </div>
                <div className="w-full h-fit">
                    <img src="images/couple.png" alt="couple dans une chambre" />
                </div>
                <div className="flex gap-1">
                    <div className="bg-secondary-300 text-secondary-200 w-[49%] rounded-2xl p-4 flex flex-col">
                        <p className="font-bold">Les prépartion secrète :</p>
                        <p>Comment organiser une surprise romantique avec une location à l&apos;heure ?</p>
                        <div className="w-full flex justify-end ">
                            <svg className="w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#FFFFFF" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                        </div>
                    </div>
                    <div className="rounded-2xlflex flex-col w-[49%] h-fit">
                        <img src="images/couple1.png" alt="couple dans une chambre" />
                    </div>
                </div>
                <div className="relative w-full h-fit">
                    <img src="images/couple2.png" alt="couple dans une chambre" />
                    <div className="absolute top-0 left-0 h-full w-2/5 bg-transparent backdrop-blur-lg rounded-l-2xl border-r border-r-white"></div>
                </div>
            </div>
          </section>
        </>
    );
}