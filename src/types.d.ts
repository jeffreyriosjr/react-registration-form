type User = {
    _id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

type InitialStateType = {
    users: User[];
    user: User|undefined;
    saveUser: (user:User) => void;
    alert: string;
}
