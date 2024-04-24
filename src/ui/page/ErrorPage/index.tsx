import TopNavBar from "../../component/TopNavBar.tsx";

import {Box} from "@mui/material";

import GoHome from "../../component/GoHome.tsx";


export default function ErrorPage()
{
    return (
        <>
        <TopNavBar/>
            <Box  display={"flex"} justifyContent={"center"} alignContent={"center"} height={"50vh"} width={"100vw"}>
                <img  src={"https://i.gifer.com/origin/78/787899e9d4e4491f797aba5c61294dfc_w200.gif"} alt={"dinasour"}/>
            </Box>
            <Box paddingTop={10} textAlign={"center"} alignItems={"center"} justifyContent={"center"} alignContent={"center"} >
                    <GoHome/>


            </Box>
        </>
    )
}