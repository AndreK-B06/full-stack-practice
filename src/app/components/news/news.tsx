import "./news.css";

export default function news() {
  return (
    <section className="flex-row news">
      <button className="btn-news">Back</button>
      <aside className="flex-column">
        <h3>Patch</h3>
        <p>Lorem ipsum dolor sit amet, consectetur </p>
      </aside>
      <aside className="flex-column">
        <h3>Patch</h3>
        <p>Lorem ipsum dolor sit amet, consectetur </p>
      </aside>
      <button className="btn-news">Next</button>
    </section>
  );
}
