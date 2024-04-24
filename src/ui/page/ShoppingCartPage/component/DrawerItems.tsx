import Typography from "@mui/material/Typography";
import {Box, Divider} from "@mui/material";
import Button from "@mui/material/Button";
import DrawerQuantitySelector from "./DrawerQuantitySelector.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {CartItemDto} from "../../../../data/CartItem/CartItemDto.ts";
import LoadingContainer from "../../../component/LoadingContainer.tsx";
import * as CartItemApi from "../../../../api/CartItemApi.ts";
import {useNavigate} from "react-router-dom";

type Props = {
    dto : CartItemDto;
    fetchAllCartItems : () => void;
}
export default function DrawerItems({dto, fetchAllCartItems} : Props) {
    const navigate = useNavigate();

    const deleteCartItem = async () => {
        try {
            await CartItemApi.deleteUserCart(dto.pid.toString());
             fetchAllCartItems();
        } catch (error) {
            navigate("/error")
        }
    }

    return (
        <Box sx={{width: '100%', height: '100%', padding: "5px", display: "flex"}}>
            <Box sx={{
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '0px solid lightgrey',
            }}>
                <img style={{maxHeight: "100%", maxWidth: "100%", objectFit: "contain"}}
                     src={dto.imageUrl}
                     alt="something"/>
            </Box>
            <Box >
                <Box display={"flex"} >
                    <Box>
                        <Typography fontSize={12}>{dto.name}</Typography>
                    </Box>
                </Box>
                <Box display={"flex"}>
                    <Box>
                        {/*<Typography  fontSize={12} fontWeight={"bold"}>Unit price :</Typography>*/}
                    </Box>
                    <Box>
                        <Typography fontSize={10} >HKD {dto.price}.00</Typography>
                    </Box>

                </Box>
                <Box display={"flex"}>
                    <Box display={"flex"} alignItems={"flex-end"}>
                        <Typography fontSize={10} fontWeight={"bold"}>Subtotal</Typography>
                        <Typography fontSize={12}>&nbsp;HKD {dto.price * dto.cartQuantity}.00</Typography>
                    </Box>
                    <Box>

                    </Box>

                </Box>
                <Box display={"flex"}>
                    <Box>
                        {dto?
                        <DrawerQuantitySelector fetchAllCartItems={fetchAllCartItems} cartItemQuantity={dto.cartQuantity} stock={dto.stock} pid={dto.pid}/>
                            : <LoadingContainer/>
                        }
                    </Box>
                    <Box ml={13} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Button onClick={deleteCartItem} color={"success"} sx={{
                            minWidth: '24px',
                            width: '24px',
                            height: '24px',
                            borderRadius: '4px',
                        }}><FontAwesomeIcon icon={faTrashCan} style={{color: "#d1d1d1"}}/></Button>
                    </Box>
                </Box>
                <Divider sx={{ mt: 2 }}/>
            </Box>

            <Box>

            </Box>

        </Box>
    )
}