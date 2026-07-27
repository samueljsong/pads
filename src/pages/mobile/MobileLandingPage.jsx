import { PadButton } from "../../components/PadButton"

export const MobileLandingPage = () => {

    const keys = ['C', 'D', 'E', 'F', 'G', 'A', 'B']

    return (
        <div className=" w-full h-screen flex items-center justify-between">
            {
                keys.map((key) => {
                    return <PadButton name={key} key={key}/>
                })
            }
        </div>
    )
}