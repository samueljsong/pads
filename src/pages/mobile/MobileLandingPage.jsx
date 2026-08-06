import { PadButton } from "../../components/PadButton"

export const MobileLandingPage = () => {

    const keys = ['C', 'D', 'E', 'F', 'G', 'A', 'B']

    return (
        <div className=" w-full h-screen flex flex-col items-center justify-center gap-2 bg-transparent">
            <div className=" w-[90%] h-[70vh] overflow-y-auto grid grid-cols-2 items-center justify-between gap-3 bg-transparent">
                {
                    keys.map((key) => {
                        return <PadButton name={key} key={key}/>
                    })
                }
            </div>
            <div>
                <h1 className=" text-text">Play Pause</h1>
            </div>
        </div>
    )
}