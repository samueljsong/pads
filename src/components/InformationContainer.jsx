
export const InformationContainer = ({details, png}) => {

    return(
        <div className=" w-80 h-60 rounded-2xl bg-surface flex justify-center items-center">
            <div className=" w-[90%] h-[90%] flex flex-col justify-center items-center gap-2">
                <img src={png} alt="" className=" w-15"/>
                <p className="text-text-secondary text-lg">{details}</p>
            </div>
        </div>
    )
}