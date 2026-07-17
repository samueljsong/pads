import { useState } from 'react'
import logo from '../../../public/logo.png'
import { socket } from '../../socket';
import { useNavigate } from 'react-router-dom';

export const MobilePairingPage = () => {
    const navigate = useNavigate();

    const [codeInput, setCodeInput] = useState('');

    const onInputChangeHandler = (e) => {
        setCodeInput(e.target.value);
    }

    const onButtonClickHandler = (e) => {
        e.preventDefault();

        socket.emit('session:join', {code: codeInput}, (response) => {
            let success = response.success;

            if (success)
                navigate(`/mobile/${codeInput}`);
            else
                console.log("Could not connect");
        })
    }

    return (
        <div className=" flex flex-col gap-2 w-full h-screen justify-center items-center">
            <div className=" flex gap-2">
                <img className=' w-10' src={logo} alt="" />
                <h1 className=" text-text text-3xl">Pulse</h1>
            </div>
            <input onChange={onInputChangeHandler} className=' text-text-secondary p-2 bg-primary rounded-md text-center text-lg' type="text" placeholder='Input Code' />
            <button onClick={onButtonClickHandler}
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
            >
                Connect
            </button>
        </div>
    )
}