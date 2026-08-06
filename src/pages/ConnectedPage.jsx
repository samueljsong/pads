import { socket       } from "../socket"
import { useEffect, useRef, useState } from "react"
import { Howl, Howler } from "howler"
import '../App.css'

//Pads
import { Audios } from "../models/Audio";

export const ConnectedPage = () => {   
    const [currentAudioKey, setCurrentAudioKey] = useState("");

    const currentAudioKeyRef = useRef(null);
    const currentAudioIdRef  = useRef(null);

    const updateCurrentAudioKey = (key) => {
        currentAudioKeyRef.current = key;
        setCurrentAudioKey(key);
    }

    useEffect(() => {
        socket.on("session:play", (data, callback) => {
            console.log("Running play useeffect")
            let key        = data.key;
            let audio      = Audios.organ[key];
            let currentKey = currentAudioKeyRef.current;
            let currentId  = currentAudioIdRef.current;

            if(currentKey === key)
            {
                console.log('same key pressed');
                audio.stop(currentId);
                updateCurrentAudioKey(null);
                currentAudioIdRef.current = null;
                return;
            }

            if (currentKey !== null)
            {
                Audios.organ[currentKey].stop(currentId);
            }
            
            let newAudioId = audio.play('loopPad');
            
            audio.fade(0, 1, 3000, newAudioId);
            updateCurrentAudioKey(key);
            currentAudioIdRef.current = newAudioId;
        })

        return () => {
            socket.off("session:play");
        }
    }, []);

    return (
        <div className=" w-full h-screen flex justify-center items-center bg-transparent">
            <div className=" flex flex-col justify-center items-center gap-1">
                <h1 className=" text-text text-2xl">Currently Playing</h1>
                {
                    (currentAudioKeyRef.current === null) 
                        ? <h1 className=" text-text text-4xl">Nothing...</h1> 
                        : <h1 className=" text-text text-4xl">{currentAudioKey} Organ Pad</h1>
                }
            </div>
        </div>
    )
}