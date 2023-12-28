import { useRef } from "react";
// import { signal } from "@preact/signals-react";
import { Form, useActionData } from "react-router-dom";
import TalkOutput from "./TalkOutput";

import { fetchData } from "./util/dataSoundPractice";

import "./Talk.css";

const Talk = () => {
  const data = useActionData();
  const inputRef = useRef(null);

  if (inputRef.current) {
    inputRef.current.value = "";
  }

  return (
    <>
      <section
        className="widen bg-dark bg-size-cover bg-repeat-0 bg-position-center position-relative  py-5"
        style={{
          backgroundImage: "url(assets/img/landing/saas-3/hero/hero-bg.jpg)",
          height: "100vh"
        }}
        data-bs-theme="dark"
      >
        <div className="container position-relative overflow-hidden zindex-2 pt-5 pb-md-2 pb-lg-4 pb-xl-5">
          <div className="row pt-3 pb-2 py-md-4">
            {/* Text */}
            <div className="col-xl-7 col-md-6 pt-lg-2 text-center text-md-start mb-4 mb-md-0">
              <h1 className="display-3 pb-2 pb-sm-3">
                Ask Alloy Anything You Would Like To Know
              </h1>

              <Form method="post" action="/talk">
                <label htmlFor="query" className="form-label"></label>
                <textarea
                  className="form-control mb-5 me-5"
                  name="query"
                  id="query"
                  rows={5}
                  ref={inputRef}
                />

                <button
                  type="submit"
                  className="btn btn-lg btn-secondary shadow-primary me-3 me-sm-4"
                >
                  Submit Query
                </button>
              </Form>
            </div>
            {/* Parallax gfx */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "start"
              }}
              className="col-xl-5 col-md-6 d-md-flex"
            >
              <div
                // className="parallax mx-auto ms-md-0 me-md-n5"
                style={{ maxWidth: 675, height: "70vh" }}
              >
                <div>
                  <div
                    className="brain-wrapper"
                    style={{
                      height: 250,
                      width: 500,
                      margin: "0 auto"
                    }}
                  >
                    <img
                      id="brain"
                      className="mb-5"
                      src="brain.webp"
                      alt="Card"
                    />
                  </div>
                  <div className="mt-5 text-center">
                    {data && !data.status && <TalkOutput data={data} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Talk;

export async function action({ request }) {
  console.log("hello action");
  const formData = await request.formData();

  const reply = await fetchData(formData.get("query"));

  return reply;
}
