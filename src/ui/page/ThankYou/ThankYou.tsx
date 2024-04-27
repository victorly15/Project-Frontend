import {Box, Container} from "@mui/material";
import TopNavBar from "../../component/TopNavBar.tsx";
import GoHome from "../../component/GoHome.tsx";
import Typography from "@mui/material/Typography";
// import {faLeaf} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../component/Footer.tsx";



export default function ThankYou() {
    return (


        <Box>
            <TopNavBar/>
        <Container>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                // height="60vh"
                textAlign={"center"}
                // mt={10}
                zIndex={-1}

            >
                <Box

                    height={{ xs: '65vh',md: '65vh'}}

                    boxShadow={3} p={3}
                    width={{ xs: '80%', md: '100%' }} // Adjust width for different screen sizes
                    overflow={"hidden"}
                    // borderRadius={8}
                    sx={{
                        // backgroundImage: `url(https://img.freepik.com/free-photo/betta-fish-with-dress-design-copy-space_23-2148359828.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1711929600&semt=ais)`,

                        backgroundImage: `url(https://flipaquatics.com/cdn/shop/files/RedKingKongcopy_600x.jpg?v=1692280421)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                    <Box

                        paddingX={5}
                    padding={5}
                        sx={{
                            backgroundColor: "rgba(0, 0, 0, 0.5)"
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
            <Box mt={3}>
                <Footer/>
            </Box>

        </Box>
    );
}