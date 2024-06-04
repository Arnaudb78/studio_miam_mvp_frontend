"use client";

import FormConnect from "@/components/form-connect";
import FormCreate from "@/components/form-create";
import Navbar from "@/components/navbar";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

export default function Connect() {
    const [showSignup, setShowSignup] = useState(false);

    return (
        <>
            <Navbar />
            {showSignup ? <FormCreate setShowSignup={setShowSignup} /> : <FormConnect setShowSignup={setShowSignup} />}
        </>
    );
}
