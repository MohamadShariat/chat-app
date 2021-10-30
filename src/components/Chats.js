import React from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";

//* Components
import Navbar from "./Navbar";

//* Styles
import styles from "./Chats.module.css";

const Chats = () => {
  const history = useHistory();

  const logoutHandler = async () => {
    await auth.signOut();
    history.push("/");
  };
  return (
    <div className={styles.container}>
      <Navbar logoutHandler={logoutHandler} />
      <ChatEngine
        height="calc(100vh - 50px)"
        projectId="8555c401-ec56-453c-9f26-100fdf0d30fd"
        userName="."
        userSecret="."
      />
    </div>
  );
};

export default Chats;
