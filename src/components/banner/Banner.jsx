import { Plus } from "lucide-react";
import Card from "../ui/Card";
import useCards from "../../hooks/useCards";

const Banner = () => {
  const { friends } = useCards();

  return (
    <div className="container my-20 w-3/4 mx-auto ">
      <div className="text-center flex flex-col items-center space-y-6">
        <h1 className="font-bold text-5xl">
          Friends to keep close in your life
        </h1>
        <p className="text-[#64748B]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the
          <br />
          relationships that matter most.
        </p>
        <button className="flex gap-1 bg-[#244D3F] text-white px-3 py-2 rounded-sm">
          <Plus /> <span>Add a Friend</span>
        </button>
      </div>
      <div className="card-container">
        <div className="stats-container text-center py-15 text-[#244D3F] grid grid-cols-2  gap-4 md:grid-cols-4">
          <div>
            <p className="text-black font-semibold text-3xl pb-3">
              {friends.length}
            </p>
            <p>Total Friends</p>
          </div>
          <div>
            <p className="text-black font-semibold text-3xl pb-3">3</p>
            <p>On Track</p>
          </div>
          <div>
            <p className="text-black font-semibold text-3xl pb-3">5</p>
            <p>Need Attention</p>
          </div>
          <div>
            <p className="text-black font-semibold text-3xl pb-3">10</p>
            <p>Interaction This Month</p>
          </div>
        </div>
        <div className="font-semibold text-2xl mb-1">
          <h2>Your Friends</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {friends.map((friend, ind) => {
            return <Card friend={friend} key={ind}></Card>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Banner;
