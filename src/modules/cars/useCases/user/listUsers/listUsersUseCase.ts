import { UserRepository } from "../../../repositories/UserRepository";



class ListUsersUseCase {
    constructor(private userReposiroy: UserRepository){}

    async execute(){
        try{
            const allUsers = await this.userReposiroy.allUsers();
            if(!allUsers) throw new Error("Any user found.");

            return allUsers;
            
        }catch(error){
            throw error
        }
    }
}

export {ListUsersUseCase}