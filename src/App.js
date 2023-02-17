import React from "react";
import Header from "./Components/Header";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import TextField from "./Components/FormsUI/Textfield";
import Select from "./Components/FormsUI/Select/index";
import countries from "./data/countries.json";
import DateTimePicker from "./Components/FormsUI/DateTimePicker/index";
import Checkbox from "./Components/FormsUI/Checkbox/index";
import ButtonWrapper from "./Components/FormsUI/ButtonWrapper";

const MyComponent = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(8),
}));

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "",
  arrivalDate: "",
  departureDate: "",
  message: "",
  termsOfService: "",
};
const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.number()
    .integer()
    .typeError("please enter a valid phone number")
    .required("Required"),
  addressLine1: Yup.string().required("Required"),
  addressLine2: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  arrivalDate: Yup.date().required("Required"),
  departureDate: Yup.date().required("Required"),
  message: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], "The terms and conditions must be accepted")
    .required("The terms and conditions must be accepted"),
});

const App = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <MyComponent>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values, action) => {
                console.log(values);
                action.resetForm();
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Your Details</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField name="firstName" label="First Name" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField name="lastName" label="Last Name" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="email" label="Email" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="phone" label="Phone" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Address</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="addressLine1" label="Permanent Address" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="addressLine2" label="Current Address" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField name="city" label="City" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField name="state" label="State" />
                  </Grid>
                  <Grid item xs={12}>
                    <Select
                      name="country"
                      label="Countries"
                      options={countries}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Booking Details</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <DateTimePicker name="arrivalDate" label="Arrival Date" />
                  </Grid>
                  <Grid item xs={6}>
                    <DateTimePicker
                      name="departureDate"
                      label="Departure Date"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="message"
                      label="Message"
                      multiline={true}
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Checkbox
                      name="termsOfService"
                      legend="Terms Of Service"
                      label="I agree"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ButtonWrapper>Submit Form</ButtonWrapper>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </MyComponent>
        </Container>
      </Grid>
    </Grid>
  );
};

export default App;
