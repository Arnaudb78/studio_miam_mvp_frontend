"use client";

export default function Section6(){
    return (
        <>
          <section className="p-2 flex flex-col gap-4">
                <div className="w-full h-full bg-primary rounded-2xl text-secondary-200 p-8 flex flex-col gap-4">
                    <h2 className="text-center text-[18px]">
                        Inscrivez-vous à notre newsletter!<br></br>
                        Promis, c&apos;est plus excitant qu&apos;un<br></br>
                        épisode de Peppa Pig.
                    </h2>
                    <div className="text-[12px] w-full bg-secondary-200 flex justify-between py-2 rounded-full px-2">
                        <input className="w-full" type="text" placeholder="inscris ton mail ici..." />
                        <button className="bg-secondary-300 rounded-full p-1">Envoyer</button>
                    </div>
                </div>
                <div className="flex flex-col text-[12px] gap-4 p-2">
                    <h2 className="text-[24px]">Si vous avez des  <span className="bg-secondary-100 text-secondary-200 rotate-3 inline-block">questions</span><br></br> checkez ici !</h2>
                    <div className="h-[0.5px] w-full bg-primary"></div>
                    <p className="cursor-pointer">Est-ce que ma banque va voir ma réservation ?</p>
                    <div className="h-[0.5px] w-full bg-primary"></div>
                    <p className="cursor-pointer">Est-ce que je peux annuler ma réservation à tout moment  ?</p>
                    <div className="h-[0.5px] w-full bg-primary"></div>
                    <p className="cursor-pointer">Est-ce que je vais devoir rencontrer les hôtes pour entrer dans le logement ?</p>
                    <div className="h-[0.5px] w-full bg-primary"></div>
                    <p className="cursor-pointer">Comment se passe le système de nettoyage des chambre ?</p>
                    <div className="h-[0.5px] w-full bg-primary"></div>
                    <p className="cursor-pointer">Comment se passe le checking des chambres ?</p>
                    <div className="h-[0.5px] w-full bg-primary"></div>
                </div>
          </section>
        </>
    );
}