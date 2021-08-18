const MessageListComponent = (props) => {
  return (
    <div className="messageList">
      {props.messagesArray.map((message, i) => (
        <div key={i}>
          Time: {message.time}. Message: {message.msg}. User: {message.user}.
        </div>
      ))}
    </div>
  );
};

export default MessageListComponent;
