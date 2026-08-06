import { socket } from "../socket"
import { useParams } from "react-router-dom";

export const PadButton = ({name}) => {

    const { code } = useParams();

    const onButtonClickHandler = (e) => {
        e.preventDefault();

        socket.emit('session:play', {key: name, code: code}, (response) => {
            let success = response.success;

            if (success)
            {
                console.log(`Started playing pad ${name}`)
            }
            else
            {
                console.log('Something went wrong');
            }
        })
    }

    return (
        <div className="
            w-full aspect-square bg-primary rounded-md flex flex-col items-center justify-center 
            hover:bg-primary-hover cursor-pointer"
            onClick={onButtonClickHandler}
        >
            <h1 className=" text-text text-4xl">
                {name}
            </h1>
        </div>
    )
}