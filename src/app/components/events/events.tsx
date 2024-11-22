import "./events.css";

export default function Events() {
  return (
    <section className="events">
      <section className="Calender">
        {/*Barow code plasholder from W3 Schools */}
        <div className="month">
          <ul>
            <li className="prev">&#10094;</li>
            <li className="next">&#10095;</li>
            <li>
              August
              <br />
              <span>2021</span>
            </li>
          </ul>
        </div>

        <ul className="weekdays">
          <li>Mo</li>
          <li>Tu</li>
          <li>We</li>
          <li>Th</li>
          <li>Fr</li>
          <li>Sa</li>
          <li>Su</li>
        </ul>

        <ul className="days">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>
            <span className="active">10</span>
          </li>
          <li>11</li>
        </ul>
      </section>
      {/*Barow code plasholder from W3 Schools */}
      <aside>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
      </aside>
    </section>
  );
}
