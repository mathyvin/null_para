export interface ITransaction {
    id?: number;
    amount: number;
    description: string;
    senderId: number;
    receiverId: number;
    datetime: Date;
}