import {Backdrop, Box, CircularProgress, Divider, Paper, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {TransactionDto} from "../TransactionDto.ts";
import * as TransactionApi from "../../../api/TransactionApi.ts";
import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";

type Props = {
    transactionDto : TransactionDto | undefined;
}

export default function PaymentForm({transactionDto}: Props) {

    const navigate = useNavigate();
    const { transactionId } = useParams();
    const [sending, setSending] = useState<boolean>(false)

    const payTransactionByTid = async () => {
        try {
            setSending(true);
            await TransactionApi.payTransactionById(transactionId);
            await TransactionApi.finishTransactionById(transactionId);
            setSending(false);
            navigate("/thankyou");


        } catch (error) {
            navigate("/error")
        }
    }

    
    return (
        <Paper
            // onSubmit={handleSubmit}

               sx={{
                   borderRadius:"20px",
                   backgroundColor:"whitesmoke",
                   width:"400px", border:"0px solid lightgrey",
                   px: 3,
                   py:3,
                   // mt: 6,
                   height: "fit-content"}} elevation={0} square={false}>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box>
                    <Typography >Payment info -</Typography>
                </Box>
                <Box>
                    <Typography color={"grey"}>Total: HKD {transactionDto?.total}.00</Typography>
                </Box>

            </Box>

            <Box textAlign={"center"}>
            <Divider/>
            </Box>

            <Box   sx={{alignItems:"center", justifyContent:"center"}}>

                <Box my={3}>
                    <TextField color={"success"} label="Credit Card number" variant="outlined" fullWidth
                               inputProps={{
                                   maxLength: 19, // Allow up to 19 characters (with spaces) for a typical credit card number
                                   pattern: '[0-9]{13,19}', // Validate input as numeric and between 13 to 19 characters
                                   title: 'Please enter a valid credit card number', // Error message for pattern validation
                               }}
                        /*/           onChange={handleEmailChange}*/
                    />
                </Box>
                <Box display={"flex"} justifyContent={"space-between"}>
                <Box my={3} width={"45%"}>
                    <TextField
                        color={"success"}
                        label="Expiry Date"
                        variant="outlined"
                        fullWidth
                        placeholder="MM/YY"
                        inputProps={{
                            maxLength: 5,
                            pattern: '(0[1-9]|1[0-2])/(\\d{2})', // Validate as MM/YY format
                            title: 'Please enter a valid expiry date (MM/YY)',
                        }}
                    />
                </Box>

                    <Box my={3} width={"45%"}>

                        <TextField
                            color={"success"}
                            label="CVV"
                            variant="outlined"
                            fullWidth
                            placeholder="CVV"
                            inputProps={{
                                maxLength: 4,
                                pattern: '\\d{3,4}', // Validate as 3 or 4 digits
                                title: 'Please enter a valid CVV (3 or 4 digits)',
                            }}
                        />
                    </Box>
                </Box>
                <Box>
                    <img style={{backgroundColor: "transparent"}} width={"50%"} src={"https://www.pngitem.com/pimgs/m/282-2823780_mastercard-visa-debit-card-hd-png-download.png"} alt={"visa"}/>
                </Box>
                <Box my={3}>
                    <Button onClick={payTransactionByTid}  sx={{ borderRadius: '0px',
                        backgroundColor: 'black', // Set background color to black
                        color: 'white', // Set text color to white
                        '&:hover': {
                            backgroundColor: 'black', // Set hover background color
                        },
                    }} variant={"contained"} fullWidth>Submit Payment</Button>
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={sending}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </Box>
            </Box>

        </Paper>
    )
}