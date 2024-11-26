import "./nav-bar.css";
// import "../news.tsx";

export default function navBar() {
  // document.getElementsByClassName("news").scrollIntoView({
  //   behavior: "smooth",
  //   block: "center",
  // });

  return (
    <>
      <nav className="navBar">
        <section className="game-drop-down nav-btn">
          <button className="nav-btn font-btn">Info</button>
        </section>

        <button className="nav-btn font-btn">News</button>

        <button className="nav-btn font-btn">Download</button>

        <section className=" flex-row">
          <button className="nav-btn marg-5 font-btn">Sign Up</button>
          <button className="nav-btn marg-5 flex-row">
            <p className="font-btn">Login</p>
          </button>
        </section>
      </nav>
    </>
  );
}
