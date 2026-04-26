import React from "react";
import { Link, useParams } from "react-router";
import useCards from "../../hooks/useCards";
import {
  Archive,
  Bell,
  MessageSquareMore,
  PhoneCall,
  Trash2,
  Video,
} from "lucide-react";

const Carddetails = () => {
  const { id } = useParams();
  const { friends } = useCards();
  console.log(friends, "cardDetails");

  const expectedFriends = friends.find((friend) => friend.id == id);
  if (!friends || friends.length === 0) {
    return <p>Loading...</p>;
  }

  if (!expectedFriends) {
    return <p>Friend not found</p>;
  }
  return (
    <div className="container mx-auto my-15 text-center ">
      <div className="flex gap-6 justify-center items-center">
        <div className="left-side flex flex-col justify-center items-center">
          <div className="p-4">
            <div className="flex justify-center items-center">
              <img
                src={expectedFriends.picture}
                alt={expectedFriends.name}
                className="h-20 w-20 rounded-[50%] object-cover"
              />
            </div>
            <div className="space-y-1 mt-1">
              <h2 className="font-bold text-xl">{expectedFriends.name}</h2>
              <span
                className={` px-2 py-1 font-semibold rounded-full text-white mt-3 inline-block
                      ${
                        expectedFriends.status === "Overdue"
                          ? "bg-red-500"
                          : expectedFriends.status === "Almost Due"
                            ? "bg-yellow-500"
                            : "bg-green-700"
                      }
                      `}
              >
                {expectedFriends.status}
              </span>
              <p>
                {expectedFriends.tags.map((tag) => {
                  return (
                    <span className="mr-2 rounded-2xl font-bold px-3 py-2 inline-block bg-[#CBFADB] text-[#244D3F]">
                      {" "}
                      {tag}
                    </span>
                  );
                })}
              </p>
            </div>
            <p className="font-semibold text-[#64748B] text-xl italic mt-2">
              {expectedFriends.bio}
            </p>
            <p className="text-[#64748B]">prefered: email</p>
          </div>
          <div className="font-semibold space-y-2 flex flex-col justify-center items-center">
            <p className="flex gap-1 p-3 ">
              <Bell /> Snooze 2 Weeks
            </p>
            <p className="flex gap-1 p-3">
              <Archive /> Achieve
            </p>
            <p className="flex gap-1 p-3 text-red-600">
              <Trash2 /> Delete
            </p>
          </div>
        </div>
        <div className="right-side flex flex-col space-y-6">
          <div className="right-container1 flex gap-2">
            <div className="p-8">
              <p className="font-semibold text-[#244D3F] text-3xl mb-2">
                {expectedFriends.contact}
              </p>
              <p className="text-[#64748B] text-xl">Days Since Contact </p>
            </div>
            <div className="p-8">
              <p className="font-semibold text-[#244D3F] text-3xl mb-2">
                {expectedFriends.goal}
              </p>
              <p className="text-[#64748B] text-xl">Goal(Days)</p>
            </div>
            <div className="p-8">
              <p className="font-semibold text-[#244D3F] text-3xl mb-2">
                {expectedFriends.due}
              </p>
              <p className="text-[#64748B] text-xl">Next Due </p>
            </div>
          </div>
          {/* box 2 */}
          <div className="flex flex-col  w-full p-6 space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-[#244D3F] font-medium text-xl">
                Relationship Goal
              </p>
              <p className="font-bold bg-gray-400 px-2 py-1 rounded-sm">
                Edit{" "}
              </p>
            </div>
            <p className="text-[#64748B] text-left">
              Contact every
              <span className=" font-bold text-black ml-2">
                {expectedFriends.goal} days
              </span>
            </p>
          </div>
          {/* box 3 */}
          <div className="p-6">
            <div className=" mb-4 font-medium text-xl text-[#244D3F] text-left ">
              <h2>Quick Check-in</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 flex flex-col gap-2 justify-center items-center font-bold">
                <PhoneCall></PhoneCall>
                <p className="text-xl">Call</p>
              </div>
              <div className="p-4 flex flex-col gap-2 justify-center items-center font-bold">
                <MessageSquareMore></MessageSquareMore>
                <p className="text-xl">Text</p>
              </div>
              <div className="p-4 flex flex-col gap-2 justify-center items-center font-bold">
                <Video></Video>
                <p className="text-xl">Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carddetails;
