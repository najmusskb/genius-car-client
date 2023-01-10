import React from 'react';

const Banneritem = ({ image }) => {
    return (

        <div id="slide1" className="carousel-item relative w-full">
            <div className='Carousel'>
                <img src={image} alt="" className="w-full" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
                <h1 className='text-6xl font-bold text-white'>
                    Affordable <br />
                    Price For Car <br />
                    Servising
                </h1>
            </div>

            <div className="absolute w-2/5 flex justify-end transform -translate-y-1/2 left-24  top-1/2">
                <p className='text-white text-xl'>
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                </p>
            </div>

            <div className="absolute w-2/5 flex justify-start    transform -translate-y-1/2 left-24  top-3/4">
                <button className="btn btn-warning mr-5">Discover More</button>
                <button class="btn btn-outline ">Latest Project</button>





            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>


    );
};

export default Banneritem;