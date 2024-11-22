import "./news.css";

export default function news() {
  return (
    <section className="flex-row news">
      <button className="btn-news">Back</button>

      <section className="flex-row news-com">
        <aside className="flex-column">
          <h3>Patch</h3>
          <p>Lorem ipsum dolor sit amet, consectetur </p>
        </aside>

        <aside className="flex-column">
          <h3>Patch</h3>
          <p>Lorem ipsum dolor sit amet, consectetur </p>
        </aside>

        <aside className="flex-column">
          <h3>Patch</h3>
          <p>Lorem ipsum dolor sit amet, consectetur </p>
        </aside>

        <aside className="flex-column">
          <h3>Patch</h3>
          <p>Lorem ipsum dolor sit amet, consectetur </p>
        </aside>
      </section>

      <button className="btn-news">Next</button>
    </section>
  );
}
