import React from "react"
import faker from "faker"

const Job = () => {

  return (
    <p>{faker.name.jobTitle()}</p>
  );
}

export default Job