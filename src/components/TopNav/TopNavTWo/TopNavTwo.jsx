import { MDBContainer } from "mdbreact";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import RightModal from "../../RightModal/RightModal";

import SearchBox from "./SearchBox/SearchBox";

import "./TopNavTwo.scss";

function TopNavTwo() {
  const [salom, setSalom] = useState(false);

  const callHandle = () => {
    setSalom(!salom);
  };
  return (
    <div className="wrap-nav-two">
      <MDBContainer>
        <div className="top-nav-two">
          <div className="left-nav">
            <Link to="/">
              beshop<span>.</span>{" "}
            </Link>
          </div>
          <div className="mid-nav">
            <SearchBox />
          </div>
          <div className="right-nav">
            <div className="right-nav-icons user">
              <div className="d-flex">
                <div className="mr-2">
                  <span onClick={callHandle}>sing in</span>
                  <div>
                    <RightModal
                      componentName="Login"
                      nameBtn="Sign in"
                      iconName="sign-in"
                      isBoolen={salom}
                    />{" "}
                  </div>
                </div>
                <div className="mr-2">
                  <span onClick={callHandle}>sing up</span>
                  <div>
                    <RightModal
                      componentName="SignUp"
                      nameBtn="Sign up"
                      iconName="sign-out"
                      isBoolen={salom}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="right-nav-icons">
              <span className="counter">1</span>
              <svg
                width="25"
                height="22"
                viewBox="0 0 25 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.125 11.5C0.78125 8.37501 1.5625 3.68751 5.46875 2.12501C9.375 0.562505 11.7188 3.68751 12.5 5.25001C13.2812 3.68751 16.4062 0.562505 20.3125 2.12501C24.2188 3.68751 24.2188 8.37501 21.875 11.5C19.5312 14.625 12.5 20.875 12.5 20.875C12.5 20.875 5.46875 14.625 3.125 11.5Z"
                  stroke="#4E5262"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="right-nav-icons">
              <span className="counter">1</span>
              <svg
                width="19"
                height="23"
                viewBox="0 0 19 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9375 6.22656H14.3516V5.80469C14.3516 3.12578 12.1789 0.953125 9.5 0.953125C6.82109 0.953125 4.64844 3.12578 4.64844 5.80469V6.22656H1.0625C0.595801 6.22656 0.21875 6.60361 0.21875 7.07031V21.2031C0.21875 21.6698 0.595801 22.0469 1.0625 22.0469H17.9375C18.4042 22.0469 18.7812 21.6698 18.7812 21.2031V7.07031C18.7812 6.60361 18.4042 6.22656 17.9375 6.22656ZM6.54688 5.80469C6.54688 4.17256 7.86787 2.85156 9.5 2.85156C11.1321 2.85156 12.4531 4.17256 12.4531 5.80469V6.22656H6.54688V5.80469ZM16.8828 20.1484H2.11719V8.125H4.64844V10.4453C4.64844 10.5613 4.74336 10.6562 4.85938 10.6562H6.33594C6.45195 10.6562 6.54688 10.5613 6.54688 10.4453V8.125H12.4531V10.4453C12.4531 10.5613 12.548 10.6562 12.6641 10.6562H14.1406C14.2566 10.6562 14.3516 10.5613 14.3516 10.4453V8.125H16.8828V20.1484Z"
                  fill="#4E5262"
                />
              </svg>
            </div>

            <div className="summ">1257 364 UZS</div>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
}

export default TopNavTwo;
