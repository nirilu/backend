import { Express } from "express"
import UsersController from "../controllers/users.controller";

function routes(app: Express){

    app.get("/users", UsersController.GetUsers);
    app.get("/users/:id", UsersController.GetById);
}

export default routes;

