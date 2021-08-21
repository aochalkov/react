import React, { useState, useEffect } from "react";
import InputWrapperComponent from "./InputWrapperComponent";
import MessageListComponent from "./MessageListComponent";
import ChatListComponent from "./ChatListComponent";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appWrapper: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  componentWrapper: {
    width: "600px",
    height: "800px",
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
  },
}));

function App() {
  const [inputMessage, setInputMessage] = useState({
    time: "",
    msg: "",
    user: "",
  });
  const [messagesArray, setMessagesArray] = useState([]);

  useEffect(() => {
    if (messagesArray.length > 0) {
      if (messagesArray.slice(-1)[0].user !== "Robot") {
        setTimeout(
          () =>
            setMessagesArray((prev) => [
              ...prev,
              {
                time: getTime(),
                msg: prev.slice(-1)[0].msg,
                user: "Robot",
              },
            ]),
          1500
        );
      }
    }
  }, [messagesArray]);

  const getTime = () => {
    var today = new Date();
    var set_time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    return set_time;
  };

  const onSendMessage = () => {
    setMessagesArray((prev) => [
      ...prev,
      { time: getTime(), msg: inputMessage.msg, user: "Kate" },
    ]);
    setInputMessage({ time: "", msg: "" });
  };

  const classes = useStyles();
  return (
    <div className={classes.appWrapper}>
      <ChatListComponent />
      <div className={classes.componentWrapper}>
        <MessageListComponent messagesArray={messagesArray} />
        <InputWrapperComponent
          onClick={onSendMessage}
          value={inputMessage}
          onChange={(e) =>
            setInputMessage((prev) => ({
              ...prev,
              msg: e.target.value,
            }))
          }
        />
      </div>
    </div>
  );
}

export default App;
