class User {
    public USERNAME!: string;
    public FULL_NAME!: string;
    public SURNAME_NAME!: string;
    constructor(
        USERNAME?: string,
        FULL_NAME?: string,
        SURNAME_NAME?: string,
    ) {
        this.USERNAME = USERNAME!;
        this.FULL_NAME = FULL_NAME!;
        this.SURNAME_NAME = SURNAME_NAME!;
    };

}; interface IUser extends User { };

export type { IUser };
export default User;
