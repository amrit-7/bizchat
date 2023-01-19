import React from "react";
import Contact from "../contact-component/contact.component";

function ContactList({ contacts }) {
  return (
    <div className="contact-list">
      {contacts.map((contact, index) => {
        return <Contact key={index} contact={contact}></Contact>;
      })}
    </div>
  );
}

export default ContactList;
