import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const ChatListComponent = (props) => {
  const [chatArray, setChatArray] = useState([
    { name: "first", id: "first" },
    { name: "second", id: "second" },
    { name: "third", id: "third" },
  ]);

  return (
    <div>
      <List component="nav" aria-label="main mailbox folders">
        {chatArray.map((e) => (
          <ListItem button key={e.id}>
            <ListItemText primary={e.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ChatListComponent;
