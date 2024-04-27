import TopNavBar from "../../component/TopNavBar.tsx";

import {Box} from "@mui/material";

import GoHome from "../../component/GoHome.tsx";


export default function ErrorPage()
{
    return (
        <>
        <TopNavBar/>
            <Box width={"100vw"} display={"flex"} textAlign={"center"} alignItems={"center"} justifyContent={"center"} alignContent={"center"} >
            <Box  display={"flex"} textAlign={"center"} alignItems={"center"} justifyContent={"center"} alignContent={"center"} height={"90vh"} width={"60vw"}
            sx={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: 'url(https://i.gifer.com/origin/78/787899e9d4e4491f797aba5c61294dfc_w200.gif)'
            }}
            >

                <Box mt={20} textAlign={"center"} alignItems={"center"} justifyContent={"center"} alignContent={"center"} >
                    <GoHome/>


                </Box>
                {/*<img  src={"https://i.gifer.com/origin/78/787899e9d4e4491f797aba5c61294dfc_w200.gif"} alt={"dinasour"}/>*/}
            </Box>
            </Box>

        </>
    )
}