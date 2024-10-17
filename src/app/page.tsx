import NavBar from "./components/nav/nav-bar";
import Hero from "./components/hero/heroSection";

export default function Home() {
  return (
    <div>
      <section>
        <NavBar />
      </section>

      <section>
        <Hero />
      </section>
    </div>
  );
}
