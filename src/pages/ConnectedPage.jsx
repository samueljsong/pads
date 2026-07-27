import { socket       } from "../socket"
import { useEffect, useRef    } from "react"
import { Howl, Howler } from "howler"
import { useState     } from "react";

//Pads
import { Audios } from "../models/Audio";

export const ConnectedPage = () => {   
    
    const currentAudioKeyRef = useRef(null);
    const currentAudioIdRef  = useRef(null);

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
                currentAudioKeyRef.current = null;
                currentAudioIdRef.current = null;
                return;
            }

            if (currentKey !== null)
            {
                Audios.organ[currentKey].stop(currentId);
            }
            
            let newAudioId = audio.play('loopPad');
            
            audio.fade(0, 1, 3000, newAudioId);
            currentAudioKeyRef.current = key;
            currentAudioIdRef.current = newAudioId;
        })

        return () => {
            socket.off("session:play");
        }
    }, []);

    return (
        <div className=" w-full h-screen flex justify-center items-center">
            <div className=" flex flex-col justify-center items-center gap-1">
                <h1 className=" text-text text-2xl">Currently Playing</h1>
                {
                    (currentAudioKeyRef.current === null) 
                        ? <h1 className=" text-text text-4xl">...</h1> 
                        : <h1 className=" text-text text-4xl">{currentAudioKeyRef.current}</h1>
                }
            </div>
        </div>
    )
}