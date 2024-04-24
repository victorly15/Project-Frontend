import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import DrawerItems from "./component/DrawerItems.tsx";
import { Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import React, {useContext, useEffect, useState} from "react";
import {CartItemDto} from "../../../data/CartItem/CartItemDto.ts";
import {useNavigate} from "react-router-dom";
import * as CartItemApi from "../../../api/CartItemApi.ts";
import LoadingContainer from "../../component/LoadingContainer.tsx";
import CheckOutButton from "./component/CheckOutButton.tsx";
import {UserData} from "../../../data/user/UserData.ts";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";




type Props = {
    drawerOpen : boolean;
    setDrawerOpen :  React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ShoppingCartPage({drawerOpen, setDrawerOpen}:Props) {
    const [cartItemDtoList, setCartItemDtoList] = useState<CartItemDto[] | undefined>(undefined);
    const loginUser = useContext<UserData | undefined | null>(LoginUserContext);

    const toggleDrawer = (newOpen : boolean) => () => {
        setDrawerOpen(newOpen);
    };

    const navigate = useNavigate();

    const fetchAllCartItems = async () => {
        try {
            // setCartItemDtoList(undefined);
            const responseDtoList = await CartItemApi.getUserCart();
            setCartItemDtoList(responseDtoList);
        } catch (error) {
            navigate('/error');
        }
    };




    useEffect(() => {
        // Fetch cart items on component mount (initial render)
        if (loginUser){
        fetchAllCartItems();}
    }, [loginUser]);



    const subtotal = () => {
        let total = 0;
        if(cartItemDtoList)
        { cartItemDtoList.forEach((dto) => {
            const itemTotal = dto.cartQuantity * dto.price;
            total += itemTotal;
        });
        }

        return total.toLocaleString('en-HK', { style: 'currency', currency: 'HKD' });
    };



    const list = () => (
            <Box sx={{ maxWidth: 350, minWidth: 350 }} role="presentation">
                <Box mt={2} ml={3} mb={1}>
                    <Box>
                    <Box>
                        <Typography color="#1c1c1c" fontSize={24} sx={{ fontFamily: 'Georgia, serif' }}>
                            Review Cart
                        </Typography>
                    </Box>

                    </Box>

                </Box>
                {cartItemDtoList ? (
                    <Box>
                    <Grid container spacing={3}>

                        {cartItemDtoList.map((dto) => (
                            <Grid item key={dto.pid} xs={12}>
                                <DrawerItems dto={dto} fetchAllCartItems={fetchAllCartItems} />
                            </Grid>
                        ))}
                    </Grid>
                        {cartItemDtoList.length > 0 && (
                           <>
                            <Box mb={2} display="flex" width="90%" justifyContent={"flex-end"}>
                                <Typography color="black" variant="h6" sx={{ fontFamily: 'Georgia, serif' }}>
                                    Total:&nbsp;{subtotal()}
                                </Typography>
                            </Box>
                            <Box mb={5} display="flex" width="100%" alignItems="center" justifyContent="center">
                                <CheckOutButton/>

                    </Box>
                           </>
                        )}
                    </Box>
                    )
                    : (
                    <LoadingContainer />
                )}
                <Box />

            </Box>
    );

    return (
        <div>

            <Drawer
                anchor="right"
                open={drawerOpen} // Use state for right drawer open state
                onClose={toggleDrawer(false)} // Close right drawer
                onTransitionEnter={fetchAllCartItems}
            >
                {list()}

            </Drawer>
        </div>
    );
}