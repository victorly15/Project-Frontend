export interface TransactionDto {
    tid:       number;
    dateTime:  string;
    status:    string;
    total:     number;
    buyer_uid: number;
    items:     Item[];
}

export interface Item {
    tpid:     number;
    quantity: number;
    subtotal: number;
    product:  Product;
}

export interface Product {
    pid:         number;
    name:        string;
    description: string;
    imageUrl:    string;
    price:       number;
    stock:       number;
}
