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
            mx: 1, fontWeight: "bold", borderWidth: "2px",borderRadius:"20px",
            borderColor: "black", // Set the border color to black
            color: "black", // Set the text color to black
            '&:hover': {
                backgroundColor: 'black', // Set hover background color to black
                color: 'white'},
        }}>
            Go back home
        </Button>
    )
}