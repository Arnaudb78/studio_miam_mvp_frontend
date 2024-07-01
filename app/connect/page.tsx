"use client";

import Footer from "@/components/footer";
import FormConnect from "@/components/form/form-connect";
import FormCreate from "@/components/form/form-create";
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function Connect() {
    const [showSignup, setShowSignup] = useState(false);

    return (
        <>
            <Navbar />
            <div className="px-[10px] rounded-full w-full h-full">
                <div className="bg-[url('/images/bg_connect.png')] w-[369px] h-[743px] bg-no-repeat flex flex-col justify-center lg:hidden">
                    {showSignup ? <FormCreate setShowSignup={setShowSignup} /> : <FormConnect setShowSignup={setShowSignup} />}
                </div>
                <div className="hidden lg:flex lg:relative w-full h-full mt-10">
                    <img src="/images/bg_home_desk.png" alt="background" />
                    <div className="lg:absolute lg:top-0 lg:right-0 w-1/3">
                        {showSignup ? <FormCreate setShowSignup={setShowSignup} /> : <FormConnect setShowSignup={setShowSignup} />}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
