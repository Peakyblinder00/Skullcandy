import "../styles/pages.css"

const MusicMission = () => {

    const style ={
        vision: "pages5 bg-cover bg-center w-[100%] text-center h-[100vh] flex items-center justify-center p[20px]",
        pagesParagraph: "text-white text-[50px] text-white font-black uppercase drop-shadow-[0px_0px_20px_black]"
    }

    return(
        <div className={style.vision}>
            <p className={style.pagesParagraph}>music with a mission.</p>
        </div>
    )
}

export default MusicMission;