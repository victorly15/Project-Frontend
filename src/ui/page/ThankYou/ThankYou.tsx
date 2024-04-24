import {Box, Container} from "@mui/material";
import TopNavBar from "../../component/TopNavBar.tsx";
import GoHome from "../../component/GoHome.tsx";
import Typography from "@mui/material/Typography";


export default function ThankYou() {
    return (


        <Container>
            <TopNavBar/>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="60vh"
                textAlign={"center"}
                mt={3}
            >
                <Box
                    height={{ xs: '50vh', sm: '60vh', md: '70vh', lg: '80vh', xl: '90vh' }} // Adjust height for different screen sizes
                    width={{ xs: '80%', sm: '60%', md: '50%', lg: '40%', xl: '30%' }} // Adjust width for different screen sizes

                    borderRadius={16}
                    sx={{
                        backgroundImage: `url(https://img.freepik.com/free-photo/betta-fish-with-dress-design-copy-space_23-2148359828.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1711929600&semt=ais)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                    <Box
                        mt={18}>
                        <Typography variant="h5"
                                    fontWeight="bold" color={"white"}>
                            "Thank You."
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box mt={10} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <GoHome/>
            </Box>


        </Container>
    );
}