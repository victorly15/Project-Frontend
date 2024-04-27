import {Box, Snackbar, Stack} from "@mui/material";
import Button from "@mui/material/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import Typography from "@mui/material/Typography";

import * as CartItemApi from "../../../../api/CartItemApi.ts"
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {UserData} from "../../../../data/user/UserData.ts";
import {LoginUserContext} from "../../../../context/LoginUserContext.ts";

type Props = {
    quantity: number;
    pid: number;
    handleMinus:() => void;
    handlePlus: () => void;
}
export default function QuantitySelector({quantity,pid, handlePlus, handleMinus}:Props){

    const navigate = useNavigate();
    const loginUser = useContext<UserData | undefined | null>(LoginUserContext);

    const [addSucess, setAddSucess] = useState<boolean>(false)
    const putCartItem = async () => {
        try {

            if(loginUser){
            await CartItemApi.putUserCart(pid.toString(), quantity.toString());
            setAddSucess(true);} else {
                navigate("/login")
            }

            // setAddSucess(false);
        }catch (error) {
            navigate("/error")
        }

    }



    return (
        <Box>
        <Stack direction={"row"} alignItems={"center"}>
            <Box>
                <Button variant={"contained"}
                        color={"success"}
                        disableElevation={true}
                        sx={{
                            minWidth: "24px",
                            minHeight: "24px",
                            borderRadius: 50,
                            padding: "0",
                            backgroundColor: '#000000',
                            color: '#ffffff'
                        }}
                         onClick={handleMinus}   >
                    <FontAwesomeIcon icon={faMinus} />
                </Button>
            </Box>
            <Box sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                minWidth: "32px",
                minHeight: "32px"}}>
                <Typography >{quantity}</Typography>
            </Box>
            <Box>
                <Button variant={"contained"}
                        color={"success"}
                        disableElevation={true}
                        sx={{
                            minWidth: "24px",
                            minHeight: "24px",
                            borderRadius: 50,
                            padding: "0",
                            backgroundColor: '#000000',
                            color: '#ffffff'
                        }}
                        onClick={handlePlus}
                >
                    <FontAwesomeIcon icon={faPlus} />
                </Button>

            </Box>
            <Box ml={2} mr={2}>
                <Button  variant={"outlined"}
                         sx={{
                             mx: 1, fontWeight: "bold", borderWidth: "1px", borderRadius:"20px",
                             backgroundColor:"whitesmoke",
                             borderColor: "whitesmoke", // Set the border color to black
                             color: "black", // Set the text color to black
                             '&:hover': {
                                 backgroundColor: 'black', // Set hover background color to black
                                 color: 'white'}, // Set hover text color to white},
                         }}
                         onClick={putCartItem}>
                    <Typography fontSize={"10px"}>
                        Add to Cart
                    </Typography>
                </Button>
                <Snackbar
                    open={addSucess}
                    autoHideDuration={2000}
                    onClose={()=>setAddSucess(false)}
                    message="Item added"
                />

            </Box>
        </Stack>

        </Box>
    )
}