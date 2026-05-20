export interface User {
    id: string;
    name?: string;
    surname?: string;
    lastname?: string;
    email: string;
}

export interface UserSchema {
    authData?: User;
}
