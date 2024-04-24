import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box, CardActionArea, Modal} from '@mui/material';
import {GetAllProductDto} from "../../data/product/GetAllProductDto.ts";
import ProductDetail from "../page/ProductDetailPage/ProductDetailPage.tsx";
import React from "react";


type Props = {
    dto: GetAllProductDto
}

export default function ProductCard({dto}:Props) {



    const [open, setOpen] = React.useState(false);
    const handleOpen = () =>
    {   if(!open)
    {
        setOpen(true)}
    }
    const handleClose = () => setOpen(false);




    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: '16px',
    };


        return (
        <Card
            variant={"outlined"}
            sx={{ maxWidth: 600,
            borderRadius: '16px',
            ':hover': {
                boxShadow: 10,
        }} }>
            <CardActionArea

                onClick={handleOpen}>
                {/*<CardActionArea component={RouterLink} to={`/Product/${dto.pid}`}>*/}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div>
                    {/*<ClickAwayListener onClickAway={handleClose}>*/}
                    <Box sx={style}>
                        <ProductDetail handleClose={handleClose} productId={dto.pid.toString()}/>
                    </Box>
                    {/*</ClickAwayListener>*/}
                        </div>
                </Modal>


                <CardMedia
                    component="img"
                    height="280"
                    image={dto.image_url}
                    alt="green iguana"
                    sx={{objectFit: "contain",

                        transition: 'transform 1s ease-in-out',
                        '&:hover': {
                            transform: 'scale(1.1)'}}}
                />
                <CardContent sx={{zIndex:1}}>
                    <Typography fontSize={12} color={"#1c1c1c"} gutterBottom align="center" component="div" height="3rem">
                        {dto.name}
                    </Typography>
                    <Typography  fontSize={12} fontWeight={"bold"} variant="body2" align="center" color="black">
                        {
                            dto.hasStock? `HKD ${dto.price}` : "Out of Stock"
                        }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}