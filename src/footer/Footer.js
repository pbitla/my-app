import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer
        class="footer navbar-light bg-light"
        style={{
          padding: ".5rem 1rem",
          position: "absolute",
          bottom: "0",
          display: "block",
          width: "100%",
        }}
      >
        <div class="container-fluid">
          <div class="row text-center">
            <div class="col-12">
              {" "}
              Copyright © 2020{" "}
              <a
                href="https://www.pbitla.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bitla
              </a>
              . All rights reserved.{" "}
            </div>
          </div>
          <section class="block-follow-us">
            <div class="container">
              <div class="row align-items-center justify-content-center">
                <div class="col-lg-12 col-md-12 text-center">
                  <span class="h5">Follow us:</span>
                  <a
                    href="https://twitter.com/pbitla"
                    target="_blank"
                    class="fab fa-twitter-square"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pbitla"
                    target="_blank"
                    class="fab fa-linkedin"
                    rel="noopener noreferrer"
                  >
                    linked In
                  </a>
                  <a
                    href="https://www.github.com/pbita"
                    target="_blank"
                    class="fab fa-git"
                    rel="noopener noreferrer"
                  >
                    github
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div class="row justify-content-center text-center">
            <div class="col-12 col-md-2">
              <a href="/">Terms and conditions</a>
            </div>
            <div class="col-12 col-md-2">
              <a href="/">Privacy policy</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
