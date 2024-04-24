import  {useEffect, useState} from "react";
import {ProductDto} from "../../../data/product/ProductDto.ts";
import {Box} from "@mui/material";
import * as ProductApi from "../../../api/ProductApi.ts";
import {useNavigate} from "react-router-dom";
import ProductDetailPageContainer from "./component/ProductDetailPageContainer.tsx";
import LoadingContainer from "../../component/LoadingContainer.tsx";
// import {GetAllProductDto} from "../../../data/product/GetAllProductDto.ts";

type Props = {
    productId: string
    handleClose: () => void;
}
export default function ProductDetail({productId, handleClose}:Props)
{
    const [productDto, setProductDto] = useState<ProductDto | undefined>(undefined);
    const navigate = useNavigate();
    // const { productId } = useParams();


    
    const fetchProduct= async () => {
        try {
            const responseDto = await ProductApi.getProduct(productId);
            setProductDto(responseDto);
        }catch (error) {
            navigate("/error")
        }
    }

    useEffect(() => {
        if (productId) {
        fetchProduct();} else {
            navigate("/error")
        }
    }, []);


    return(

        <Box >
            {
                     productDto?
            <ProductDetailPageContainer handleClose={handleClose} productDto={productDto}/>
                         : <LoadingContainer/>

            }


        </Box>

    );
}