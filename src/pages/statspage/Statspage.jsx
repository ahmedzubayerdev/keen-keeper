import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { TimelineContext } from "../../components/context/TimelineContext";

const Statspage = () => {
  const { callFriend, textFriend, videoFriend } = useContext(TimelineContext);

  const allTimeline = [
    ...callFriend.map((f) => ({ ...f, type: "call" })),
    ...textFriend.map((f) => ({ ...f, type: "text" })),
    ...videoFriend.map((f) => ({ ...f, type: "video" })),
  ];

  const stats = allTimeline.reduce(
    (acc, item) => {
      acc[item.type]++;
      return acc;
    },
    { call: 0, text: 0, video: 0 },
  );

  const chartData = [
    { name: "Call", value: stats.call, fill: "#013221" },
    { name: "Text", value: stats.text, fill: "#301934" },
    { name: "Video", value: stats.video, fill: "#FF0000" },
  ];

  return (
    <div className="px-48 py-20 space-y-6">
      <h2 className="font-bold text-5xl">Friendship Analytics</h2>

      <div className="flex flex-col items-center pt-10">
        <h2 className=" text-left text-slate-500 text-3xl font-bold ">
          By Interaction Type
        </h2>
        <PieChart style={{ width: "100%", maxWidth: "500px", aspectRatio: 1 }}>
          <Pie
            data={chartData}
            innerRadius={80}
            outerRadius={120}
            cornerRadius={10}
            paddingAngle={2}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend></Legend>
          <Tooltip></Tooltip>
        </PieChart>
      </div>
    </div>
  );
};

export default Statspage;
