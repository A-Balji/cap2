import chef1 from "./pics/chef1.jpg";
import chef2 from "./pics/chef2.jpg";

let About = (props) => {
  return (
    <>
      <div className="aboutPane" style={{ backgroundColor: "#FBDABB" }}>
        <section
          className="about-us"
          style={{
            textAlign: "center",
            marginRight: "auto",
            marginLeft: "auto",
            maxWidth: "50rem",
          }}
        >
          <article
            style={{
              display: "inline-block",
              maxWidth: "26rem",
              textAlign: "left",
              paddingRight: "1rem",
            }}
          >
            <h1>Little Lemon</h1>
            <h4>Chicago</h4>
            <p>
              &nbsp;&nbsp;Chicago's restaurant history began with modest
              eateries for 19th-century workers and travelers, heavily
              influenced by European immigrant cuisines. The city's
              long-standing food scene includes iconic establishments like the
              historic Berghoff restaurant, established in 1898, and Daley's
              Restaurant, which opened in 1892. Other key milestones include the
              opening of the first restaurant in a department store (Macy's
              Walnut Room in 1907) and the creation of Chicago-born food chains
              like Portillo's and Giordano's.
            </p>
          </article>
          <div
            style={{
              display: "inline-block",
              marginBottom: "5rem",
              marginTop: "3rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(5rem, 7.5rem))",
                gridTemplateRows: "repeat(4, 8rem)",
              }}
            >
              <img
                src={chef2}
                alt="Our team"
                style={{
                  gridRow: "1/4",
                  gridColumn: "2/4",
                  borderRadius: "15px",
                  maxWidth: "15rem",
                  height: "22rem",
                  borderStyle: "solid",
                }}
              ></img>
              <img
                src={chef1}
                alt="our chef"
                style={{
                  gridRow: "2/5",
                  gridColumn: "1/3",
                  borderRadius: "15px",
                  maxWidth: "15rem",
                  height: "22rem",
                  borderStyle: "solid",
                }}
              ></img>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
