import "../styles/pages.css"

const Culture = () => {

    const style ={
        vision: "pages2 bg-cover bg-center w-[100%] text-center h-[100vh] flex items-center justify-center p[20px]",
        pagesParagraph: "text-white text-[50px] text-white font-black uppercase"
    }

    return(
        <div className={style.vision}>
            <p className={style.pagesParagraph}>our culture.</p>
        </div>
    )
}

export default Culture;