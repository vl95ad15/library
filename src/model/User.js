export default class User {
    constructor(id: number, name: string, email: string, password: string, account: any) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._password = password;
        this._account = account;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get email(): string {
        return this._email;
    }

    get password(): string {
        return this._password;
    }

    get account(): any {
        return this._account;
    }

}
