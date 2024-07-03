"use client";

export default function CardComment2(props: any){
    return(
        <>
            <div className="w-full h-full bg-[#F4F3EB] text-[13px] rounded-2xl p-8 flex flex-col gap-4 lg:bg-white">
               <div className="flex items-center gap-4">
                    <img className="w-12 h-12 rounded-full" src={props.pic} alt="photo profil" />
                    <div className="flex flex-col">
                        <p className="text-[20px] font-bold">{props.name}</p>
                        <div className="flex">
                            <img className="w-5 h-auto" src="images/star.png" alt="stars" />
                            <img className="w-5 h-auto" src="images/star.png" alt="stars" />
                            <img className="w-5 h-auto" src="images/star.png" alt="stars" />
                            <img className="w-5 h-auto" src="images/star.png" alt="stars" />
                            <img className="w-5 h-auto" src="images/star.png" alt="stars" />
                        </div>
                    </div>
               </div>
               <div className="text-start flex flex-col gap-4">
                    <p>{props.description}</p>
                    <p className="font-bold">{props.date}</p>
               </div>
            </div>
       </>
    )
}