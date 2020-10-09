import { MDBAnimation, MDBContainer } from "mdbreact";
import React from "react";
import FaqCollapse from "../../layouts/FaqPage/FaqCollapse/FaqCollapse";
import FaqHeader from "../../layouts/FaqPage/FaqHeader/FaqHeader";
import "./FaqPage.scss";

function FaqPage() {
  return (
    <div className="faq-page">
      <MDBContainer>
        <div className="my-5">
          <MDBAnimation type="fadeInDown">
            <FaqHeader />
          </MDBAnimation>
        </div>
        <div className="my-5">
          <MDBAnimation reveal type="fadeInUp">
            <FaqCollapse />
          </MDBAnimation>
        </div>
      </MDBContainer>
    </div>
  );
}

export default FaqPage;
