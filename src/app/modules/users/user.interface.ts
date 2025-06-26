export type Tuser ={
    name: string;
    email: string;
    age: number;
    password: string;
    isActive: boolean;
    role: 'admin' | 'user';
}