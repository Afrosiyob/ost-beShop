import { ErrorMessage, Field, Form, Formik } from "formik";
import { MDBBtn, MDBCol, MDBRow } from "mdbreact";
import React, { useState } from "react";
import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  file: "",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required!"),
  lastName: Yup.string().required("Required!"),
  email: Yup.string().email("Email is not valid !").required("Required!"),
});

function AccountDetails() {
  const [fileName, setfileName] = useState("");
  const fileHandleChange = (e) => {
    setfileName(e.target.files[0].name);
  };
  return (
    <div className="border rounded overflow-hidden px-md-5 py-md-4 p-3">
      <h5 className="font-weight-bold">My Address</h5>
      <div className="mt-3">
        <h6 className="text-muted text-uppercase">billing address</h6>
        <hr />
      </div>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            console.log(values);
            actions.setSubmitting(false);

            let data = new FormData();
            data.append("file", values.file);
            return fetch("https://", {
              method: "post",
              headers: new Headers({ Accept: "application/json" }),
              body: data,
            })
              .then((res) => res.json())
              .then((data) => console.log(data))
              .catch((err) => console.log(err));
          }, 1000);
        }}
      >
        {(formProps) => (
          <Form>
            <MDBRow>
              <MDBCol sm="12" md="3">
                <div className="mt-3">
                  <label htmlFor="firstName">
                    <small>
                      <b>First Name</b>
                    </small>
                  </label>
                  <Field
                    className="form-control rounded-pill"
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Tyumen"
                  />
                  <small style={{ color: "red" }}>
                    <ErrorMessage name="firstName">
                      {(msg) => <div>{msg}</div>}
                    </ErrorMessage>
                  </small>
                </div>
              </MDBCol>
              <MDBCol sm="12" md="3">
                <div className="mt-3">
                  <label htmlFor="lastName">
                    <small>
                      <b>Last Name</b>
                    </small>
                  </label>
                  <Field
                    className="form-control rounded-pill"
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Tyumen"
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
              <MDBCol md="6" sm="12">
                <div className="mt-3">
                  <label htmlFor="email">
                    <small>
                      <b>E-mail address</b>
                    </small>
                  </label>
                  <Field
                    className="form-control rounded-pill"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Tyumen"
                  />
                  <small style={{ color: "red" }}>
                    <ErrorMessage name="email">
                      {(msg) => <div>{msg}</div>}
                    </ErrorMessage>
                  </small>
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="6" sm="12">
                <div className="mt-3">
                  <label htmlFor="file">
                    <small>
                      <b>E-mail address</b>
                    </small>
                  </label>

                  <label
                    htmlFor="file"
                    className="w-100  overflow-hidden rounded-pill border d-flex justify-content-end"
                  >
                    <div className="w-75 px-2 py-1"> {fileName} </div>
                    <div className="p-1 w-25 d-flex  justify-content-center align-content-center align-items-center bg-primary">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0)">
                          <path
                            d="M21.6627 9.55722C20.461 4.77019 15.6063 1.86369 10.8193 3.06535C7.07834 4.00445 4.36199 7.23769 4.08212 11.0845C1.42589 11.5225 -0.372331 14.0309 0.0657104 16.6871C0.455109 19.0486 2.50127 20.7779 4.89453 20.7684H8.95658V19.1436H4.89453C3.09981 19.1436 1.64489 17.6887 1.64489 15.894C1.64489 14.0993 3.09981 12.6443 4.89453 12.6443C5.34323 12.6443 5.70694 12.2806 5.70694 11.8319C5.70288 7.79378 8.97319 4.51692 13.0113 4.51291C16.5069 4.50941 19.516 6.98066 20.1922 10.4102C20.259 10.7526 20.5369 11.0142 20.8828 11.0601C23.1038 11.3764 24.6478 13.4333 24.3316 15.6543C24.0476 17.6486 22.3448 19.1336 20.3303 19.1436H17.0807V20.7684H20.3303C23.4711 20.759 26.0095 18.2051 26 15.0644C25.992 12.4499 24.2025 10.1777 21.6627 9.55722Z"
                            fill="white"
                          />
                          <path
                            d="M12.4411 12.88L9.19141 16.1296L10.3369 17.2751L12.2055 15.4147V23.2057H13.8303V15.4147L15.6907 17.2751L16.8362 16.1296L13.5866 12.88C13.2697 12.565 12.7579 12.565 12.4411 12.88Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="26" height="26" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </label>

                  <input
                    id="file"
                    name="file"
                    type="file"
                    onChange={(e) => {
                      formProps.setFieldValue("file", e.target.files[0]);
                    }}
                  />

                  <small style={{ color: "red" }}>
                    <ErrorMessage name="file">
                      {(msg) => <div>{msg}</div>}
                    </ErrorMessage>
                  </small>
                </div>
              </MDBCol>
            </MDBRow>
            <div className="mt-3 ">
              <MDBBtn
                color="primary"
                className="rounded-pill text-uppercase"
                rounded
                type="submit"
              >
                Edit
              </MDBBtn>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AccountDetails;
