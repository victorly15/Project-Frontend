import * as FirebaseAuthService from "../authService/FriebaseAuthService.ts";
import axios from "axios";
import getEnvConfig from "../config/EnvConfig.ts";

const baseUrl = getEnvConfig().baseUrl;

export async function prepareTransaction() {

    const accessToken = await FirebaseAuthService.getAccessToken();

    if (!accessToken) {
        throw new Error();
    }

    try {
        const response = await axios.post(
            `${baseUrl}/transaction/prepare`,null, {headers: {Authorization: `Bearer ${accessToken}`}}
        )
        return response.data;
    }catch (error) {
        console.log(error);
        throw error
    }
}

export async function findTransactionById(tid : string | undefined) {

    const accessToken = await FirebaseAuthService.getAccessToken();

    if (!accessToken) {
        throw new Error();
    }

    try {
        const response = await axios.get(
            `${baseUrl}/transaction/${tid}`, {headers: {Authorization: `Bearer ${accessToken}`}}
        )
        return response.data;
    }catch (error) {
        console.log(error);
        throw error
    }
}

export async function payTransactionById(tid : string | undefined) {

    const accessToken = await FirebaseAuthService.getAccessToken();

    if (!accessToken) {
        throw new Error();
    }

    try {
        await axios.patch(
            `${baseUrl}/transaction/${tid}/pay`,{}, {headers: {Authorization: `Bearer ${accessToken}`}}
        )
    }catch (error) {
        console.log(error);
        throw error
    }
}

export async function finishTransactionById(tid : string | undefined) {

    const accessToken = await FirebaseAuthService.getAccessToken();

    if (!accessToken) {
        throw new Error();
    }

    try {
        await axios.patch(
            `${baseUrl}/transaction/${tid}/finish`,{}, {headers: {Authorization: `Bearer ${accessToken}`}}
        )
    }catch (error) {
        console.log(error);
        throw error
    }
}