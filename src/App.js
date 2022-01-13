import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      userName="Lucas"
      userSecret="azerty"
      projectID="adb84875-41c9-4170-83d6-8a708c2affe7"
    />
  );
};

export default App;
