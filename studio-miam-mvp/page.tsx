import Navbar from "./navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrowelBricks } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="h-screen w-screen" >
      <Navbar />
      <section className="flex justify-center items-center">
        <div className="w-full m-[40%] flex-col bg-[#1F2937] text-white p-4 rounded-md">
          <FontAwesomeIcon className="w-24 h-24" icon={faTrowelBricks} />
          <h2 className="font-bold text-center pt-4">Site en cours de construction.</h2>
        </div>
      </section>
    </main>
  );
}
