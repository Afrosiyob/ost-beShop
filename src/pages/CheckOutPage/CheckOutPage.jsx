import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import "./CheckOutPage.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import { MDBAnimation } from "mdbreact";
import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  companyName: "",
  country: "",
  streetAddress: "",
  aptSuit: "",
  city: "",
  postcodeZip: "",
  state: "",
  email: "",
  phone: "",
  createAnAccount: false,
  createAnAccountTwo: false,
  orderNotes: "",
  productName: "adidas",
  ProductPrice: "300$",
  productCount: 5,
  subtotal: 1500,
  shipping: 300,
  total: 1800,
  payment: [],
  readAgree: false,
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required !"),
  lastName: Yup.string().required("Required !"),

  country: Yup.string().required("Required !"),
  streetAddress: Yup.string().required("Required !"),
  aptSuit: Yup.string().required("Required !"),
  city: Yup.string().required("Required !"),
  postcodeZip: Yup.string().required("Required !"),
  state: Yup.string().required("Required !"),
  email: Yup.string().email("Invalid email").required("Required !"),
  phone: Yup.string()
    .min(7, "Too short!")
    .max(20, "Too Long!")
    .required("Required !"),
  createAnAccount: Yup.string().required("Required !"),
  // payment: Yup.string().required("Required !"),
  // readAgree: Yup.string().required("Required !"),
});

function CheckOutPage() {
  return (
    <div>
      <MDBContainer>
        <h1>Your selected products</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {({ errors, touched, values }) => (
            <Form>
              <MDBRow>
                <MDBCol md="8" sm="12">
                  <h3 className="text-uppercase font-weight-bold">
                    billing detail
                  </h3>
                  <MDBRow>
                    <MDBCol md="6" sm="12">
                      <div className="mt-3">
                        <label htmlFor="firstName">
                          <small>
                            <b>First Name</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="firstName">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                    <MDBCol md="6" sm="12">
                      <div className="mt-3">
                        <label htmlFor="lastName">
                          <small>
                            <b>Last Name</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="lastName"
                          name="lastName"
                          placeholder="Last Name"
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="lastName">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="12">
                      <div className="mt-3">
                        <label htmlFor="companyName">
                          <small>
                            <b> Company Name (Optional)</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="companyName"
                          name="companyName"
                          placeholder="Company Name"
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="12">
                      <div className="mt-3">
                        <label htmlFor="country">
                          <small>
                            <b>Country</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="country"
                          name="country"
                          placeholder="Country"
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="country">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="8" sm="12">
                      <div className="mt-3">
                        <label htmlFor="streetAddress">
                          <small>
                            <b>Street Address</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="streetAddress"
                          name="streetAddress"
                          placeholder="streetAddress"
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="streetAddress">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                    <MDBCol md="4" sm="12">
                      <div className="mt-3">
                        <label htmlFor="aptSuit">
                          <small>
                            <b>citypostcodeZip</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="aptSuit"
                          name="aptSuit"
                          placeholder="aptSuit"
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="aptSuit">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="5" sm="12">
                      <div className="mt-3">
                        {/* <label htmlFor=""></label>
                        <Field
                          className="form-control"
                          type=""
                          id=""
                          name=""
                          placeholder=""
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small> */}

                        <label htmlFor="city">
                          <small>
                            <b>citypostcodeZip</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="city"
                          name="city"
                          placeholder="city"
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="city">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                    <MDBCol md="7" sm="12">
                      <div className="mt-3">
                        {" "}
                        <label htmlFor="postcodeZip">
                          <small>
                            <b>postcodeZip</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="postcodeZip"
                          name="postcodeZip"
                          placeholder="postcodeZip"
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="postcodeZip">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="12">
                      <div className="mt-3">
                        {" "}
                        <label htmlFor="state">
                          <small>
                            <b>state</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="texxt"
                          id="state"
                          name="state"
                          placeholder="state"
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="state">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="6" sm="12">
                      <div className="mt-3">
                        {" "}
                        <label htmlFor="email">
                          <small>
                            <b>email</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="email"
                          id="email"
                          name="email"
                          placeholder="email"
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="email">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                    <MDBCol md="6" sm="12">
                      <div className="mt-3">
                        {" "}
                        <label htmlFor="phone">
                          <small>
                            <b>phone</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="phone"
                          id="phone"
                          name="phone"
                          placeholder="phone"
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="phone">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                  </MDBRow>

                  <MDBCol md="12">
                    <div className="mt-3">
                      <Field
                        type="checkbox"
                        id="createAnAccount"
                        name="createAnAccount"
                      />
                      <label className="ml-3" htmlFor="createAnAccount">
                        <div className="d-flex flex-column">
                          <p className="m-0 p-0">
                            <b>Create An Account</b>
                          </p>
                          <small>
                            * If you select this option, an account will be
                            opened for you based on the information you entered
                            above.
                          </small>
                        </div>
                      </label>
                    </div>
                  </MDBCol>
                  <div className="my-3">
                    <hr />
                  </div>

                  <h3 className="text-uppercase font-weight-bold">
                    Shipping Details details
                  </h3>

                  <MDBCol>
                    <div className="mt-3">
                      <Field
                        type="checkbox"
                        id="createAnAccountTwo"
                        name="createAnAccountTwo"
                      />
                      <label className="ml-3" htmlFor="createAnAccountTwo">
                        <div className="d-flex flex-column">
                          <p className="m-0 p-0">
                            <b>Create An Account</b>
                          </p>
                        </div>
                      </label>
                    </div>
                  </MDBCol>
                </MDBCol>
                <MDBCol md="4" sm="12">
                  right-item
                </MDBCol>
              </MDBRow>

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </MDBContainer>
    </div>
  );
}

export default CheckOutPage;
