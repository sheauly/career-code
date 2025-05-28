
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Card = () => {
    return (
        <>
            <div className='m-8'>
                <h1 className='text-3xl text-center font-bold'>Browse by category</h1>
                <p className='text-center text-gray-400 m-4'>Find the job that’s perfect for you. about 800+ new jobs everyday</p>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <div className='m-5 gap-5'>

                        <SwiperSlide>
                            <div className="card w-96 bg-base-100 card-xs shadow-sm ">
                                <div className="flex p-8 m-4 py-5">
                                    <div>
                                        <img src={'icon1.png'} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="card-title">Finance</h2>
                                        <p>168 jobs avaiable</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card w-96 bg-base-100 card-xs shadow-sm">
                                <div className="flex p-8 m-4 py-5">
                                    <div>
                                        <img src={'icon2.png'} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="card-title">Finance</h2>
                                        <p>168 jobs avaiable</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card w-96 bg-base-100 card-xs shadow-sm">
                                <div className="flex p-8 m-4 py-5">
                                    <div>
                                        <img src={'icon3.png'} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="card-title">Finance</h2>
                                        <p>168 jobs avaiable</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card w-96 bg-base-100 card-xs shadow-sm">
                                <div className="flex p-8 m-4 py-5">
                                    <div>
                                        <img src={'icon4.png'} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="card-title">HumanResurce</h2>
                                        <p>168 jobs avaiable</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card w-96 bg-base-100 card-xs shadow-sm">
                                <div className="flex p-8 m-4 py-5">
                                    <div>
                                        <img src={'icon5.png'} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="card-title">Finance</h2>
                                        <p>168 jobs avaiable</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card w-96 bg-base-100 card-xs shadow-sm">
                                <div className="flex p-8 m-4 py-5">
                                    <div>
                                        <img src={'icon6.png'} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="card-title">Finance</h2>
                                        <p>168 jobs avaiable</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card w-96 bg-base-100 card-xs shadow-sm">
                                <div className="flex p-8 m-4 py-5">
                                    <div>
                                        <img src={'icon7.png'} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="card-title">Finance</h2>
                                        <p>168 jobs avaiable</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card w-96 bg-base-100 card-xs shadow-sm">
                                <div className="flex p-8 m-4 py-5">
                                    <div>
                                        <img src={'icon8.png'} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="card-title">Finance</h2>
                                        <p>168 jobs avaiable</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card w-96 bg-base-100 card-xs shadow-sm">
                                <div className="flex p-8 m-4 py-5">
                                    <div>
                                        <img src={'icon1.png'} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="card-title">Finance</h2>
                                        <p>168 jobs avaiable</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card w-96 bg-base-100 card-xs shadow-sm">
                                <div className="flex p-8 m-4 py-5">
                                    <div>
                                        <img src={'icon8.png'} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="card-title">Finance</h2>
                                        <p>168 jobs avaiable</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide> */}
                    </div>
                </Swiper>
            </div>
        </>
    );
};

export default Card;