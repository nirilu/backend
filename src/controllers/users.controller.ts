import { Request, Response, NextFunction } from "express";

class UsersController {

    constructor() {
        
    }

    // Get All Users
    public static GetUsers(req: Request, res: Response, next: NextFunction) {
        return res.send({name: "User", age: 33}).json();
    }

    // Get User by Id
    public static GetById(req: Request, res: Response, next: NextFunction){
        try {
            return res.send({id: req.params.id, name: "User", age: 33}).json();
        } catch (error) {
            console.log(error);
            
        }
    }
}

export default UsersController;