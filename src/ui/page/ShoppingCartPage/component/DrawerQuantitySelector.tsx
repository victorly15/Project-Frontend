import {Box, Stack} from "@mui/material";
import Button from "@mui/material/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import Typography from "@mui/material/Typography";
import * as CartItemApi from "../../../../api/CartItemApi.ts";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {LoginUserContext} from "../../../../context/LoginUserContext.ts";
import {UserData} from "../../../../data/user/UserData.ts";

type Props = {
    cartItemQuantity : number;
    stock:number;
    pid:number;
    fetchAllCartItems : () => void;
}
export default function DrawerQuantitySelector({fetchAllCartItems, cartItemQuantity, stock, pid}:Props) {

    const [stockToAdjust, setStockToAdjust] = useState<number>(cartItemQuantity);
    const navigate = useNavigate();
    const loginUser = useContext<UserData | undefined | null>(LoginUserContext);


    const handleMinus = async () => {
        if (stockToAdjust > 1) {
            setStockToAdjust(stockToAdjust - 1);
            await updateCartItem();

        }
    };
        const handleAdd = async () => {
            if(stockToAdjust < stock) {

                setStockToAdjust(stockToAdjust + 1); // Update the local state immediately
                await updateCartItem();
            }
        };

    const updateCartItem = async () => {
        try {
            await CartItemApi.updateUserCart(pid.toString(), stockToAdjust.toString());
            fetchAllCartItems();
        } catch (error) {
            navigate("/error")
        }
    }

    useEffect(() => {
        if(loginUser){
        updateCartItem();}

    }, [loginUser, stockToAdjust]);


    return (
        <Box mt={1}>
            <Stack direction={"row"} alignItems={"center"}>
                <Box>
                    <Button onClick={handleMinus} variant={"outlined"}
                            color={"success"}
                            sx={{
                                minWidth: "32px",
                                minHeight: "32px",
                                borderRadius: "25%",
                                padding: "0"
                            }}>
                        <FontAwesomeIcon icon={faMinus} />
                    </Button>
                </Box>
                <Box sx={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    minWidth: "32px",
                    minHeight: "32px"}}>
                    <Typography >{cartItemQuantity}</Typography>
                </Box>
                <Box>
                    <Button onClick={handleAdd} variant={"outlined"}
                            color={"success"}
                            sx={{
                                minWidth: "32px",
                                minHeight: "32px",
                                borderRadius: "25%",
                                padding: "0"
                            }}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </Box>
                </Stack>
        </Box>
    )
}