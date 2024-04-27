import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

export default function GoHome()
{
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/")

    }

    return (
        <Button variant={"outlined"} onClick={handleClick} sx={{
            mx: 1, fontWeight: "bold", borderWidth: "3px",borderRadius:"20px",

            borderColor: "white", // Set the border color to black
            color: "white", // Set the text color to black
            '&:hover': {
                // backgroundColor: 'black',
                borderColor: "white",
                borderWidth: "3px",// Set hover background color to black
                color: 'white'},
        }}>
            Go back home
        </Button>
    )
}