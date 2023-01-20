import React, { useEffect, useState } from "react";
import "./contacts.styles.scss";
import ContactList from "../contactList/contactList.cpmponent";
// import ContactList from "../contactsList/contactList.component";
import SearchBox from "../searchBox/search-box.component";
import { Fragment } from "react";

export default function Contacts() {
  const [searchField, setSearchField] = useState("");
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  //---fething data---/
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setContacts(users));
  }, []);

  //---filtering contacts---//
  useEffect(() => {
    const newFilteredContacts = contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(searchField);
    });
    setFilteredContacts(newFilteredContacts);
  }, [contacts, searchField]);

  //---search function---//
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="contacts">
      <Fragment>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search Contacts..."
          className="contacts-search-box"
        />
        <ContactList contacts={filteredContacts}></ContactList>
      </Fragment>
    </div>
  );
}
