import React from 'react';
import { Link } from 'react-router';

const Errorpage = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center  px-4">
                <div className="text-center max-w-xl">
                    
                    <h1 className="text-[120px] font-extrabold text-green-700 drop-shadow-lg">
                    404
                    </h1>

                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                    Page Not Found
                    </h2>

                    <p className="mb-8">
                    The page you're looking for doesn’t exist or has been moved.
                    </p>

                    <Link
                    to="/"
                    className="inline-block bg-green-400 text-green-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-300 hover:scale-105 transition-all duration-300"
                    >
                    Go Back Home
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Errorpage;