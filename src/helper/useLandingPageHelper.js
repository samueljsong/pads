import { useNavigate } from "react-router-dom";

export const useLandingPageHelper = () => {

    const navigate = useNavigate();

    const StartNewSession = async() => {
        navigate("/pairing");
    }

    return{
        StartNewSession
    }
}