import food1 from "./pics/food1.jpg";

let Jumbotron = function () {
  return (
    <>
      <div className="introPane">
        <section className="intro">
          <article>
            <h1>Little Lemon</h1>
            <h4>Chicago</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. It has been the industry's standard
            </p>
            <button className="YellowBtn" aria-label="On Click">
              {" "}
              Start Free Trial{" "}
            </button>
          </article>
          <img src={food1} alt="Tasty food"></img>
        </section>
      </div>
      <div
        style={{
          backgrounColor: "#EDEFEE",
          height: "3rem",
        }}
      ></div>
    </>
  );
};

export default Jumbotron;
