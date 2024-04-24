import * as FirebaseAuthService from "../authService/FriebaseAuthService.ts";
import axios from "axios";
import {CartItemDto} from "../data/CartItem/CartItemDto.ts";
import getEnvConfig from "../config/EnvConfig.ts";
const baseUrl = getEnvConfig().baseUrl;

export async function putUserCart(pid :string, quantity :string) {

    const accessToken = await FirebaseAuthService.getAccessToken();

    if (!accessToken) {
        throw new Error();
    }

    try {
        await axios.put(
            `${baseUrl}/cart/${pid}/${quantity}`,null,{headers: {Authorization: `Bearer ${accessToken}`}}
        )
    }catch (error) {
        console.log(error);
        throw error
    }
}

export async function getUserCart() {

    const accessToken = await FirebaseAuthService.getAccessToken();

    if (!accessToken) {
        throw new Error();
    }

    try {
        const response = await axios.get<CartItemDto[]>(
            `${baseUrl}/cart`,{headers: {Authorization: `Bearer ${accessToken}`}}
        )
        return response.data;
    }catch (error) {
        console.log(error);
        throw error
    }
}

export async function updateUserCart(pid :string, quantity :string) {

    const accessToken = await FirebaseAuthService.getAccessToken();

    if (!accessToken) {
        throw new Error();
    }

    try {
        await axios.patch(
            `${baseUrl}/cart/${pid}/${quantity}`, null,{headers: {Authorization: `Bearer ${accessToken}`}}
        )
    }catch (error) {
        console.log(error);
        throw error
    }
}

export async function deleteUserCart(pid :string) {

    const accessToken = await FirebaseAuthService.getAccessToken();

    if (!accessToken) {
        throw new Error();
    }

    try {
        await axios.delete(
            `${baseUrl}/cart/${pid}`, {headers: {Authorization: `Bearer ${accessToken}`}}
        )
    }catch (error) {
        console.log(error);
        throw error
    }
}



