import { motion } from "motion/react"
import { useLandingPageHelper } from '../helper/useLandingPageHelper'
import downArrow from '../assets/downarrow.png'
import { InformationContainer } from "../components/InformationContainer"
import { PlanComponent } from "../components/PlanComponent"

// assets
import launch from '../assets/launch.png'
import qr from '../assets/qr.png'
import control from '../assets/control.png'

export const LandingPage = () => {

    const {StartNewSession} = useLandingPageHelper();

    const step1 = "Launch Pulse on your computer to generate a session.";
    const step2 = "Scan the QR code or enter the session code."
    const step3 = "Control your pads instantly from your phone."

    const free = {
        perks : [
            "Unlimited sessions",
            "Access to predefined ambient pads",
            "Basic phone controller"
        ],
        status: true,
        price : 0,
        perkName: "Free"
    }

    const pro = {
        perks : [
            "Everything in Free",
            "Upload your own pad libraries",
            "Organize pads into collections",
            "Favorites and quick access",
            "Crossfade between pads",
            "Save preffered settings"
        ],
        status : false,
        price: 5,
        perkName : "Pro"
    }

    const team = {
        perks : [
            "Everything in Pro",
            "Shared pad libraries",
            "Multiple team members",
            "Song Presets",
            "Multi-device controllers",
            "Cloud sync"
        ],
        status : false,
        price : 10,
        perkName: "Team"
    }

    return (
        <div className=" flex flex-col w-full h-full items-center">
            <section className=" flex w-[90%] h-screen flex-col items-center justify-center gap-2 md:w-full">
                <h1 className=" font-bold text-text text-[7vw] lg:text-6xl md:text-5xl sm:text-4xl">
                    Get a Full Sound Anywhere
                </h1>
                <h2 className=" text-text-secondary text-lg text-center">
                    Designed for small worship teams that want a full sound without extra musicians.
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
                    Launch Session
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
            <section className=" flex flex-col w-full items-center justify-center mt-30">
                <div className=" flex flex-col w-[90%] h-full items-center justify-center text-center gap-10 md:w-[50%]">
                    <h2 className=" text-text text-[7vw] md:text-5xl">
                        What is Pulse?
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Created for small worship teams, Pulse is a remote pad controller built for worship leaders. 
                        Pair your phone with your computer in seconds and control ambient pads without interrupting your playing.
                    </p>
                </div>
            </section>
            <section className="flex flex-col w-full items-center justify-center mt-60">
                <div className=" flex flex-col w-[50%] h-full items-center justify-center text-center gap-20">
                    <h2 className=" text-text text-[7vw] md:text-5xl">
                        How it Works
                    </h2>
                    <div className=" flex flex-col gap-4 md:flex-row">
                        <InformationContainer details={step1} png={launch}/>
                        <InformationContainer details={step2} png={qr}/>
                        <InformationContainer details={step3} png={control}/>
                    </div>
                </div>
            </section>
            <section className="flex flex-col w-full items-center justify-center mt-60 gap-20">
                <h2 className=" text-text text-center text-[7vw] md:text-5xl">
                    Find the Perfect Plan 
                    <br/>for your use case
                </h2>
                <div className=" flex flex-col items-center w-full gap-4 justify-center lg:flex-row">
                    <PlanComponent details={free} />
                    <PlanComponent details={pro} />
                    <PlanComponent details={team}/>
                </div>
            </section>
            {/* <section className="flex flex-col w-full items-center justify-center mt-60">
                <h2 className=" text-text text-center text-[7vw] md:text-5xl">
                    Want A Specific Feature?
                </h2>
            </section> */}
            <footer className=" mt-60">

            </footer>
        </div>
    )
}