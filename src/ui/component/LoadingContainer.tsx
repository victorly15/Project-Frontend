import {CircularProgress, Container} from "@mui/material";

export default function LoadingContainer(){
    return (

        <Container  sx={{
            height: '25vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {
                <CircularProgress color="success" />

            }


        </Container>
    )
}