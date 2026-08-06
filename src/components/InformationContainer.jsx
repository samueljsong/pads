
export const InformationContainer = ({details, png}) => {

    return(
        <div className=" w-60 h-60 rounded-2xl bg-[#0a0a0c] customShadow flex justify-center items-center lg:w-80">
            <div className=" w-[90%] h-[90%] flex flex-col justify-center items-center gap-2">
                <img src={png} alt="" className=" w-15"/>
                <p className="text-text-secondary text-lg">{details}</p>
            </div>
        </div>
    )
}