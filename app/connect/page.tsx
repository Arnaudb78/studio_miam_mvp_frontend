"use client";

import FormConnect from "@/components/form/form-connect";
import FormCreate from "@/components/form/form-create";
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function Connect() {
    const [showSignup, setShowSignup] = useState(false);

    return (
        <div className="px-[10px] rounded-full w-full h-full">
            <Navbar />
            <div className="bg-[url('/images/bg_connect.png')] w-[369px] h-[743px] bg-no-repeat flex flex-col justify-center">
                {showSignup ?  <FormCreate setShowSignup={setShowSignup} /> : <FormConnect setShowSignup={setShowSignup} />}
            </div>
        </div>
    );
}
