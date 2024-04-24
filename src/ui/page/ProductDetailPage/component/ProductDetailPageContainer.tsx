import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useState} from "react";
import {ProductDto} from "../../../../data/product/ProductDto.ts";
import QuantitySelector from "./QuantitySelector.tsx";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';


type Props = {
    productDto: ProductDto
    handleClose : ()=> void;
}
export default function ProductDetailPageContainer({productDto ,handleClose}: Props) {

    const [count, setCount] = useState(1);

    const handleAdd = () => {
        if (count < productDto.stock) {
            setCount(count + 1);
        }
    };

    const handleMinus = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const textStyle = {
        fontSize: '10px',
    };
    const renderAddToCart = () => {
        if (productDto.stock > 0) {
            return (
                <Box mt={2}>
                    <QuantitySelector pid={productDto.pid} quantity={count} handleMinus={handleMinus}
                                      handlePlus={handleAdd}/>
                </Box>
            )
        } else {
            return (
                <Box mt={1}>
                    {/*<Typography color={"green"}>Oops out of stock</Typography>*/}
                    <Typography fontWeight={"bold"}>Out of stock</Typography>
                </Box>

            )
        }
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" position="relative">
            {/* Close button */}
            <IconButton
                aria-label="close"
                size={"small"}
                onClick={handleClose}
                sx={{ position: 'absolute', top: 0, right: 0, zIndex: 1, color: 'black' }}
            >
                <CloseIcon />
            </IconButton>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Box maxHeight={200} minHeight={200} minWidth={200} maxWidth={200} overflow="hidden">
                <img style={{maxHeight: "100%", maxWidth: "100%", objectFit: "fill"}} src={productDto.imageUrl}
                     alt="something"/>
            </Box>
            <Box>
                {/*<Typography fontWeight={"bold"} sx={textStyle}>Name:</Typography>*/}
                <Typography fontSize={16}>{productDto.name}</Typography>

                {/*<Typography fontWeight={"bold"} sx={textStyle}>Price:</Typography>*/}
                <Typography mt={1} fontWeight={"bold"}
                            sx={textStyle}>HKD {productDto.price.toLocaleString()}.00</Typography>

                {/*<Typography fontWeight={"bold"} sx={textStyle}>Description:</Typography>*/}
                <Typography mt={1} sx={textStyle}>{productDto.description}</Typography>
                {renderAddToCart()}
            </Box>
</Box>
        </Box>
    )
}