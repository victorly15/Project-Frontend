import TopNavBar from "../../component/TopNavBar.tsx";
import {useContext, useEffect, useState} from "react";
import {TransactionDto} from "../../../data/transaction/TransactionDto.ts";
import { useParams } from 'react-router-dom';
import * as TransactionApi from "../../../api/TransactionApi.ts";
import {useNavigate} from "react-router-dom";
import TransactionTable from "../../../data/transaction/component/TransactionTable.tsx";
import LoadingContainer from "../../component/LoadingContainer.tsx";
import { Container, Grid} from "@mui/material";
import PaymentForm from "../../../data/transaction/component/PaymentForm.tsx";
import {UserData} from "../../../data/user/UserData.ts";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";


export default function Checkout() {

    const [transactionDto, setTransactionDto] = useState<TransactionDto | undefined>(undefined);
    const { transactionId } = useParams();
    const navigate = useNavigate();
    const loginUser = useContext<UserData | undefined | null>(LoginUserContext);

    const findTransactionByTid = async () => {
        try {
            const responseDto = await TransactionApi.findTransactionById(transactionId);
            setTransactionDto(responseDto);

        } catch (error) {
            navigate("/error")
        }
    }

    useEffect(() => {
        if (transactionId && loginUser){
        findTransactionByTid();}
    }, [loginUser]);



    return(
        <Container>
        <TopNavBar/>
            {
                transactionDto? (
                        <Grid container spacing={0}>
                            <Grid item xs={12} md={12} >

                            <TransactionTable transactionDto={transactionDto}

                            />
                            </Grid>
                            <Grid item xs={12} md={12} container justifyContent="flex-end">
                    <PaymentForm transactionDto={transactionDto}/>
                            </Grid>
                        </Grid>
                )
                    : <LoadingContainer/>

            }

        </Container>
    )
}