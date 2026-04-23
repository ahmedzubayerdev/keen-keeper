import React from 'react';
import instagram from '../../../assets/images/instagram.png'
import facebook from '../../../assets/images/facebook.png'
import twitter from '../../../assets/images/twitter.png'

const Footer = () => {
    return (
        <div className='bg-[#244D3F] text-white mx-auto space-y-5 pt-15'>
            <div >
                <div className='text-center space-y-5'>
                    <div className='space-y-3'>
                        <div className='text-5xl'>
                            <h2 className='font-bold'>Keen<span className='font-semibold'>Keeper</span></h2>
                        </div>
                        <p className='text-white/70'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-3 '>
                        <p className='font-semibold'>Social Links</p>
                        <div className='flex gap-2'>
                            <img src={instagram} alt="instagram logo" />
                            <img src={facebook} alt="facebook logo" />
                            <img src={twitter} alt="twitter logo" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center flex flex-col  justify-between  border-t border-[#1A8862] pt-5 pb-2 text-white/50 text-sm mx-auto md:mx-48 md:flex-row'>
                <div>
                    © 2026 KeenKeeper. All rights reserved.
                </div>
                <div className='flex gap-3 mx-auto md:mx-0'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service </p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;