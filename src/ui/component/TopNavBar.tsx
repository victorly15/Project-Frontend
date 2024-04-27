import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import React, {useContext, useState} from "react";
import {CssBaseline, Menu, MenuItem, Stack, useScrollTrigger} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLeaf} from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from "react-router-dom";
import {LoginUserContext} from "../../context/LoginUserContext.ts";
import {UserData} from "../../data/user/UserData.ts";
import * as FirebaseAuthService from "../../authService/FriebaseAuthService.ts";
import ShoppingCartPage from "../page/ShoppingCartPage/ShoppingCartDrawer.tsx";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {AccountCircle} from "@mui/icons-material";

interface ElevationScrollProps {
    children: React.ReactElement;
}
const ElevationScroll: React.FC<ElevationScrollProps> = ({children}) => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
};

export default function TopNavBar() {

    const loginUser = useContext<UserData | null | undefined>(LoginUserContext);
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const renderLoginUser = () => {
        if (loginUser) {
            return (
                <Stack direction={"row"}>

                    <Box display={"flex"} alignItems={"center"} mr={2}>
                        <IconButton
                            // sx={{ mr: 2, height: '40px', width: '90px' }}
                            sx={{color: "#154406"}}
                            onClick={() => setDrawerOpen(true)} // Open right drawer
                        >
                            <ShoppingCartIcon/>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            sx={{color: "#154406"}}
                            onClick={handleMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem>{loginUser.email}</MenuItem>
                            <MenuItem onClick={() => {
                                FirebaseAuthService.handleSignOut()
                            }}>Logout</MenuItem>
                        </Menu>
                    </Box>
                    <ShoppingCartPage drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}/>
                </Stack>
            )
        } else {
            return (
                <Button size="small" variant={"contained"} color="success" onClick={() => {
                    navigate("/login")
                }}>Login</Button>)
        }
    }
    return (
        <React.Fragment>
            <CssBaseline/>
            <ElevationScroll>
                <AppBar variant="elevation" color={"transparent"}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            sx={{mr: 2}}
                        > <Link to={"/"}>
                            <FontAwesomeIcon icon={faLeaf} style={{color: "#154406",}}/>
                        </Link>

                        </IconButton>
                        <Box sx={{flexGrow: 1}}/>
                        {
                            renderLoginUser()
                        }
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar/>
        </React.Fragment>
    );
}
