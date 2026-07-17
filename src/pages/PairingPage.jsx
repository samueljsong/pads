import { useEffect, useState } from "react";
import { socket } from "../socket"
import { useLocation, useNavigate } from "react-router-dom";

import QRCode from "react-qr-code";

export const PairingPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [ isConnected , setIsConnected ] = useState(false);
    const [ code        , setCode        ] = useState('');
    const [ qrValue     , setQrValue     ] = useState('');

    useEffect(() => {
        socket.emit("session:create", (response) => {
            setIsConnected(response.success);
            setCode(response.code);
            setQrValue(response.qrValue);

            console.log(response);
        })
    }, []);

    return(
        <div className=" flex gap-4 items-center justify-center h-screen w-full">
            {
                isConnected 
                ?             
                    <>
                        <div className=" bg-white p-2 rounded-md">
                            <QRCode value={qrValue}/>
                        </div>
                        <div className=" text-center flex flex-col gap-2">
                            <p className=" text-text text-2xl">Scan the QR or join at pulse.com</p>
                            <h1 className=" text-text text-4xl tracking-widest">
                                {code}
                            </h1>
                        </div>
                    </> 
                : 
                    <></>
            }
        </div>
    )
}