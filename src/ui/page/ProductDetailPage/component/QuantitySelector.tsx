import {Box, Snackbar, Stack} from "@mui/material";
import Button from "@mui/material/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import Typography from "@mui/material/Typography";

import * as CartItemApi from "../../../../api/CartItemApi.ts"
import { useState} from "react";
import {useNavigate} from "react-router-dom";

type Props = {
    quantity: number;
    pid: number;
    handleMinus:() => void;
    handlePlus: () => void;
}
export default function QuantitySelector({quantity,pid, handlePlus, handleMinus}:Props){

    const navigate = useNavigate();

    const [addSucess, setAddSucess] = useState<boolean>(false)
    const putCartItem = async () => {
        try {

            await CartItemApi.putUserCart(pid.toString(), quantity.toString());
            setAddSucess(true);

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
                             mx: 1, fontWeight: "bold", borderWidth: "2px", borderRadius:"20px",
                             borderColor: "black", // Set the border color to black
                             color: "black", // Set the text color to black
                             '&:hover': {
                                 backgroundColor: 'black', // Set hover background color to black
                                 color: 'white'}, // Set hover text color to white},
                         }}
                         onClick={putCartItem}>
                    <Typography fontSize={"8px"}>
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