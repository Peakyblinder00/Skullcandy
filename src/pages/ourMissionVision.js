import "../styles/pages.css"

const Vision = () => {

    const style ={
        vision: "pages1 bg-cover bg-center w-[100%] text-center h-[100vh] flex items-center justify-center p[20px]",
        pagesParagraph: "text-white text-[50px] text-white font-black uppercase drop-shadow-[0px_0px_20px_black]"
    }

    return(
        <div className={style.vision}>
            <p className={style.pagesParagraph}>our mission, vision and values</p>
        </div>
    )
}

export default Vision;