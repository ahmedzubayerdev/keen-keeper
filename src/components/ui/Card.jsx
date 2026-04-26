import React from "react";
import { Link } from "react-router";

const Card = ({ friend }) => {
  return (
    <Link to={`/card/${friend.id}`} className="p-6 ">
      <div className="flex justify-center items-center mb-3">
        <img
          src={friend.picture}
          alt=""
          className=" rounded-[50%] w-20 h-20 object-cover"
        />
      </div>
      <div className="space-y-2 text-center">
        <h2 className="font-bold text-xl ">{friend.name}</h2>
        <p className="text-[#244D3F]">{friend.contact}d ago</p>
        <p>
          {friend.tags.map((tag) => {
            return (
              <span className="mr-2 rounded-2xl font-bold px-3 py-2 inline-block bg-[#CBFADB] text-[#244D3F]">
                {" "}
                {tag}
              </span>
            );
          })}
        </p>
        <span
          className={` px-2 py-1 font-semibold rounded-full text-white mt-3 inline-block
                                                ${
                                                  friend.status === "Overdue"
                                                    ? "bg-red-500"
                                                    : friend.status ===
                                                        "Almost Due"
                                                      ? "bg-yellow-500"
                                                      : "bg-green-700"
                                                }
                                                
                                                `}
        >
          {friend.status}
        </span>
      </div>
    </Link>
  );
};

export default Card;
