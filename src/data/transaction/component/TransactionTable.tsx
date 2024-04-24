import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {TransactionDto} from "../TransactionDto.ts";
import TransactionProduct from "./TransactionProduct.tsx";

type Props = {
    transactionDto : TransactionDto;
}
export default function TransactionTable({transactionDto}: Props) {

    return(
        <TableContainer  component={Paper} elevation={0} sx={{border:"1px solid lightgrey", marginRight: "-1px"}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontSize:"12px", backgroundColor: 'grey', color: 'white' }}></TableCell>
                        <TableCell sx={{ fontSize:"12px", backgroundColor: 'grey', color: 'white' }}>Name</TableCell>
                        <TableCell sx={{ fontSize:"12px", backgroundColor: 'grey', color: 'white' }}>Unit Price</TableCell>
                        <TableCell sx={{ fontSize:"12px", backgroundColor: 'grey', color: 'white' }}>Quantity</TableCell>
                        <TableCell sx={{ fontSize:"12px", backgroundColor: 'grey', color: 'white' }}>Subtotal</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactionDto.items.map((item) => (
                        <TransactionProduct key={item.tpid} item={item}/>

                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
}