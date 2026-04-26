import React, { useEffect, useState } from "react";

const useCards = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const friends = await res.json();
      setFriends(friends);
    };
    fetchData();
  }, []);

  return { friends };
};

export default useCards;
