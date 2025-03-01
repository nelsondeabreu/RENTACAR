import {ListUsersUseCase} from "./listUsersUseCase"
import { Request, Response } from "express";



class ListUsersController {
    constructor(private listUsersUsecase: ListUsersUseCase){}

    async handle(request: Request , response: Response){
        try{
            const allUsers = await this.listUsersUsecase.execute();
            return response.status(200).json(allUsers)
        }catch(error){
            return response.status(404).json({error: error.message})
        }
    }
}

export {ListUsersController}