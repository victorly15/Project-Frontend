import {TableCell, TableRow} from "@mui/material";
import {Item} from "../TransactionDto.ts";

type Props = {
    item: Item;
}
export default function TransactionProduct({item}:Props){

    return (

        <TableRow
        >
            <TableCell>
                <img
                    src={item.product.imageUrl} alt={"image"} height={50}/>
            </TableCell>
            <TableCell >{item.product.name}</TableCell>
            <TableCell >{item.product.price}.00</TableCell>
            <TableCell >{item.quantity}</TableCell>
            <TableCell >{item.subtotal}.00</TableCell>
        </TableRow>
    )
}