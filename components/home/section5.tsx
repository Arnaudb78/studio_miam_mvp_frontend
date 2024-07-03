"use client";
import { useRouter } from "next/navigation";

export default function Section5(){

    const router = useRouter();

    const handleclick = () => {
        router.push('/articles');
    }
    return (
        <>
          <section className="w-full h-full px-2 text-[13px] lg:p-8">
            <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1 lg:w-full lg:flex lg:flex-row lg:gap-1">
                    <div className="flex flex-col gap-2 justify-start  border border-solid border-gray-300 p-4 rounded-2xl lg:text-[20px] lg:w-full lg:border lg:border-solid lg:border-primary">
                        <p className="font-bold">Des conseils amoureux savoureux qu&apos;une<br></br> nuit complète de sommeil :</p>
                        <p>Et si des conseils amoureux pouvaient être plus revitalisants et savoureux qu&apos;une bonne nuit de sommeil ?</p>
                        <div className="w-full flex justify-end ">
                            <svg className="w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                        </div>
                    </div>
                    <div className="w-full h-fit">
                        <img className="lg:hidden" src="images/couple.png" alt="couple dans une chambre" />
                        <img className="hidden lg:block" src="images/couple_desk.png" alt="couple dans une chambre" />
                    </div>
                </div>
                <div className=" flex flex-col lg:flex lg:flex-row-reverse lg:w-full lg:h-fit gap-1 2xl:w-full 2xl:pr-4">
                    <div className="flex gap-1 w-full h-full lg:w-full lg:h-full">
                        <div className="bg-secondary-300 text-secondary-200 w-[49%] rounded-2xl p-4 flex flex-col gap-4 lg:w-full lg:h-full lg:p-8 lg:gap-12 lg:justify-between xl:h-[337px] 2xl:h-[350px]">
                            <p className="font-bold lg:text-[20px]">Les prépartion secrète :</p>
                            <p className="lg:text-[16px]">Et si on vous aidait pour les préparatifs d&apos;une expérience inoubliable ?</p>
                            <div className="w-full flex justify-end gap-2">
                                <button onClick={handleclick} className="underline cursor-pointer">Lire l&apos;article</button>
                                <svg className="w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#FFFFFF" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                            </div>
                        </div>
                        <div className="rounded-2xl flex flex-col w-[49%] h-fit lg:w-full lg:h-full">
                            <img className="lg:hidden" src="images/couple1.png" alt="couple dans une chambre buvant un café" />
                            <img className="hidden lg:block lg:w-full lg:h-full lg:object-cover lg:rounded-2xl xl:h-[337px] 2xl:h-[350px]" src="images/couple1_desk.png" alt="couple dans une chambre buvant un café" />
                        </div>
                    </div>
                    <div className="relative w-full h-fit">
                        <img className="lg:hidden" src="images/couple2.png" alt="couple dans une chambre" />
                        <img className="hidden lg:block lg:w-full lg:h-full" src="images/couple2_desk.png" alt="couple dans une chambre" />
                        <div className="absolute top-0 left-0 h-full w-2/5 bg-transparent backdrop-blur-lg rounded-l-2xl border-r border-r-white"></div>
                    </div>
                </div>
            </div>
          </section>
        </>
    );
}