import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section section--gradient">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section">
                  <div className="content">
                    <h1>
                      There is a concept in the world of flight called the power
                      curve.
                    </h1>
                    <br />

                    <p>
                      When an airplane is behind the power curve, the drag
                      requires the pilot to slow down in order to speed up. The
                      pilot has to lower the nose in order to gain altitude.
                    </p>

                    <p>
                      Some of us feel like we are behind the power curve. Losing
                      altitude quickly, short of the runway we want. And we do
                      what comes naturally, we add power. But, behind the power
                      curve, we can’t keep up with the drag and we burn out.
                    </p>

                    <p>
                      Some of us are not behind the power curve. We are working
                      with the drag, but we are ready to change our direction.
                    </p>

                    <p>
                      Coaching helps us do both. Coaching is a way to lower the
                      nose of the plane, to intentionally slow down, to take
                      stock, to design, and to ultimately gain altitude.
                    </p>
                    <p>
                      <strong>Want a free sample session?</strong>
                    </p>
                    <p>
                      <Link to="/contact" className="button is-medium is-info">
                        Contact Us
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
