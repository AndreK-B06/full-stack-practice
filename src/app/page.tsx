import NavBar from "./components/nav/nav-bar";
import Hero from "./components/hero/heroSection";
import Footer from "./components/footer/footer";
import News from "./components/news/news";
import Events from "./components/events/events";

export default function Home() {
  return (
    <div>
      <section>
        <NavBar />
      </section>

      <section>
        <Hero />
      </section>

      <News />

      <Events />

      <section>
        <Footer />
      </section>
    </div>
  );
}
