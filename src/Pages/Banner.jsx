import React from 'react';
import { motion } from 'framer-motion';
import team1 from '../assets/team.json/team1.jpeg'
import team2 from '../assets/team.json/team2.jpg'

const Banner = () => {
    return (
        <div className="hero  min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        src={team1}
                        animate={{y: [100, 150, 100]}}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="max-w-sm border-s-8 border-b-8 border-blue-500 rounded-t-[40px] rounded-br-[40px]  shadow-2xl"
                    />
                    <motion.img
                        src={team2}
                        animate={{x: [100, 150, 100]}}
                        transition={{ duration: 10, delay:5, repeat: Infinity }}
                        className="max-w-sm border-s-8 border-b-8 border-blue-500 rounded-t-[40px] rounded-br-[40px]  shadow-2xl"
                    />
                </div>
                <div className='flex-1'>
                    {/* <motion.h1
                        animate={{
                            rotate: 180,
                            X: 200,
                            y: -200,
                            transition: { duration: 4 }
                        }}
                        className="text-5xl font-bold">Latest jobs for You!</motion.h1> */}
                    <motion.h1
                        initial={{ scale: 0 }}
                        animate={{
                                scale: 1,
                                transition: { duration: 4 },

                            }}
                        className="text-5xl font-bold"
                    >
                        Remote <motion.span
                            animate={
                                {
                                    color: ['#ff3333', '#34ff33', '#334bff '],
                                    transition: { duration: 2, repeat: Infinity }
                                }}
                        >Job For</motion.span>  You?
                    </motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;