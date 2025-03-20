import { UserRepository } from "../../../repositories/UserRepository";




class DeleteAllUsersUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(){
        try {
            const allusers = await this.userRepository.allUsers()
            if(allusers.length === 0) throw new Error("any user not found.");
            
            await this.userRepository.deleteAllUsers()

        } catch (error) {
            throw error
        }
    }
}

export {DeleteAllUsersUseCase}