import { makeStyles } from "@material-ui/core/styles";
// import { BorderBottom } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  messageList: {
    width: "100%",
    height: "90%",
    borderBottom: "1px solid black",
    overflow: "auto",
  },
}));

const MessageListComponent = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.messageList}>
      {props.messagesArray.map((message, i) => (
        <div key={i}>
          {message.time} {message.user}: {message.msg}
        </div>
      ))}
    </div>
  );
};

export default MessageListComponent;
