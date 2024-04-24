
import * as TransactionApi from "../../../../api/TransactionApi.ts";
import {useEffect, useState} from "react";
import {TransactionDto} from "../../../../data/transaction/TransactionDto.ts";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";


export default function CheckOutButton(){

    const [prepareTransactionDto, setPrepareTransactionDto] = useState<TransactionDto | undefined>(undefined)
    const [checkingout, setCheckingout] = useState<boolean>(false)
    const navigate = useNavigate();
    const prepareTransaction = async () => {

        try {
            setCheckingout(true);
            const responseDto = await TransactionApi.prepareTransaction();
            setPrepareTransactionDto(responseDto);
            setCheckingout(false);


        } catch (error) {
            navigate("/error")
        }
    }

    useEffect(() => {
        if (prepareTransactionDto) {
            console.log('Navigating to checkout:', prepareTransactionDto.tid);
            navigate(`/checkout/${prepareTransactionDto.tid}`);
        }
    }, [prepareTransactionDto, navigate]);

    return (
        <Button onClick={prepareTransaction} disabled={checkingout} sx={{ width: '85%', backgroundColor: 'black', // Set background color to black
            color: 'white', // Set text color to white
            '&:hover': {
                backgroundColor: '#154406', // Set hover background color
            }, }} variant="contained"
        >
            Checkout
        </Button>
    );
}