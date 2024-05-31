import Navbar from "../components/navbar";
import Form from "../components/form";

export default function Home() {
  return (
    <main className="h-screen w-screen" >
      <Navbar />
      <section className="w-full h-[93%] flex justify-center items-center bg-[#F2F2F2]">
        <div className="flex-col m-4">
          <h2 className="mb-4">Inscrivez vous à la newsletter !</h2>
          <Form />
        </div>
      </section>

    </main>
  );
}
