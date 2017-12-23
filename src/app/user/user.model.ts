export class User {
    _id?: string;
    name: string;
    username: string;
    password: string;
    passwordConfirm: string;
    hash: string;
    salt: string;
}