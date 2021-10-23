import React from 'react';
import faker from 'faker';
import Client from './Client';

const Clients = () => {
  const clientsList = Array.from({ length: 100 }, () => ({
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  }));

  return (
    <div className="cards-div">
      {clientsList.map((clientData) => (
        <Client data={clientData} key={clientData.id} />
      ))}
    </div>
  );
};

export default Clients;