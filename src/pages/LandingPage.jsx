import { motion } from "motion/react"
import { useLandingPageHelper } from '../helper/useLandingPageHelper'
import downArrow from '../assets/downarrow.png'

export const LandingPage = () => {

    const {StartNewSession} = useLandingPageHelper();

    return (
        <div className=" flex flex-col w-full h-full">
            <section className=" flex w-full h-screen flex-col items-center justify-center gap-2">
                <h1 className=" font-bold text-text text-6xl">
                    Get A Full Sound Anywhere
                </h1>
                <h2 className=" text-text-secondary text-lg">
                    Play audio pads instantly and build rich, layered sounds with real-time control.
                </h2>
                <button 
                    className=" 
                        bg-surface 
                        text-text-secondary 
                        text-lg 
                        py-2 
                        px-4 
                        rounded-md 
                        text-center 
                        hover:bg-surface-hover cursor-pointer
                    "
                    onClick={StartNewSession}
                >
                    Start a Session
                </button>

                <motion.div animate={{
                    y: [0, 20, 0]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }} 
                
                className=" mt-20 flex flex-col gap-2 items-center">
                    <p className=" text-text-secondary">Scroll For More Information</p>
                    <img src={downArrow} alt="" className=" w-4"/>
                </motion.div>
            </section>
        </div>
    )
}