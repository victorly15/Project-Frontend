import axios from "axios";
import {GetAllProductDto} from "../data/product/GetAllProductDto.ts";
import {ProductDto} from "../data/product/ProductDto.ts";
import getEnvConfig from "../config/EnvConfig.ts";

const baseUrl = getEnvConfig().baseUrl;


export async function getAllProducts(){
    try {
        const response = await axios.get<GetAllProductDto[]>(`${baseUrl}/public/product`);
        return response.data;
    }catch (error){
        console.error(error);
        throw error;
    }

}

export async function getProduct(pid: string | undefined){
    try {
        const response = await axios.get<ProductDto>(`${baseUrl}/public/product/${pid}`);
        return response.data;
    }catch (error){
        console.error(error);
        throw error;
    }

}