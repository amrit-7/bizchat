import { createContext } from "react";
import useLocalStorage from "../hooks/localStorage";

export const ConversationContext = createContext({});

export const ConversationProvider = ({ children }) => {
  const [conversations, setConversations] = useLocalStorage(
    "conversations",
    []
  );
  const value = { conversations, setConversations };
  return (
    <ConversationContext.Provider value={value}>
      {children}
    </ConversationContext.Provider>
  );
};
