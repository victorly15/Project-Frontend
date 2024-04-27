import TopNavBar from "../../component/TopNavBar.tsx";
import {useContext, useEffect, useState} from "react";
import {TransactionDto} from "../../../data/transaction/TransactionDto.ts";
import {useParams} from 'react-router-dom';
import * as TransactionApi from "../../../api/TransactionApi.ts";
import {useNavigate} from "react-router-dom";
import TransactionTable from "../../../data/transaction/component/TransactionTable.tsx";
import LoadingContainer from "../../component/LoadingContainer.tsx";
import {Box} from "@mui/material";
import PaymentForm from "../../../data/transaction/component/PaymentForm.tsx";
import {UserData} from "../../../data/user/UserData.ts";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";
import Typography from "@mui/material/Typography";
import Footer from "../../component/Footer.tsx";


export default function Checkout() {

    const [transactionDto, setTransactionDto] = useState<TransactionDto | undefined>(undefined);
    const {transactionId} = useParams();
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
        if (transactionId && loginUser) {
            findTransactionByTid();
        }
    }, [loginUser]);


    return (


        <Box>
            <TopNavBar/>
            {
                transactionDto ? (


                        <Box >

                            <Box display={"flex"} width={"100%"} minHeight={"65vh"} flexDirection={{xs: "column", md: "row"}} justifyContent={"center"} alignContent={"center"}>


                                <Box>
                                    <Box>
                                        <Typography fontWeight={"bold"} variant={"h5"}>
                                            Order Summary
                                        </Typography>
                                    </Box>
                                    <TransactionTable transactionDto={transactionDto}/>
                                </Box>
                                <Box>
                                    <PaymentForm transactionDto={transactionDto}/>
                                </Box>


                            </Box>


                            <Box   mt={5}>
                                <Footer/>
                            </Box>

                        </Box>

                    )
                    : <LoadingContainer/>

            }
        </Box>
    )
}