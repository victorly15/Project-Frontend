import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {TransactionDto} from "../TransactionDto.ts";
import TransactionProduct from "./TransactionProduct.tsx";

type Props = {
    transactionDto : TransactionDto;
}
export default function TransactionTable({transactionDto}: Props) {

    return(
        <TableContainer  component={Paper} elevation={0} sx={{border:"0px solid lightgrey", marginRight: "-1px"}}>
            <Table  aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontSize:"12px",  }}></TableCell>
                        <TableCell sx={{ fontSize:"12px", }}>Name</TableCell>
                        <TableCell sx={{ fontSize:"12px", }}>Unit Price</TableCell>
                        <TableCell sx={{ fontSize:"12px",  }}>Quantity</TableCell>
                        <TableCell sx={{ fontSize:"12px",  }}>Subtotal</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactionDto.items.map((item) => (
                        <TransactionProduct key={item.tpid} item={item}/>

                    ))}

                    <TableRow>

                        <TableCell/><TableCell/><TableCell/>
                    <TableCell sx={{ fontSize:"16px", fontWeight:"bold"  }}>Total</TableCell>
                    <TableCell sx={{ fontSize:"16px", fontWeight:"bold"  }}>{transactionDto.total}.00</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>

    );
}