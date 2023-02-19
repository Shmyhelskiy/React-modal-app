import React from "react";
import Contracts from "./contacts/Сontracts";

export const contacts = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
    dateOfBirth: "14.02.1992",
  },
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
    dateOfBirth: "27.08.1994",
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
    dateOfBirth: "20.1.1987",
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
    dateOfBirth: "01.02.1993",
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
    dateOfBirth: "14.03.1995",
  },
];
const ContactsPage = () => {
  return (
    <>
      <Contracts contacts={contacts} />
    </>
  );
};

export default ContactsPage;
