import React, { useContext, useState } from "react";
import { TimelineContext } from "../../components/context/TimelineContext";
import call from "../../assets/images/call.png";
import text from "../../assets/images/text.png";
import video from "../../assets/images/video.png";

const Timelinepage = () => {
  const { callFriend, textFriend, videoFriend } = useContext(TimelineContext);
  const [filter, setFilter] = useState("all");

  const date = new Date().toLocaleDateString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const allTimeline = [
    ...callFriend.map((f) => ({ ...f, type: "call" })),
    ...textFriend.map((f) => ({ ...f, type: "text" })),
    ...videoFriend.map((f) => ({ ...f, type: "video" })),
  ];

  const filteredTimeline =
    filter === "all"
      ? allTimeline
      : allTimeline.filter((item) => item.type === filter);

  return (
    <div className="px-48 py-20 space-y-6">
      <h2 className="font-bold text-5xl">Timelinepage</h2>

      {/* FILTERING */}
      <div className="flex items-center gap-4">
        <label className="font-medium">Filter:</label>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded-md"
        >
          <option value="all">All</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
      </div>

      {/* TIMELINE */}
      <div className="py-4 flex flex-col gap-4">
        {filteredTimeline.map((frnd) => {
          let icon;
          let label;

          if (frnd.type === "call") {
            icon = call;
            label = "Call";
          } else if (frnd.type === "text") {
            icon = text;
            label = "Text";
          } else {
            icon = video;
            label = "Video";
          }

          return (
            <div
              key={frnd.id}
              className="bg-slate-200 flex p-4 gap-2 rounded-2xl"
            >
              <div className="flex justify-center items-center">
                <img src={icon} alt="icon" className="w-9 h-9" />
              </div>
              <div>
                <p className="font-medium text-[#244D3F]">
                  {label}
                  <span className="font-normal text-[#64748B]">
                    {" "}
                    with {frnd.name}
                  </span>
                </p>
                <p className="text-[#64748B]">{date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timelinepage;
