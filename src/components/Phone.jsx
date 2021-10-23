import React from "react"
import faker from "faker"

const Phone = () => {

  return (
    <a className="ui button" href={`callto:${faker.phone.phoneNumber()}`}>Appeler</a>
  );
}

export default Phone