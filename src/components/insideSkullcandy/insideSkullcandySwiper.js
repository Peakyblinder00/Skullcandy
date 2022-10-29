import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "../../styles/inside.css"
import "../../styles/responsive.css"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/pagination"

const SwiperInsideSkullcandy = () => {

    const style = {
        insideSkullcandySwiperPage: "w-full h-[120vh]",
        mySwiper: "w-full h-full",
        insideSkullcandyswiperSlide: "w-full h-full",
        swiperSlideDiv1: "w-full h-full flex flex-col justify-center sm:text-center md:text-start sm:items-center md:items-start ISbg bg-cover bg-center px-[4%]",
        swiperSlideDiv2: "w-full h-full flex flex-col justify-center sm:text-center md:text-start sm:items-center md:items-start ISbg2 bg-cover bg-center px-[4%]",
        swiperSlideDiv3: "w-full h-full flex flex-col justify-center sm:text-center md:text-start sm:items-center md:items-start ISbg3 bg-cover bg-center px-[4%]",
        swiperSlideDiv4: "w-full h-full flex flex-col justify-center sm:text-center md:text-start sm:items-center md:items-start ISbg4 bg-cover bg-center px-[4%]",
        swiperSlideTitle: "text-white sm:text-[40px] lg:text-[4vw] font-extrabold uppercase leading-[90%]",
        swiperSlideParagraph: "text-white sm:text-[16px] lg:text-[1.16vw] font-normal leading-[100%] my-[20px]"
    }

    return (
        <div className={style.insideSkullcandySwiperPage}>
            <Swiper
                modules={[Autoplay, Pagination]}
                className={style.mySwiper}
                autoplay={{ delay: 3000 }}
                pagination={{clickable: true}}
                loop={true}
            >
                <SwiperSlide className={style.insideSkullcandyswiperSlide}>
                    <div id="swiperBody" className={style.swiperSlideDiv1}>
                        <p id="bannerTitle" className={style.swiperSlideTitle}>to unleash <br /> the visceral power <br /> of music for all. </p>
                        <p className={style.swiperSlideParagraph}>Understand our Mission, Vision and Values.</p>
                        <button id="buttonSkewHover">
                            <p id="btnText">learn more</p>
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style.insideSkullcandyswiperSlide}>
                    <div id="swiperBody" className={style.swiperSlideDiv2}>
                        <p id="bannerTitle" className={style.swiperSlideTitle}>working at 6,434 feet.</p>
                        <p className={style.swiperSlideParagraph}>Get a peek at our office culture in Park City, Utah.</p>
                        <button id="buttonSkewHover">
                            <p id="btnText">learn more</p>
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style.insideSkullcandyswiperSlide}>
                    <div id="swiperBody" className={style.swiperSlideDiv3}>
                        <p id="bannerTitle" className={style.swiperSlideTitle}>doing well <br /> by doing good.</p>
                        <p className={style.swiperSlideParagraph}>See our dedication to charitable partnerships.</p>
                        <button  id="buttonSkewHover">
                            <p id="btnText">learn more</p>
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style.insideSkullcandyswiperSlide}>
                    <div id="swiperBody" className={style.swiperSlideDiv4}>
                        <p id="bannerTitle" className={style.swiperSlideTitle}>Meet our <br /> amplifiers.</p>
                        <p className={style.swiperSlideParagraph}>Find your own, unique frequancy with a little help from our Amplifiers.</p>
                        <button  id="buttonSkewHover">
                            <p id="btnText">learn more</p>
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SwiperInsideSkullcandy;