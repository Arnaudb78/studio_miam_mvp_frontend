"use client";

export default function CardComment(props: any){
    return(
        <>
            <div className={props.className}>
               <div className="flex items-center gap-4">
                    <img className="w-12 h-12 rounded-full" src={props.pic} alt="photo profil" />
                    <div className="flex flex-col">
                        <p className="text-[20px] font-bold">{props.name}</p>
                        <p>* * * * *</p>
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