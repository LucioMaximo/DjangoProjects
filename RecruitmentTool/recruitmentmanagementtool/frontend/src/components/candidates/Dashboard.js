import React, { Fragment } from "react";
import Form from "./Form";
import Candidates from "./Candidates";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Candidates />
    </Fragment>
  );
}
