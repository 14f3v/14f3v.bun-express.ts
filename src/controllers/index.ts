import { Router } from "express";
const userController = Router();

import RepoUsers from "@repos/users";
import ObjectConvertionKeysToCamelCase from "@14f3v/obj-to-camel";

userController.get('/users', async (req, res, next) => {
    const repos = new RepoUsers();
    const users = await repos.getUsers();
    let responseUsers;
    if (users.length > 0) {
        responseUsers = users.map((obj) => ObjectConvertionKeysToCamelCase(obj));
    }
    res.status(200).json({ users: responseUsers });
});

export default userController;