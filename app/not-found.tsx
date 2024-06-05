import Link from "next/link";

export default function NotFound() {
    return (
        <main className="h-screen w-screen" >
            <h2>Page introuvable !</h2>
            <Link href="/">Return Home</Link>
        </main>
    );
    }