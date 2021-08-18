const InputWrapperComponent = (props) => {
  return (
    <div className="inputWrapper">
      <input
        className="input"
        value={props.value.msg}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />
      <button onClick={props.onClick}>Отправить</button>
    </div>
  );
};

export default InputWrapperComponent;
