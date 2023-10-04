import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Message, Icon } from "semantic-ui-react";
import { global, globalSlice } from "./slice";

const MessageExampleIcon = () => {
  const globalState = useSelector(global);
  const dispatch = useDispatch();

  useEffect(() => {
    if (globalState.message) {
      setTimeout(() => {
        dispatch(globalSlice.actions.resetMessage());
      }, 5000);
    }
  }, [globalState.message]);

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 10,
        textAlign: "center",
        left: "40%",
        top: "1rem",
      }}
    >
      {globalState.status && (
        <Message
          size="small"
          icon
          positive={globalState.status === "positive"}
          error={globalState.status === "error"}
        >
          <Icon
            name={
              globalState.status === "error" ? "remove circle" : "check circle"
            }
            size="small"
          />
          <Message.Content>
            <Message.Header>
              {" "}
              {globalState.status === "error" ? (
                <p>&#128530;</p>
              ) : (
                <p>&#128512;</p>
              )}
            </Message.Header>
            {globalState.message}
          </Message.Content>
        </Message>
      )}
    </div>
  );
};

export default MessageExampleIcon;
