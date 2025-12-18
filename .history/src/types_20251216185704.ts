export type AppState = {
    currentStudent: CurrentStudent; 
    lastActions: LastActions[];
    hasPayd: PaymentStatus;
}

type CurrentStudent = {
    id: number;
    name: string;
    age: number;
    discordId: string;
    email: string;
}

type LastActions = {
    action: string[];
    timestamp: Date;
}

type PaymentStatus = 'paid' | 'unpaid' | 'pending';