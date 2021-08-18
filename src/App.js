import React, { useState, useEffect } from "react";
import "./App.css";
import InputWrapperComponent from "./InputWrapperComponent";
import MessageListComponent from "./MessageListComponent";

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

  return (
    <div className="mainWrapper">
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
        onKeyDown={({ key }) => {
          if (key === "Enter") {
            console.log("Enter");
            onSendMessage();
          }
        }}
      />
    </div>
  );
}

export default App;
