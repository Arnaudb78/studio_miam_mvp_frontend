import Navbar from "../components/navbar";
import Form from "../components/form";
import Card from "@/components/card";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="h-screen w-screen" >
        <section className="">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
        <Footer />
      </main>
    </>
  );
}


/*
<div className="flex-col m-4">
          <h2 className="mb-4">Inscrivez vous à la newsletter !</h2>
          <Form />
        </div>
*/