import { ChartLine, Clock3, House } from 'lucide-react';


function PageToggle (){
}

const Navbar = () => {
    return (
        <div className='flex  flex-col gap-3 text-center mx-auto justify-between mt-5 md:flex-row'>
            <div className='text-2xl'>
                <h2 className='font-bold'>Keen<span className='text-green-800 font-semibold'>keeper</span></h2>
            </div>
            <div className='flex gap-4 text-gray-500 mx-auto md:mx-0'>
                <div className='flex gap-1 justify-center items-center  bg-[#244D3F] rounded-sm text-white p-3'>
                    <House />
                    <button>Home</button>
                </div>
                <div className='flex gap-1 justify-center items-center'>
                    <Clock3 />
                    <button
                    >Timeline</button>
                </div>
                <div className='flex gap-1 justify-center items-center'>
                    <ChartLine />
                    <button
                    >Stats</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;