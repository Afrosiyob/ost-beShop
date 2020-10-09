import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import "./CheckOutPage.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { MDBAnimation } from "mdbreact";
import * as Yup from "yup";

const initialValues = {
  billingDetails: {
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    aptCode: "",
    city: "",
    postcode: "",
    state: "",
    email: "",
    phone: "",
    createAcc: "",
  },
  shippingDetails: {
    createAcc: "",
    orderNote: "",
  },
  order: {
    products: {
      productName: "adidas",
      productCount: "10",
      productPrice: "100$",
    },
    subtotal: "1000$",
    shipping: "20$",
    total: "1120$",
    payment: "",
    agree: "",
  },
};

const validationSchema = Yup.object().shape({
  billingDetails: Yup.object().shape({
    firstName: Yup.string().required("Required."),
    lastName: Yup.string().required("Required."),

    country: Yup.string().required("Required."),
    streetAddress: Yup.string().required("Required."),
    aptCode: Yup.string().required("Required."),
    city: Yup.string().required("Required."),
    postcode: Yup.string().required("Required."),
    state: Yup.string().required("Required."),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().required("Required"),
    createAcc: Yup.string().email("Invalid email").required("Required"),
  }),
  shippingDetails: Yup.object().shape({
    createAcc: Yup.string().required("Required."),
  }),
  order: Yup.object().shape({
    payment: Yup.string().required("Required!"),
    agree: Yup.string().required("Required"),
  }),
});

function CheckOutPage() {
  return (
    <div>
      <MDBContainer>
        <h1>Your selected products</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
          validationSchema={validationSchema}
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
                        <Field
                          class="form-control rounded"
                          type="text"
                          id="billingDetails.firstName"
                          name="billingDetails.firstName"
                          placeholder="enter first name"
                          required
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="billingDetails.firstName">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                    <MDBCol md="6" sm="12">
                      <div className="mt-3">
                        <Field
                          class="form-control rounded"
                          type="text"
                          id="billingDetails.lastName"
                          name="billingDetails.lastName"
                          placeholder="enter last name"
                          required
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="billingDetails.lastName">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="12">
                      <div className="mt-3">
                        <Field
                          class="form-control rounded"
                          type="text"
                          id="billingDetails.companyName"
                          name="billingDetails.companyName"
                          placeholder="enter company name"
                          required
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="billingDetails.companyName">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="12">
                      <div className="mt-3">
                        <Field
                          class="form-control rounded"
                          type="text"
                          id="billingDetails.country"
                          name="billingDetails.country"
                          placeholder="enter country name"
                          required
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="billingDetails.country">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="8" sm="12">
                      <div className="mt-3">
                        <Field
                          class="form-control rounded"
                          type="text"
                          id="billingDetails.streetAddress"
                          name="billingDetails.streetAddress"
                          placeholder="enter first streetAddress"
                          required
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="billingDetails.streetAddress">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                    <MDBCol md="4" sm="12">
                      test
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="5" sm="12">
                      test
                    </MDBCol>
                    <MDBCol md="7" sm="12">
                      test
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="12">test</MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="6" sm="12">
                      test
                    </MDBCol>
                    <MDBCol md="6" sm="12">
                      test
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol md="4" sm="12">
                  right-item
                </MDBCol>
              </MDBRow>
            </Form>
          )}
        </Formik>
      </MDBContainer>
    </div>
  );
}

export default CheckOutPage;
