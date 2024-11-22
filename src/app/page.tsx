import NavBar from "./components/nav/nav-bar";
import Hero from "./components/hero/heroSection";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div>
      <section>
        <NavBar />
      </section>

      <section>
        <Hero />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
