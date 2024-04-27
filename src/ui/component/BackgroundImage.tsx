import {Box, Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLeaf} from "@fortawesome/free-solid-svg-icons";
import fish from "../component/transparent-guppy-betta-fish-red-betta-blue-betta-fish-swimmin-betta-fish-swimming-gracefully-near-surface660d99b824a134.55530147.png"


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
                    width={"100%"}
                    borderRadius={16}
                    sx={{
                        // linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                        backgroundImage: `url(https://aquascapinglove.com/wp-content/uploads/2019/10/aquascaping-styles-nature-aquarium-iwagumi-dutch-aquarium.jpg)`,
                        // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://erzcdxxk5qk.exactdn.com/wp-content/uploads/2024/03/Betta-fish-in-decorated-tank-with-green-plants-hiding-spot-stones-gentle-flow-1024x574.jpg?strip=all&lossy=1&ssl=1)`,
                        backgroundSize: 'cover',
                        filter: 'brightness(90%)',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                    <Box
                        sx={{
                            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"
                        }}
                        mt={10}
                    paddingY={12}>
                        <Typography variant="h2"
                                    fontWeight="bold" color={"white"}>
                            AquaLeaf<FontAwesomeIcon icon={faLeaf} size="lg"/>
                        </Typography>
                        <Box mt={3}>
                            <Button size="large" variant={"outlined"} sx={{
                                backgroundColor: 'transparent',
                                borderRadius: 3,
                                borderWidth: 1,
                                borderColor: "white",
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    borderColor: "white",
                                    // color:"grey",
                                },
                            }} onClick={scrollButton}>
                                <Typography fontSize={12}>Shop now
                                </Typography>
                            </Button>
                        </Box>

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
                         // display={"flex"}
                         alignItems="center" // Center content vertically
                         justifyContent="center"
                         paddingTop={5}
                         paddingRight={12}
                         paddingLeft={10}
                        >
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
                        <Typography variant={"h4"}>
                            <FontAwesomeIcon icon={faLeaf} color={"#154406"} size="lg"/>
                        </Typography>


                    </Box>
                </Box>

                <Box
                    // boxShadow={10}
                    width={{ xs: "100%", md:"50%"}}
                    height={{ xs: "100%", md: "100%" }}
                    // padding={2}
                    paddingTop={2}
                    paddingBottom={20}
                    // paddingY={20}
                    boxSizing="border-box"
                    borderRadius={{ xs: 30, md: 30 }}
                    // borderTopLeftRadius={{ xs: 20, md: 20 }}
                    // borderBottomLeftRadius={{ xs: 20, md: 20 }}

                    // overflow={"hidden"}
                    sx={{
                        backgroundImage: ` url(https://www.nationalparkaquarium.org/wp-content/uploads/2022/04/how-to-add-co2-to-aquariums.jpg)`,
                        // backgroundImage: `url(https://i.pinimg.com/originals/73/fb/d7/73fbd735ec96088e518bdccc01ed6373.gif)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        // borderTopLeftRadius: "100px",
                        // borderBottomLeftRadius: "100px",
                        // borderTopRightRadius: "200px",
                        // borderBottomRightRadius: "200px"
                        transform: "scaleX(-1)",
                        // filter: 'sepia(50%)',
                    }}>

                    <Box mr={-12} textAlign={"right"} zIndex={1}>
                        {/*<Typography color={"grey"} fontSize={"100px"}>*/}
                        {/*    <FontAwesomeIcon  icon={faFishFins} />*/}
                        {/*</Typography>*/}
                        <img

                            src={fish} alt={"fish"}
                            style={{ width: '200px', height: 'auto' }}
                        />

                    </Box>
                </Box>
            </Box>
        </Container>
    )
}
//