import { ChartLine, Clock3, House } from 'lucide-react';
import { NavLink } from 'react-router';




const Navbar = () => {
    return (
        <div className='flex  flex-col gap-3 text-center  justify-between mt-5 md:flex-row md:mx-10'>
            <div className='text-2xl'>
                <h2 className='font-bold'>Keen<span className='text-green-800 font-semibold'>keeper</span></h2>
            </div>
            <div className='flex  text-gray-500 mx-auto md:mx-0 gap-2 md:gap-4'>
                <div className='flex  justify-center items-center'>
                    <NavLink 
                    to="/" 
                    className={({isActive})=>
                    `flex gap-1 items-center ${
                            isActive ? "bg-[#244D3F] p-3 text-white rounded-sm" : "text-gray"
                            }`
                            }>
                                <House />
                                <span>Home</span>
                            </NavLink>
                </div>
                <div className='flex  justify-center items-center '>
                    <NavLink
                     to="/timeline" 
                     className={({ isActive })=>
                     `flex gap-1 items-center ${
                            isActive ? "bg-[#244D3F] p-3 text-white rounded-sm" : "text-gray"
                            }`
                            }>
                                <Clock3 />
                                <span>Timeline</span>
                            </NavLink>
                </div>
                <div className="flex justify-center items-center">
                    <NavLink
                        to="/stats"
                        className={({ isActive }) =>
                        `flex gap-1 items-center ${
                            isActive ? "bg-[#244D3F] p-3 text-white rounded-sm" : "text-gray"
                        }`
                        }
                    >
                        <ChartLine />
                        <span>Stats</span>
                    </NavLink>
                </div>
                
                
            </div>
        </div>
    );
};

export default Navbar;