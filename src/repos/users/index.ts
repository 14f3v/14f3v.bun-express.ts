import type { BunFile } from "bun";
import User, { type IUser } from "@models/User";

class RepoUsers {
    private repo!: BunFile;
    constructor() {
        this.repo = Bun.file('users.mockup.json');
    };

    public async getUsers(): Promise<Array<User>> {
        let user = [] as User[];
        try {
            const users: User[] = await this.repo.json() as User[];
            user = users;
        }

        catch (Exception) {
            console.log(Exception);
        }
        return user;
    };

    public async findUser(user: User) {
        const _user = new User();
        try {
            const users: User[] = await this.repo.json() as User[];
            const getUser = users.find(({ USERNAME }) => USERNAME == user.USERNAME);
            if (getUser) {
                _user.USERNAME = getUser.USERNAME!;
                _user.FULL_NAME = getUser.FULL_NAME!;
                _user.SURNAME_NAME = getUser.SURNAME_NAME!;
            }
        }

        catch (Exception) {
            console.log(Exception);
        }
        return _user;
    };

}; interface IRepoUsers extends RepoUsers { };

export type { IRepoUsers };
export default RepoUsers;
