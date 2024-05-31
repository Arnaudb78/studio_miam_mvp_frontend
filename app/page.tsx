import Navbar from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrowelBricks } from "@fortawesome/free-solid-svg-icons";
import Form from "../components/form";

export default function Home() {
  return (
    <main className="h-screen w-screen" >
      <Navbar />
      <section className="">
        <Form />
      </section>

    </main>
  );
}
