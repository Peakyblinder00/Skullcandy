import "../styles/pages.css"

const Frequency = () => {

    const style ={
        vision: "pages4 bg-cover bg-center w-[100%] text-center h-[100vh] flex items-center justify-center p[20px]",
        pagesParagraph: "text-white text-[50px] text-white font-black uppercase"
    }

    return(
        <div className={style.vision}>
            <p className={style.pagesParagraph}>find your frequency.</p>
        </div>
    )
}

export default Frequency;