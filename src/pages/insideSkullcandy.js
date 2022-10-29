import InsideBody from "../components/insideSkullcandy/insideBody";
import SwiperInsideSkullcandy from "../components/insideSkullcandy/insideSkullcandySwiper";

const InsideSkull = () => {

    const style = {
        inside: "w-[100%] h-auto",
    }

    return(
        <div className={style.insideSkullcandy}>
            <SwiperInsideSkullcandy/>
            <InsideBody/>
        </div>
    )
}

export default InsideSkull;