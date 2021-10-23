import React from "react"
import Email from "./Email"
import Phone from "./Phone"
import Job from "./Job"
import faker from 'faker'



const Client = ({ data }) => {
  const { firstName, lastName } = data;

  return (
    <div className="ui card">
      <div className="image">
        <img src={faker.image.avatar()} />
      </div>
      <div className="content">
        <a className="header">{firstName} {lastName}</a>
        <div className="meta">
          <span className="date">{Job()}</span>
        </div>
      </div>
      <div className="extra content">
        <a>{Email(firstName,lastName)} {Phone()}</a>
      </div>
    </div>
  );
};

export default Client