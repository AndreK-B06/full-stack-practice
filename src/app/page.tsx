import NavBar from "./components/nav/nav-bar";
import Hero from "./components/hero/heroSection";
import Footer from "./components/footer/footer";
import News from "./components/news/news";
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

      <section>
        <Footer />
      </section>
    </div>
  );
}
