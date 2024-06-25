"use client";

export default function Section1(){
    return (
        <>
            <section className="W-full h-screen bg-secondary-200 text-secondary-200 flex flex-col justify-center items-center">
                <div className="w-full h-full bg-[url('/images/Union.png')] bg-center bg-no-repeat flex flex-col  items-center font-satoshi pt-10">
                    <div className="max-w-[380px] h-[400px] p-8 bg-[url('/images/blur.png')] bg-center bg-no-repeat">
                        <h2 className="text-[20px] font-bold">VIVEZ L&apos;EXPERIENCE D&apos;UNE INTIMITE RETROUVEE</h2>
                        <p className="text-[14px]">La première plateforme qui permet aux couples de se reconnecter à travers leurs désirs grâce à nos réservations à l’heure.</p>
                    </div>
                    <div className="w-full h-full flex flex-col justify-end items-center mb-28">
                        <div className="w-5/6 h-fit flex bg-secondary-200 justify-between items-center p-2 rounded-full text-[12px]">
                            <div className="w-full flex gap-2 text-primary font-bold">
                                <div className="w-full flex gap-2 items-center">
                                    <svg className="w-8 h-8 bg-primary p-2 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#FFFFFF" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                                    <p>Où ?</p>
                                </div>
                                <div className="w-full flex gap-2 items-center">
                                    <svg className="w-8 h-8 bg-primary p-2 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#FFFFFF" d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>
                                    <p>Quand ?</p>
                                </div>
                            </div>
                            <a className="bg-secondary-300 p-2 rounded-full" href="/room">Chercher</a>
                        </div>
                    </div>  
                </div>
            </section>
        </>
    );
}