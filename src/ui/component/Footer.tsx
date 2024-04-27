import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import {faLeaf} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faLinkedin, faSquareInstagram, faVimeoV} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {


    return (

        <Box paddingTop={2} height={"23vh"} width={"100%"} sx={{backgroundColor:"whitesmoke"}} justifyContent={"center"} alignItems={"center"} textAlign={"center"}>

            <Box my={2} >
                <Typography fontWeight={"bold"} color={"lightgrey"}>Aqualeaf<FontAwesomeIcon icon={faLeaf} size="lg"/></Typography>
            </Box>
            <Box my={3} >
                <Typography color={"lightgrey"}>
                    <FontAwesomeIcon icon={faFacebook} /> <FontAwesomeIcon icon={faSquareInstagram} /> <FontAwesomeIcon icon={faLinkedin} /> <FontAwesomeIcon icon={faVimeoV} />
                </Typography>

            </Box>
            <Box mb={7} mt={3} >
                <Typography fontSize={"12px"} color={"lightgrey"}>
                    © 2024 Victor Wong. All rights reserved
                </Typography>
            </Box>

        </Box>
    )
}