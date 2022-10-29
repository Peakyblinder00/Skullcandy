import insideBg1 from "../../images/insideSkullcandy/insideBg1.jpg"
import insideBg2 from "../../images/insideSkullcandy/insideBg2.jpg"
import insideBg3 from "../../images/insideSkullcandy/insideBg3.jpg"
import insideBg4 from "../../images/insideSkullcandy/insideBg4.jpg"
import "../../styles/inside.css"
import "../../styles/responsive.css"

const InsideBody = () => {

    const style = {
        insideBodyMain: "w-[100%] h-auto flex flex-col",
        insideBody: "w-[100%] sm:h-[100vh] md:h-[70vh] overflow-hidden relative cursor-pointer",
        insideBodyHoverImg: "h-full w-full object-center object-cover scale-1 hover:scale-[1.03] duration-[1s] hover:brightness-[90%]",
        insideBodyTitle: "text-white sm:text-[40px] sm:text-center md:text-start md:text-[4vw] font-extrabold uppercase leading-[90%]",
        insideBodyText: "text-white lg:text-[1.16vw] sm:text-[15px] font-normal leading-[100%] my-[20px]",
        insideBodyInfoDiv: "absolute h-full sm:w-full md:w-auto top-0 bottom-0 md:right-[4%] flex flex-col justify-center sm:items-center md:items-start",
        insideBodyInfoDiv2: "absolute h-full sm:w-full md:w-auto top-0 bottom-0 md:left-[4%] flex flex-col justify-center sm:items-center md:items-start"
    }

    return (
        <div className={style.insideBodyMain}>
            <div id="insideSkull" className={style.insideBody}>
                <img className={style.insideBodyHoverImg} src={insideBg1} alt="" />
                <div id="insideSkull2" className={style.insideBodyInfoDiv}>
                    <p id="bannerTitle" className={style.insideBodyTitle}>our mission, <br /> vision <br /> and values.</p>
                    <p className={style.insideBodyText}>See the principles that guide the way we work and play.</p>
                    <button id="buttonSkewHover">
                        <p id="btnText">learn more</p>
                    </button>
                </div>
            </div>
            <div id="insideSkull" className={style.insideBody}>
                <img className={style.insideBodyHoverImg} src={insideBg2} alt="" />
                <div id="insideSkull2" className={style.insideBodyInfoDiv2}>
                    <p id="bannerTitle" className={style.insideBodyTitle}>our culture.</p>
                    <p className={style.insideBodyText}>Get a look at our unique office life in Park City, Utah</p>
                    <button id="buttonSkewHover">
                        <p id="btnText">learn more</p>
                    </button>
                </div>
            </div>
            <div id="insideSkull" className={style.insideBody}>
                <img className={style.insideBodyHoverImg} src={insideBg3} alt="" />
                <div id="insideSkull2" className={style.insideBodyInfoDiv}>
                    <p id="bannerTitle" className={style.insideBodyTitle}>our charitable <br /> partnerships.</p>
                    <p className={style.insideBodyText}>Learn how Skullcandy is doing well by doing good.</p>
                    <button id="buttonSkewHover">
                        <p id="btnText">learn more</p>
                    </button>
                </div>
            </div>
            <div id="insideSkull" className={style.insideBody}>
                <img className={style.insideBodyHoverImg} src={insideBg4} alt="" />
                <div id="insideSkull2" className={style.insideBodyInfoDiv2}>
                    <p id="bannerTitle" className={style.insideBodyTitle}>find your <br /> frequency.</p>
                    <p className={style.insideBodyText}>Meet the team that will help you find your own frequency.</p>
                    <button id="buttonSkewHover">
                        <p id="btnText">learn more</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InsideBody;