import React, { useState, useContext } from "react";
import { AuthContext } from "../App";
import useWebSocket from "react-use-websocket";


export default function Download() {
  const { state, dispatch } = useContext(AuthContext);

  useWebSocket("wss://localhost:44371/ws", {
    onOpen: () => {
      console.log('WebSocket connection established.');
    }
  });

  return (
    <div>Hello WebSockets!</div>
  );
}
