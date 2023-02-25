import React, { useState, useContext } from "react";
import { AuthContext } from "../App";
import useWebSocket from "react-use-websocket";
import { wssUrl } from "../helpers/utilities";

const activities = [];

export default function Download() {
  const { state, dispatch } = useContext(AuthContext);

  const { lastMessage } = useWebSocket(wssUrl(), {
    onOpen: () => {
      console.log('WebSocket connection established.');
    },
    share: true,
    filter: () => true
  });

  activities.push(lastMessage?.data);
  return (
    <ul>
      {activities.map((activity, index) => <li key={`activity-${index}`}>{activity}</li>)}
    </ul>
  );
}
