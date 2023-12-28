import alloyImg from "./alloy-n.png";
import { fetchSound } from "./util/dataSound";
import { useLoaderData } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  const sound = useLoaderData();
  console.log("welcome", sound);
  return (
    <section
      className="bg-dark bg-size-cover bg-repeat-0 bg-position-center position-relative overflow-hidden"
      style={{
        backgroundImage: "url(assets/img/landing/saas-3/hero/hero-bg.jpg)",
        height: "100vh"
      }}
    >
      <div className="container ">
        <div className="row flex-lg-nowrap">
          <div className="col-lg-12 col-xl-12 col-xxl-12 text-center text-lg-start center mt-5 pt-5">
            <p className="sky-fade text-body text-center lead">
              The Sky Is The Limit. Ask Alloy and They Will Hook You Up.
            </p>
            <h1 className="welcome-fade text-center fs-1 text-light">
              Welcome to Jada AI
            </h1>
            <img
              src={alloyImg}
              className="d-block text-center center d-block mx-auto"
              id="diva"
              width={1058}
              alt="Hero image"
            />
          </div>
          <div>
            {" "}
            <audio
              id="brain-audio"
              autoPlay
              src={sound}
              type="audio/mpeg"
            ></audio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

export async function loader() {
  console.log("I ran loader");
  const reply = await fetchSound(
    "Welcome to Jada AI. The sky is the limit. Ask Alloy and they will hook you up"
  );

  return reply;
}
