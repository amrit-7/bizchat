import { Fragment, useEffect, useState } from "react";
import ConvoList from "../convosList/convoList.component";
import SearchBox from "../searchBox/search-box.component";
import "./conversations.styles.scss";

export default function Conversations() {
  const [conversations, setConversation] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredConversations, setFilteredConversations]=useState(conversations);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setConversation(users));
  }, []);

  useEffect(() => {
    const newFilteredConversations = conversations.filter((contact) => {
      return contact.name.toLowerCase().includes(searchField);
    });
    setFilteredConversations(newFilteredConversations);
  }, [conversations, searchField]);

  //---search function---//
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <Fragment>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Conversations..."
        className="conversation-search-box"
      />
      <ConvoList conversations={filteredConversations} />
    </Fragment>
  );
}
