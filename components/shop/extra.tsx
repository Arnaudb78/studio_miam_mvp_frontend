"use client";

import { useState } from "react";

export default function Extra(props: any){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
      };
    
      const decrement = () => {
        setCount(count - 1);
      };

    return(
        <>
            <div className="w-full flex h-[0.5px] bg-primary font-satoshi font-[13px]"></div>
            <div className="w-full flex justify-between items-center">
                <div className="flex justify-start items-center gap-2 w-full">
                    <img src={props.icon} alt={`icone de ${props.name}`} />
                    <p>{props.name}</p>
                </div>
                <div className="w-2/4">{props.price}€</div>
                <div className="flex items-center gap-2">
                    <button onClick={decrement} className="bg-[#F4F3EB] w-6 h-6 rounded-full flex justify-center items-center">-</button>
                        <p>{count}</p>
                    <button onClick={increment} className="bg-[#F4F3EB] w-6 h-6 rounded-full flex justify-center items-center">+</button>
                </div>
            </div>
        </>
    )
}