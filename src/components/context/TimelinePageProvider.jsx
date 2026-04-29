import React, { useState } from "react";
import { TimelineContext } from "./TimelineContext";

const TimelinePageProvider = ({ children }) => {
  const [callFriend, setCallFriend] = useState([]);
  const [textFriend, setTextFriend] = useState([]);
  const [videoFriend, setVideoFriend] = useState([]);

  const data = {
    callFriend,
    setCallFriend,
    textFriend,
    setTextFriend,
    videoFriend,
    setVideoFriend,
  };

  return (
    <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>
  );
};

export default TimelinePageProvider;
