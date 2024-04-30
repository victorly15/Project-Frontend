import {Box, Container} from "@mui/material";
import TopNavBar from "../../component/TopNavBar.tsx";
import GoHome from "../../component/GoHome.tsx";
import Typography from "@mui/material/Typography";
import fish from "../../component/small-silver-fish-aquarium-black-background.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";



export default function ThankYou() {
    return (


        <Box height={"100vh"} sx={{

            backgroundImage: `url(${fish})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <TopNavBar/>
        <Container>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"

                textAlign={"center"}

            >
                <Box>
                    <Box
                        mt={10}

                        paddingX={5}
                    padding={10}
                        sx={{
                            borderRadius: "20px",
                            backgroundColor: "rgba(0, 0, 0, 0.8)"
                        }}
                    >
                        <Typography fontSize={"50px"} color="white">
                            <FontAwesomeIcon icon={faCircleCheck} />
                        </Typography>



                        <Typography
                                    variant={"h3"} fontWeight="bold" color={"white"}>
                            Thank You
                        </Typography>
                        <Typography color={"white"}>You may pick up your products at our store with your credit card info provided.</Typography>
                        <Box mt={5} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                            <GoHome/>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Container>
            {/*<Box mt={3}>*/}
            {/*    <Footer/>*/}
            {/*</Box>*/}

        </Box>
    );
}