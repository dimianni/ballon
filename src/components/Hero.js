import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { useState, useEffect, useRef } from 'react';

import arrowPrev from "../../public/slick-arrow-prev.svg"
import arrowNext from "../../public/slick-arrow-next.svg"
import FeaturedPost from './FeaturedPost';


export default function Hero() {

    const [featuredposts, setFeaturedposts] = useState([]);
    const [swiper, setSwiper] = useState();
    const prevRef = useRef();
    const nextRef = useRef();

    const getFeaturedPosts = async () => {
        let response = await fetch('api/featuredposts')
        let { data } = await response.json()
        setFeaturedposts(data)
    }

    useEffect(() => {
        getFeaturedPosts()
    }, [])

    // https://www.appsloveworld.com/reactjs/200/191/custom-arrow-swiper-slider-next-js-sass
    useEffect(() => {
        if (swiper && swiper.destroyed !== true) {
            // console.log("Swiper instance:", swiper);
            swiper.navigation.prevEl = prevRef.current;
            swiper.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, [swiper]);

    return (
        <section className="hero mb-12 border-b-4 border-pink-500">
            <ul className='swiper-cont w-full'>
                <Swiper
                    className='w-full'
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    // loop={true}
                    autoplay={{ delay: 7000 }}
                    onSwiper={setSwiper}
                    navigation={{
                        prevEl: prevRef?.current,
                        nextEl: nextRef?.current
                    }}
                >       
                    {featuredposts?.map(featuredpost => {
                        return (
                            <SwiperSlide key={featuredpost.node.slug}>
                                <FeaturedPost post={featuredpost.node} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

                <div ref={prevRef} className="myswiperbtns swiper-button-prev">
                    <Image src={arrowPrev} alt="Arrow to previous article" />
                </div>
                <div ref={nextRef} className="myswiperbtns swiper-button-next">
                    <Image src={arrowNext} alt="Arrow to next article" />
                </div>

            </ul>
        </section>
    )
}