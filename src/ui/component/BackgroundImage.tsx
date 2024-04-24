import {Box, Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLeaf} from "@fortawesome/free-solid-svg-icons";


type Props = {
    scrollButton: () => void;
}

export default function BackgroundImage({scrollButton}: Props) {


    return (
        <Container>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="60vh"
                textAlign={"center"}
                mt={3}
            >
                <Box
                    height={"110%"}
                    width={"150%"}
                    borderRadius={16}
                    sx={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://aquascapinglove.com/wp-content/uploads/2019/10/aquascaping-styles-nature-aquarium-iwagumi-dutch-aquarium.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                    <Box
                        mt={22}>
                        <Typography variant="h3"
                                    fontWeight="bold" color={"white"}>
                            AquaLeaf<FontAwesomeIcon icon={faLeaf} size="lg"/>
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                mt={6}
                mb={3}
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                justifyContent="space-between"
                height={{ xs: "auto", md: "50vh" }}
                // width="100%"
            >
                <Box
                    width={{ xs: "100%", md: "50%" }}
                    padding={2}
                    display={"flex"}
                    alignItems="center" // Center content vertically
                    justifyContent="center" // Center content horizontally
                    boxSizing="border-box">
                    <Box textAlign={"center"}
                         paddingTop={5}
                         paddingRight={12}
                         paddingLeft={10}>
                        <Typography fontSize={8}>
                            Aquascaping
                        </Typography>
                        <Typography fontWeight={"bold"} variant={"h3"}>
                            Transforming Serenity Underwater
                        </Typography>
                        <Typography fontSize={10} mt={1}>
                            Immerse yourself in the art of aquascaping, crafting tranquil underwater landscapes that
                            transform your space.
                        </Typography>
                        <Box mt={3}>
                            <Button size="small" variant={"outlined"} sx={{
                                backgroundColor: 'black',
                                borderRadius: 3,
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#154406',
                                },
                            }} onClick={scrollButton}>
                                <Typography fontSize={12}>Shop now
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                </Box>

                <Box
                    width={{ xs: "100%", md:"100%"}}
                    height={{ xs: "0%", md: "100%" }}
                    padding={2}
                    boxSizing="border-box"
                    borderRadius={{ xs: 20, md: 20 }}

                    sx={{
                        backgroundImage: ` url(https://st4.depositphotos.com/4459753/40413/i/450/depositphotos_404135492-stock-photo-big-fire-red-or-cherry.jpg)`,
                        // backgroundImage: `url(https://i.pinimg.com/originals/73/fb/d7/73fbd735ec96088e518bdccc01ed6373.gif)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        filter: 'sepia(50%)',
                    }}>

                    <Box>


                    </Box>
                </Box>
            </Box>
        </Container>
    )
}
//